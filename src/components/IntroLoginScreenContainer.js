import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../screens/IntroScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MainContainerScreen from "../components/MainContainerScreen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestorePassword from "../screens/RestorePassword";
import SearchScreen from "../screens/SearchScreen";
import CardViewHome from "./CardViewHome";

const Stack = createNativeStackNavigator();

function IntroLoginScreenContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="IntroScreen"
          component={IntroScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Restore"
          component={RestorePassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainContainerScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchScreen"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default IntroLoginScreenContainer;
