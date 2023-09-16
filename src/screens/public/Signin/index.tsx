import React from "react";

import { SigninScreenProvider } from "./context";

import { SigninView } from "./view";

export const SigninScreen = () => {
  return (
    <SigninScreenProvider>
      <SigninView />
    </SigninScreenProvider>
  );
};
