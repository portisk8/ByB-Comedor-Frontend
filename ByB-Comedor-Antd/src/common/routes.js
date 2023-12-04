import SignIn from "../pages/NoAuth/SignIn";
import SignUp from "../pages/NoAuth/SignUp";
import PageNotFound from "../components/Layout/PageNotFound";
import Home from "../pages/Auth/Home";
import Inicio from "../pages/NoAuth/Inicio";
import InfanteHistorial from "../pages/Auth/Infantes/InfanteHistorial";
import PesonaListado from "../pages/Auth/Personas/PersonaListado";
import ComedorListado from "../pages/Auth/Comedor/ComedorListado";

export const authRoutes = [
  { path: "/", element: <Home /> },
  { path: "/personas", element: <PesonaListado /> },
  { path: "/infante/:personaId/historial", element: <InfanteHistorial /> },
  { path: "/configuraciones/comedor", element: <ComedorListado /> },
  { path: "/*", element: <PageNotFound /> },
];

export const noAuthRoutes = [
  { path: "/home", element: <Inicio /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/*", element: <Inicio /> },
];
