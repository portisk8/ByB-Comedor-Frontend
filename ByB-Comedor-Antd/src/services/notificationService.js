import CONFIG from "../common/environment";
import { axiosRequest } from "../utils/requests";

const __APIURL = CONFIG.API_URL;

export async function getNotificationsService() {
  const token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/notificacion`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}

export async function clearNotificationsService() {
  const token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/notificacion/vaciar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
