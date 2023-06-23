import httpClient from "./httpClient";
import { environment } from "./ environments/environment";

export const logoutUser = async () => {
    await httpClient.post(`${environment.url}/logout`);
    window.location.href = "/";
  };
