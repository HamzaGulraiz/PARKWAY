import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Colors } from "../../Utils/color";

const logoutAlert = (navigation) => {
  Alert.alert("Logout", "Do you wish to logout", [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => navigation.dispatch(StackActions.replace("Login")),
    },
  ]);
};

const Setting = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.sett}></View>
        <View style={styles.logoutView}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              logoutAlert(navigation);
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackGround,
  },
  sett: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  logoutView: {
    margin: 10,
  },
  logoutButton: {
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "red",
    padding: 10,
  },
});
export default Setting;
