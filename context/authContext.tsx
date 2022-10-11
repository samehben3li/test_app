import * as React from "react";
import { authData, authContextType } from "../types/interfaces";

export const AuthContext = React.createContext<authContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = React.useState<authData | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
