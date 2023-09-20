import { About, Home } from "../pages";

export const routes = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
  { name: "About", path: "/about", element: <About key={"about"} /> },
];
