import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { NavigateProvider } from "./context/NavigateContext";
import { Home } from "./pages";
import { Routes } from "./routes";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
];

export function App() {
  return (
    <>
      <NavigateProvider>
        <Routes />
      </NavigateProvider>
      <ToastContainer autoClose={5000} />
    </>
  );
}
