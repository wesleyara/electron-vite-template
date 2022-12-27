import { useNavigate } from "../hooks/useNavigate";
import { LayoutProvider } from "../layout/LayoutProvider";
import { Home } from "../pages";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
];

export function Routes() {
  const { router } = useNavigate();

  return (
    <>
      <LayoutProvider>
        {path.filter(item => item.path === router).map(item => item.element)}
      </LayoutProvider>
    </>
  );
}
