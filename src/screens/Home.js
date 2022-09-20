import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-paper";

import SlideShowHome from "../components/SlideShowHome";
import { dummyData } from "../asset/SlideShowHomeData";
import CardViewHome from "../components/CardViewHome";

export default function Home({ navigation }) {
  return (
    <>
      <View style={StyleSheet.container}>
        <View style={StyleSheet.slider}>
          <SlideShowHome data={dummyData} />
        </View>
        <View style={StyleSheet.cardTitle}>
          <Divider />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Cochin",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choose to Search Nearby
          </Text>
          <Divider />
        </View>
        <View style={StyleSheet.card}>
          <CardViewHome />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    flex: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    flex: "20",
  },
  card: {
    flex: "40",
    justifyContent: "center",
    alignItems: "center",
  },
});
