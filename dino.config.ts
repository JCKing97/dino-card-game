export interface DinoConfig {
  dinoServiceUrl?: string;
}

const dinoConfig: DinoConfig = {
  dinoServiceUrl: "http://host.docker.internal:8080/api/"
};

export default dinoConfig;
