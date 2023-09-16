import styled from "styled-components/native";

import BgBlackPanther from "../../../assets/BgBlackPanther.png";
import BgRectangle from "../../../assets/BgRectangle.png";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerBgImage = styled.ImageBackground.attrs({
  source: BgBlackPanther,
})`
  flex: 1;
`;

export const Content = styled(LinearGradient).attrs({
  colors: [
    "rgba(179, 121, 223, 0.20)",
    "rgba(204, 88, 84, 0.02)",
    "rgba(179, 121, 223, 0.20)",
  ],
  locations: [0, 0.7708, 1],
  start: { x: 0.1532, y: 0.2104 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  height: 100%;
  border-radius: 59px;
  margin-top: 80%;
  padding: 20px 40px;
  background: #000;
`;

export const Title = styled.Text`
  color: #efefef;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  color: #a4a4a4;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  margin-bottom: 18px;
`;
