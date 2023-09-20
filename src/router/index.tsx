import { MemoryRouter, Route, Routes } from "react-router-dom";

import { routes } from "../routes";

const Router = () => {
  return (
    <MemoryRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </MemoryRouter>
  );
};

export default Router;
