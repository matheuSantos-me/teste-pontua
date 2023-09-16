import React from "react";

import { IButtonComponentProps } from "./Button.interfaces";
import { Container, ContentLinearGradient, TextButton } from "./Button.styles";
import { ActivityIndicator } from "react-native";

export const ButtonComponent = ({
  text,
  loading,
  onPress,
}: IButtonComponentProps) => {
  return (
    <Container onPress={onPress}>
      <ContentLinearGradient loading={loading}>
        {loading ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <TextButton>{text}</TextButton>
        )}
      </ContentLinearGradient>
    </Container>
  );
};
