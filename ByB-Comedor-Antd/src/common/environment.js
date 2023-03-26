import packageJson from "../../package.json";
export default {
  CLIENT_NAME: packageJson["client-name"],
  PROJECT_NAME: packageJson["project-name"],
  PROJECT_VERSION: packageJson["version"],
  API_URL: process.env.REACT_APP_API_URL,
  MENU: {
    TYPE: "side",
    THEME: "dark",
  },
  GOOGLE: {
    isEnable: process.env.REACT_APP_GOOGLE_CLIENT_ID != null,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    recaptchaKey: process.env.REACT_APP_RECAPTCHA_KEY,
  },
};
