import React from "react";

import { useHomeScreenContext } from "./context";

import {
  HeaderContainer,
  ListContainer,
  ToolbarContainer,
} from "../../../containers/private/Home";

import { Container, ContentScroll, ContentList } from "./styles";

export const HomeView = () => {
  const {
    isLoadingHeroes,
    dataHeroes,
    isLoadingComics,
    dataComics,
    isLoadingSeries,
    dataSeries,
    isLoadingEvents,
    dataEvents,
  } = useHomeScreenContext();

  return (
    <Container>
      <ToolbarContainer />

      <ContentScroll>
        <HeaderContainer />

        <ContentList>
          <ListContainer
            loading={isLoadingHeroes}
            label="Heróis"
            list={dataHeroes}
          />

          <ListContainer
            loading={isLoadingComics}
            label="Quadrinhos"
            list={dataComics}
          />

          <ListContainer
            loading={isLoadingSeries}
            label="Séries"
            list={dataSeries}
          />

          <ListContainer
            loading={isLoadingEvents}
            label="Eventos"
            list={dataEvents}
          />
        </ContentList>
      </ContentScroll>
    </Container>
  );
};
