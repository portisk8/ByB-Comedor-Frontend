import { axiosRequest } from "../utils/requests";
import CONFIG from "../common/environment";

const __APIURL = CONFIG.API_URL;

export async function comedorListarService() {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/comedor/listar`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
export async function comedorCambiarService(comedorId) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/comedor/${comedorId}/cambiar`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}

export async function comedorGuardarService(form) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/comedor/guardar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: form,
  });
}

