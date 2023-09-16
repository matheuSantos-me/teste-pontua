import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

import {
  svgStringDividerLeft,
  svgStringDividerRight,
  svgStringGoogleIcon,
  svgStringacebookIcon,
} from "./SocialLogin.svgs";

export const Container = styled.View``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 18px 0;
`;

export const TextContentWithLoginSocial = styled.Text`
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 11.25px;
  font-style: normal;
  font-weight: 500;
`;

export const Divider = styled(SvgXml).attrs<{ variant: "left" | "right" }>(
  ({ variant }) => ({
    xml: variant === "right" ? svgStringDividerRight : svgStringDividerLeft,
  })
)`
  flex: 1;
`;

export const ContentButtonsSocialLogin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonSocialLogin = styled.TouchableOpacity`
  width: 58px;
  height: 44px;
  border-radius: 8px;
  border: 0.3px solid #fff;
`;

export const LinearGradientButtonSocialLogin = styled(LinearGradient).attrs({
  colors: ["rgba(255, 255, 255, 0.20)", "rgba(255, 255, 255, 0.04)"],
  locations: [0, 0.7708],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GoogleIcon = styled(SvgXml).attrs({
  xml: svgStringGoogleIcon,
  height: 20,
  width: 20,
})``;

export const FacebookIcon = styled(SvgXml).attrs({
  xml: svgStringacebookIcon,
  height: 30,
  width: 30,
})`
  margin-bottom: -5px;
`;
