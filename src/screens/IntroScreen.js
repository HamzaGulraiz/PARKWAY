import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";

import { StackActions } from "@react-navigation/native";

import { Colors } from "../Utils/color";

const IntroScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../asset/parkingIntro.jpg")}
        />
        <Text style={styles.text}>Easy Parking</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.dispatch(StackActions.replace("Main"))}
        />
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: "55%",
    width: "100%",
  },
  text: {
    marginTop: 50,
    color: "white",
    fontSize: 40,
  },
  buttonContainer: { padding: 30, marginBottom: 50 },
});
