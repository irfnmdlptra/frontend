import { createContext } from "react";

const Contex = createContext(null);

const Provider = ({ children }) => {
  return <Contex.Provider value={'ippamz'}>{children}</Contex.Provider>;
};

export { Contex, Provider };
