import SignIn from "../pages/NoAuth/SignIn";
import SignUp from "../pages/NoAuth/SignUp";
import PageNotFound from "../components/Layout/PageNotFound";
import Home from "../pages/Auth/Home";
import Inicio from "../pages/NoAuth/Inicio";

export const authRoutes = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <PageNotFound /> },
];

export const noAuthRoutes = [
  { path: "/home", element: <Inicio /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/*", element: <Inicio /> },
];
