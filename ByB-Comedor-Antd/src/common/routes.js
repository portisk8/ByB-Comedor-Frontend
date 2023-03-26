import SignIn from "../pages/NoAuth/SignIn";
import SignUp from "../pages/NoAuth/SignUp";
import PageNotFound from "../components/Layout/PageNotFound";
import Home from "../pages/Auth/Home";
import Inicio from "../pages/NoAuth/Inicio";
import InfanteHistorial from "../pages/Auth/Infantes/InfanteHistorial";

export const authRoutes = [
  { path: "/", element: <Home /> },
  { path: "/infante/:personaId/historial", element: <InfanteHistorial /> },
  { path: "/*", element: <PageNotFound /> },
];

export const noAuthRoutes = [
  { path: "/home", element: <Inicio /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/*", element: <Inicio /> },
];
