import { axiosRequest } from "../utils/requests";
import CONFIG from "../common/environment";

const __APIURL = CONFIG.API_URL;

export async function loginService(body) {
  // body.nombreUsuario = body.username;
  // return Promise.resolve({
  //   data: {
  //     token:
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzcwMzIxODMsImV4cCI6MTcwODU2ODI4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXSwidXN1YXJpb19ub21icmUiOiJBdWd1c3RvIiwidXN1YXJpb0lkIjoiMSIsImhhYmlsaXRhZG8iOiJ0cnVlIn0.aYEXhE0kWSJi6NxMcoey3TQGnXhJ5gAU9vZageJ9BtE",
  //   },
  // });
  return axiosRequest(`${__APIURL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
}

export async function refreshTokenService() {
  let token = localStorage.getItem("token");
  return axiosRequest(`${__APIURL}/api/auth/token/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
