import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
`;

export const ContentLinearGradient = styled(LinearGradient).attrs({
  colors: ["#ED1D2F", "#BF2EB9"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})<{ loading: boolean }>`
  height: 100%;
  width: 100%;
  opacity: ${({ loading }) => (loading ? 0.1 : 1)};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;
