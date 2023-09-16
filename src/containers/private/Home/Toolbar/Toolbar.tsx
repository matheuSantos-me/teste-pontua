import React from "react";
import FeatherIcons from "@expo/vector-icons/Feather";

import { LogoComponent } from "../../../../components";

import {
  Container,
  ContentInvisible,
  ButtonIconSearch,
} from "./Toolbar.styles";

export const ToolbarContainer = () => {
  return (
    <Container>
      <ContentInvisible />

      <LogoComponent height="26" width="71" />

      <ButtonIconSearch>
        <FeatherIcons name="search" size={24} color="#313240" />
      </ButtonIconSearch>
    </Container>
  );
};
