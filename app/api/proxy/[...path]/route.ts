export const runtime = 'nodejs';

import dinoConfig from '../../../../dino.config';

function getFallbackHosts() {
  return ['127.0.0.1', 'localhost', 'host.docker.internal'];
}

async function tryFetchUrls(urls: string[], request: any) {
  let firstError: any;
  for (const url of urls) {
    try {
      console.log('proxy: trying backend url', url);
      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          accept: request.headers?.get('accept') ?? '*/*',
        },
        redirect: 'follow',
      });
      if (!resp.ok) {
        console.log('proxy: backend response not ok', resp.status, resp.statusText, url);
      }
      return resp;
    } catch (err) {
      console.error('proxy: backend fetch failed for', url, err);
      if (!firstError) firstError = err;
    }
  }
  throw firstError ?? new Error('proxy: no urls to try');
}

export async function GET(request: any, context: any) {
  console.log('proxy: GET handler entered');
  // Next's context.params can be a Promise in some typings; normalize it
  let paramsObj = context?.params;
  if (paramsObj && typeof paramsObj.then === 'function') {
    paramsObj = await paramsObj;
  }
  const pathSegments = paramsObj?.path ?? [];
  const pathStr = pathSegments.join('/');
  const backendBase = dinoConfig.dinoServiceUrl ?? '';
  const rawUrl = typeof request.url === 'string' ? request.url : request?.nextUrl?.href;
  console.log('proxy: request.url=', rawUrl);
  const reqUrl = new URL(rawUrl ?? 'http://127.0.0.1');
  const query = reqUrl.search ?? '';
  const targetUrl = `${backendBase}${pathStr}${query}`;
  console.log('proxy: backendBase=', backendBase, 'pathStr=', pathStr, 'query=', query);
  console.log('proxy: targetUrl=', targetUrl);

  const urlsToTry = [targetUrl];
  try {
    const parsed = new URL(targetUrl);
    const host = parsed.hostname;
    if (host === '127.0.0.1' || host === 'localhost') {
      const fallbackHosts = getFallbackHosts();
      const fallbackUrls = fallbackHosts
        .filter((h) => h !== host)
        .map((hostName) => {
          const clone = new URL(parsed.href);
          clone.hostname = hostName;
          return clone.toString();
        });
      urlsToTry.push(...fallbackUrls);
    }
  } catch (error) {
    console.error('proxy: invalid targetUrl', error);
  }

  try {
    const backendRes = await tryFetchUrls(urlsToTry, request);
    console.log('proxy: backend status=', backendRes.status, backendRes.statusText);
    const headers = new Headers(backendRes.headers);
    headers.delete('transfer-encoding');

    const body = await backendRes.arrayBuffer();
    return new Response(body, {
      status: backendRes.status,
      statusText: backendRes.statusText,
      headers,
    });
  } catch (err) {
    console.error('proxy: fetch error', err);
    return new Response(JSON.stringify({ error: 'proxy_error', detail: String(err) }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}
