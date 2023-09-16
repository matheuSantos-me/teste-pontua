import React from "react";
import AntDesignIcons from "@expo/vector-icons/AntDesign";

import { ISocialLoginComponentProps } from "./SocialLogin.interfaces";

import {
  Container,
  ButtonSocialLogin,
  ContentButtonsSocialLogin,
  Header,
  Divider,
  TextContentWithLoginSocial,
  GoogleIcon,
  FacebookIcon,
  LinearGradientButtonSocialLogin,
} from "./SocialLogin.styles";

export const SocialLoginComponent = ({ label }: ISocialLoginComponentProps) => {
  return (
    <Container>
      <Header>
        <Divider variant="left" />

        <TextContentWithLoginSocial>{label}</TextContentWithLoginSocial>

        <Divider variant="right" />
      </Header>

      <ContentButtonsSocialLogin>
        <ButtonSocialLogin>
          <LinearGradientButtonSocialLogin>
            <GoogleIcon />
          </LinearGradientButtonSocialLogin>
        </ButtonSocialLogin>

        <ButtonSocialLogin>
          <LinearGradientButtonSocialLogin>
            <AntDesignIcons name="apple1" size={20} color="#fff" />
          </LinearGradientButtonSocialLogin>
        </ButtonSocialLogin>

        <ButtonSocialLogin>
          <LinearGradientButtonSocialLogin>
            <FacebookIcon />
          </LinearGradientButtonSocialLogin>
        </ButtonSocialLogin>
      </ContentButtonsSocialLogin>
    </Container>
  );
};
