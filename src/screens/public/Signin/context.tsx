import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useCallback,
} from "react";
import Snackbar from "react-native-snackbar";

import {
  ISigninScreenProviderProps,
  ISigninScreenContextProps,
  IDataProps,
} from "./interfaces";
import { useNavigation } from "@react-navigation/native";

const SigninScreenContext = createContext<ISigninScreenContextProps>({
  loading: false,
  handleLogin: () => {},
});

export const SigninScreenProvider = ({
  children,
}: ISigninScreenProviderProps) => {
  const { navigate } = useNavigation();

  const mockData: IDataProps = {
    user: "tecnologia@pontua.com.br",
    password: "pontua@123",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IDataProps>({
    user: "tecnologia@pontua.com.br",
    password: "pontua@123",
  });

  const handleLogin = useCallback(async () => {
    setLoading(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            data.user !== mockData.user ||
            data.password !== mockData.password
          ) {
            reject(new Error("Usuário ou senha incorretos"));
          } else {
            resolve(undefined);
          }
        }, 5000);
      });

      setData({ user: "", password: "" });
      navigate("Home");
    } catch (error) {
      Snackbar.show({
        text: "Usuário ou Senha incorretos! Tente novamente ou entre em contato com o suporte.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }, [data, navigate]);

  const signinScreenProviderValues = useMemo(() => {
    return { loading, handleLogin };
  }, [loading, handleLogin]);

  return (
    <SigninScreenContext.Provider value={signinScreenProviderValues}>
      {children}
    </SigninScreenContext.Provider>
  );
};

export const useSigninScreenContext = () => useContext(SigninScreenContext);
