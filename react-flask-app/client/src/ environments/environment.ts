import { Environment } from "../interfaces/environment.interface";

let url: string;

if (process.env.DOCKER_ENV === 'true') {
  url = 'http://flask-server-app:5000';
} else {
  url = 'http://127.0.0.1:5000';
}

export const environment: Environment = {
  production: process.env.DOCKER_ENV === 'true',
  url,
};