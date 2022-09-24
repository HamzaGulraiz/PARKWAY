import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../Utils/color";

//screens
import Home from "../screens/Home";
import Booking from "../screens/Booking";
import Activity from "../screens/Activity";
import Account from "../screens/Account";

//screenNames
const homeName = "PARKWAY";
const bookingName = "Booking";
const activityName = "Activity";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainerScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === bookingName) {
              iconName = focused ? "pricetag" : "pricetag-outline";
            } else if (rn === activityName) {
              iconName = focused ? "reader" : "reader-outline";
            } else if (rn === accountName) {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          headerShown: false,
          tabBarActiveTintColor: "#c1d5e0",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              backgroundColor: Colors.bottomBavigation,
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={bookingName} component={Booking} />
        <Tab.Screen name={activityName} component={Activity} />
        <Tab.Screen name={accountName} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainerScreen;
