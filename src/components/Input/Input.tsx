import React, { useState } from "react";
import FeatherIcons from "@expo/vector-icons/Feather";

import { IInputComponentProps } from "./Input.interfaces";

import {
  Container,
  Label,
  Input,
  ContentInput,
  ButtonPassword,
  LinearGradientContentInput,
} from "./Input.styles";

export const InputComponent = ({
  label,
  icon,
  placeholder,
  value,
  type = "name",
}: IInputComponentProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>
      <Label>{label}</Label>

      <ContentInput>
        <LinearGradientContentInput>
          {icon}

          <Input
            placeholder={placeholder}
            secureTextEntry={!showPassword}
            value={value}
          />

          {type === "password" && (
            <ButtonPassword onPress={() => setShowPassword(!showPassword)}>
              <FeatherIcons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#A4A4A4"
              />
            </ButtonPassword>
          )}
        </LinearGradientContentInput>
      </ContentInput>
    </Container>
  );
};
