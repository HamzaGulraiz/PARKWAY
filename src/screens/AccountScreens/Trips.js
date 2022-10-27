import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

const Trips = (navigation) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Coming Soon</Text>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
