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
export async function personaGuardarService(form) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/guardar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: form,
  });
}
export async function personaListarService(filtro) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/listar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: filtro,
  });
}
export async function personaObtenerService(personaId) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/${personaId}/obtener`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
export async function personaHistorialBuscarService(filtro) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/historial/buscar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: filtro,
  });
}
export async function personaHistorialGuardarService(form) {
  let token = localStorage.getItem("token");

  return axiosRequest(`${__APIURL}/api/persona/historial/guardar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: form,
  });
}
