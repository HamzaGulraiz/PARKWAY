import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import SlideShowHome from "../components/SlideShowHome";
import { dummyData } from "../asset/SlideShowHomeData";
import CardViewHome from "../components/CardViewHome";

export default function Home({ navigation }) {
  return (
    <>
      <View>
        <SlideShowHome data={dummyData} />
      </View>
      <View style={StyleSheet.container}>
        <CardViewHome />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
