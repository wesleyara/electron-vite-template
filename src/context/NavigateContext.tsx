import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface NavigateProviderProps {
  children: ReactNode;
}

interface PathContexData {
  router: string;
  setRouter: Dispatch<SetStateAction<string>>;
}

export const NavigateContext = createContext({} as PathContexData);

export const NavigateProvider = ({ children }: NavigateProviderProps) => {
  const [router, setRouter] = useState("/");

  return (
    <NavigateContext.Provider value={{ router, setRouter }}>
      {children}
    </NavigateContext.Provider>
  );
};
