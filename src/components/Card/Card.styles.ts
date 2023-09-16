import { Skeleton } from "@rneui/themed";

import styled from "styled-components/native";

export const ContainerSkeleton = styled(Skeleton).attrs({
  animation: "wave",
  width: 230,
  height: 140,
  skeletonStyle: {
    borderRadius: 16,
  },
})``;

export const Container = styled.View`
  height: 230px;
  width: 140px;
  border-radius: 16px;
  object-fit: cover;
`;

export const ContentImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 16px;
`;

export const Label = styled.Text`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 12px;
  position: absolute;
  bottom: 0;
`;
