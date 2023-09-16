import React from "react";

import { HomeScreenProvider } from "./context";

import { HomeView } from "./view";

export const HomeScreen = () => {
  return (
    <HomeScreenProvider>
      <HomeView />
    </HomeScreenProvider>
  );
};
