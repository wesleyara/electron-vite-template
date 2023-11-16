import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages";
import Router from "./router";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
];

export function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={5000} />
    </>
  );
}
