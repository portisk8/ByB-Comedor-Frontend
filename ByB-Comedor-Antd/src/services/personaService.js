import { axiosRequest } from "../utils/requests";
import CONFIG from "../common/environment";

const __APIURL = CONFIG.API_URL;

export async function personaBuscarService(filtro) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/buscar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: filtro,
  });
}
