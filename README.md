## Running the dev server via npm

First, install dependencies:

```bash
npm install
```
Then, start the development server:

```bash
npm run dev
```
Finally, open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

## Running a dev server via Docker

This guide will help you set up and run the **Dino Card Game** app locally on a **Windows** device using **Docker** and **Next.js**.

### Prerequisites

Before you begin, ensure you have the following installed on your Windows device:

1. **Docker Desktop**
- Download and install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).
- Follow the installation instructions and restart your device if required.

2. **Git**
- Install [Git for Windows](https://git-scm.com/download/win) to clone the repository.

3. **Node.js (Optional)**
- While not strictly required (since we’re using Docker), Node.js can be useful for running commands locally if needed.
- Download and install [Node.js](https://nodejs.org/).

### Step 1: Clone the Repository

1. Open **Command Prompt** or **Git Bash**.
2. Navigate to the directory where you want to clone the project:
```bash
cd path/to/your/projects
```
Clone the repository:

```bash
git clone https://github.com/JCKing97/dino-card-game-frontend.git
```

Navigate to the project directory:

```bash
cd dino-card-game-frontend
```

### Step 2: Build the Docker Image

Ensure Docker Desktop is running. Open the Docker Desktop app and verify it shows “Docker Desktop is running.”

Build the Docker image:

```bash
docker build -t dino-card-game-frontend .
```

### Step 3: Run the Docker Container

Start the Docker container:

```bash
docker run -p 3000:3000 -d dino-card-game-frontend
```
-p 3000:3000 maps port 3000 on your local machine to port 3000 in the container.
-d runs the container in detached mode (in the background).

Verify the container is running:

```bash
docker ps
```

### Step 4: Access the App

Open your web browser and navigate to: [http://localhost:3000](http://localhost:3000)

You should see the Dino Card Game app running!

### Step 5: Stop the Docker Container

When you’re done using the app, stop the Docker container:

List all running containers:

```bash
docker ps
```
Find the dino-card-game-frontend container in the list and note its CONTAINER ID.
Stop the container:

```bash
docker stop <CONTAINER_ID>
```

Replace <CONTAINER_ID> with the actual container ID.

### Troubleshooting

#### Issue 1: Docker Build Fails

Cause: The Dockerfile might not be in the correct location or might have errors.
Solution:
    Ensure the Dockerfile is in the root of your project.
    Double-check the Dockerfile for typos or missing instructions.

#### Issue 2: Port Conflict

Cause: Another service is already using port 3000.
Solution:
    Change the port mapping in the docker run command:

    ```bash
    docker run -p 3001:3000 -d dino-card-game-frontend
    ```
    Access the app at http://localhost:3001.

#### Issue 3: Docker Desktop Not Running

Cause: Docker Desktop is not running or is not properly installed.
Solution:
    Open Docker Desktop and ensure it’s running.
    Restart your device if needed.

#### Issue 4: App Not Loading in Browser

Cause: The Next.js app might not be fully started inside the container.
Solution:
    Check the container logs:

    ```bash
    docker logs <CONTAINER_ID>
    ```
    Look for errors or messages indicating that the app failed to start.

#### Issue 5: Missing Dependencies

Cause: The package.json or node_modules might be missing.
Solution:
    Ensure the package.json and package-lock.json files are in the project root.
    Rebuild the Docker image:

    ```bash
    docker build -t dino-card-game-frontend .
    ```

## Running deployed as a container on Azure

Currently this is disabled by renaming `deploy.yml` to `deploy.yml.disabled`.

There is a github action setup called `Deploy Dino Card Game to ACR and ACI`. This uses the `deploy.yml` file to instruct GitHub on how to build and push a docker image to the Azure Container Registry and then deploy a container using that image to the Azure Container Instances (ACI).

This action happens on every push to main. Be very careful to start and stop this instance as required to avoid charges.

## Running deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.