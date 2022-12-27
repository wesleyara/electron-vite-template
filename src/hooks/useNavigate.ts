import { useContext } from "react";

import { NavigateContext } from "../context/NavigateContext";

export const useNavigate = () => {
  const context = useContext(NavigateContext);

  const { router, setRouter } = context;

  return { router, setRouter };
};
