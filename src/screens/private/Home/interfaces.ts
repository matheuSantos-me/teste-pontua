import { ReactNode } from "react";

export interface IHomeScreenProviderProps {
  children: ReactNode;
}

export interface IHomeScreenContextProps {
  isLoadingHeroes: boolean;
  dataHeroes: any;
  isLoadingComics: boolean;
  dataComics: any;
  isLoadingSeries: boolean;
  dataSeries: any;
  isLoadingEvents: boolean;
  dataEvents: any;
}
