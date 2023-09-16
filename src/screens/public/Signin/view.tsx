import React from "react";

import { useSigninScreenContext } from "./context";

import { SocialLoginComponent } from "../../../components";

import { FormContainer } from "../../../containers/public/Signin";

import {
  Container,
  ContainerBgImage,
  Content,
  Title,
  Description,
} from "./styles";

export const SigninView = () => {
  const { loading, handleLogin } = useSigninScreenContext();

  return (
    <Container>
      <ContainerBgImage>
        <Content>
          <Title>Faça login</Title>

          <Description>Seja bem-vindo novamente.</Description>

          <FormContainer loading={loading} actionLogin={handleLogin} />

          <SocialLoginComponent label="Faça login com" />
        </Content>
      </ContainerBgImage>
    </Container>
  );
};
