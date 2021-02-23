import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/screens/Home";
import Accenture from "../src/screens/Accenture";

import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="home" component={Home} />
        <Screen
          name="accenture"
          component={Accenture}
          options={{
            headerShown: true,
            header: () => <Header title={"teste"} showCancel={true} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
