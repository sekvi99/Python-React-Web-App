import { Environment } from "../interfaces/environment.interface";

let url: string;

if (process.env.DOCKER_ENV === 'true') {
  url = 'http://flask-server-app:5000';
} else {
  url = 'https://127.0.0.1:5000';
}

export const environment: Environment = {
  production: true,
  url: 'http://172.24.0.4:5000',
};