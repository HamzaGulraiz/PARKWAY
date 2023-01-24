import React from "react";
import { View, Text, StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
////////////////////////////////////////////////////////////////
import IntroScreen from "../screens/IntroScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
////////////////////////////////////////////////////////////////////////////
import MainContainerScreen from "../components/MainContainerScreen";
import RestorePassword from "../screens/RestorePassword";
import SearchScreen from "../screens/SearchScreen";
import ApiCall from "../screens/apiCall";
//////////////////////////////////////////////////////////////////////////////
import PersonalInfo from "../screens/AccountScreens/PersonalInfo";
import CardAndAccounts from "../screens/AccountScreens/CardAndAccounts";
import Wallet from "../screens/AccountScreens/Wallet";
import Trips from "../screens/AccountScreens/Trips";
import Message from "../screens/AccountScreens/Message";
import Help from "../screens/AccountScreens/Help";
import Location from "../screens/AccountScreens/Location";
import Setting from "../screens/AccountScreens/Setting";
////////////////////////////////////////////////////////////////////
import PlazaBookingModel from "./PlazaBookingModel";
import PlazaBooking from "./PlazaBooking";
import BookSpot from "../screens/BookingScreen/BookSpot";

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
        <Stack.Screen
          options={{ headerShown: false }}
          name="apiCall"
          component={ApiCall}
        />   
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalInfo"
          component={PersonalInfo}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="CardAndAccounts"
          component={CardAndAccounts}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Wallet"
          component={Wallet}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Trips"
          component={Trips}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Message"
          component={Message}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Help"
          component={Help}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Location"
          component={Location}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PlazaModel"
          component={PlazaBookingModel}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BookSpot"
          component={BookSpot}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default IntroLoginScreenContainer;
