import React from "react";

import { Container, Title, Description } from "./Header.styles";

export const HeaderContainer = () => {
  return (
    <Container>
      <Description>Bem vindo ao Pontua Marvel</Description>

      <Title>Escolha o seu personagem</Title>

      <Description>
        O Universo Marvel é o universo compartilhado onde ocorrem as histórias
        na maioria dos títulos de quadrinhos americanos e outras mídias
        publicadas pela Marvel Entertainment.
      </Description>
    </Container>
  );
};
