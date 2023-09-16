import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Public
import { SigninScreen } from "../screens/public/Signin";

//Private
import { HomeScreen } from "../screens/private/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Signin">
        <Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />

        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
