import React from "react";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />

      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </>
  );
}
