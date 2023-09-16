import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  color: #a4a4a4;
  font-family: Poppins;
  font-size: 14.33px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ContentInput = styled.View`
  height: 55px;
  border-radius: 8px;
  border: 0.304px solid #fff;
`;

export const LinearGradientContentInput = styled(LinearGradient).attrs({
  colors: ["rgba(255, 255, 255, 0.20)", "rgba(255, 255, 255, 0.04)"],
  locations: [0, 0.7708],
  start: { x: 0.1532, y: 0.2104 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#A4A4A4",
})`
  flex: 1;
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: #a4a4a4;
`;

export const ButtonPassword = styled.TouchableOpacity``;
