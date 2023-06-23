import httpClient from "./httpClient";

export const apiKey = 'ba666580-bea9-414f-8c2f-5a3ca20ebf6d';

export const logoutUser = async () => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };
