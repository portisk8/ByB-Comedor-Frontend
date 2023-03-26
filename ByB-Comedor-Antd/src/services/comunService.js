import { axiosRequest } from "../utils/requests";
import CONFIG from "../common/environment";

const __APIURL = CONFIG.API_URL;

export async function sexoTipoListarService() {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/comun/sexoTipo/listar`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
export async function documentoTipoListarService() {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/comun/documentoTipo/listar`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
