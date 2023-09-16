import React from "react";
import AntDesignIcons from "@expo/vector-icons/AntDesign";

import { ButtonComponent, InputComponent } from "../../../../components";

import { IFormContainerProps } from "./Form.interfaces";

import {
  Container,
  ContentForgotPassword,
  ButtonForgotPassword,
  TextButtonForgotPassword,
} from "./Form.styles";

export const FormContainer = ({
  loading,
  actionLogin,
}: IFormContainerProps) => {
  return (
    <Container>
      <InputComponent
        icon={<AntDesignIcons name="user" color="#A4A4A4" size={20} />}
        label="Usuário"
        placeholder="tecnologia@pontua.com.br"
        // value={}
      />

      <InputComponent
        icon={<AntDesignIcons name="key" color="#A4A4A4" size={20} />}
        type="password"
        label="Senha"
        placeholder="********"
        // value={}
      />

      <ContentForgotPassword>
        <ButtonForgotPassword>
          <TextButtonForgotPassword>Forgot Password?</TextButtonForgotPassword>
        </ButtonForgotPassword>
      </ContentForgotPassword>

      <ButtonComponent text="Entrar" loading={loading} onPress={actionLogin} />
    </Container>
  );
};
