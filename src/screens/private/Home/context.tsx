import React, { useState, useMemo, createContext, useContext } from "react";

import { useQueryListHeroesService } from "../../../services/Heroes/useQueryListHeroesService";
import { useQueryListComicsService } from "../../../services/Comics/useQueryListComicsService";
import { useQueryListSeriesService } from "../../../services/Series/useQueryListSeriesService";
import { useQueryListEventsService } from "../../../services/Events/useQueryListEventsService";

import {
  IHomeScreenProviderProps,
  IHomeScreenContextProps,
} from "./interfaces";

const HomeScreenContext = createContext<IHomeScreenContextProps>({
  isLoadingHeroes: false,
  dataHeroes: {},
  isLoadingComics: false,
  dataComics: {},
  isLoadingSeries: false,
  dataSeries: {},
  isLoadingEvents: false,
  dataEvents: {},
});

export const HomeScreenProvider = ({ children }: IHomeScreenProviderProps) => {
  const { isLoading: isLoadingHeroes, data: dataHeroes } =
    useQueryListHeroesService();
  const { isLoading: isLoadingComics, data: dataComics } =
    useQueryListComicsService();
  const { isLoading: isLoadingSeries, data: dataSeries } =
    useQueryListSeriesService();
  const { isLoading: isLoadingEvents, data: dataEvents } =
    useQueryListEventsService();

  const homeScreenProviderValues = useMemo(() => {
    return {
      isLoadingHeroes,
      dataHeroes,
      isLoadingComics,
      dataComics,
      isLoadingSeries,
      dataSeries,
      isLoadingEvents,
      dataEvents,
    };
  }, [
    isLoadingHeroes,
    dataHeroes,
    isLoadingComics,
    dataComics,
    isLoadingSeries,
    dataSeries,
    isLoadingEvents,
    dataEvents,
  ]);

  return (
    <HomeScreenContext.Provider value={homeScreenProviderValues}>
      {children}
    </HomeScreenContext.Provider>
  );
};

export const useHomeScreenContext = () => useContext(HomeScreenContext);
