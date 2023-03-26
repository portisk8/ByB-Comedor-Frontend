import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Layout/Main";
import { useEffect, useState } from "react";
import MainNoAuth from "./components/Layout/MainNoAuth";
import { Provider } from "react-redux";
import store from "./store";
import { authRoutes, noAuthRoutes } from "./common/routes";
import { ConfigProvider } from "antd";
import esES from "antd/es/locale/es_ES";
import CONFIG from "./common/environment";
import dayjs from "dayjs";
import "dayjs/locale/es";

import customParseFormat from "dayjs/plugin/customParseFormat";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

dayjs.extend(customParseFormat);

function App() {
  useEffect(() => {
    dayjs.locale("es");
    document.title = CONFIG.PROJECT_NAME;
  });

  const CustomRoutes = () => {
    return (
      <Routes>
        <Route element={<Main />}>
          {authRoutes.map((a, index) => (
            <Route key={`${index}-a`} path={a.path} element={a.element} />
          ))}
        </Route>
        <Route element={<MainNoAuth />}>
          {noAuthRoutes.map((na, index) => (
            <Route key={`${index}-na`} path={na.path} element={na.element} />
          ))}
        </Route>
      </Routes>
    );
  };

  return (
    <>
      <Provider store={store}>
        <ConfigProvider //https://ant.design/docs/react/customize-theme
          locale={esES}
          theme={{ token: { colorPrimary: "#0062F0", borderRadius: 10 } }}
        >
          {CONFIG.GOOGLE.recaptchaKey ? (
            <GoogleReCaptchaProvider reCaptchaKey={CONFIG.GOOGLE.recaptchaKey}>
              {CustomRoutes()}
            </GoogleReCaptchaProvider>
          ) : (
            CustomRoutes()
          )}
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
