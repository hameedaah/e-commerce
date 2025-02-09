import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [values, setValues] = useState(0);

  return (
    <UserContext.Provider value={{ increase: values, setIncrease: setValues }}>
      {children}
    </UserContext.Provider>
  );
};
