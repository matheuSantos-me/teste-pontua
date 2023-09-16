import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  color: #f2264b;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin: 0 0 16px 24px;
`;

export const ContainerList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 16,
    paddingHorizontal: 24,
  },
})``;
