import { ReactNode } from "react";

export interface ISigninScreenProviderProps {
  children: ReactNode;
}

export interface ISigninScreenContextProps {
  loading: boolean;
  handleLogin: () => void;
}

export interface IDataProps {
  user: string;
  password: string;
}
