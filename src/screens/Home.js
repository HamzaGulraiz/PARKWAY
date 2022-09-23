import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  SearchBar,
  Image,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import SlideShowHome from "../components/SlideShowHome";
import { dummyData } from "../asset/SlideShowHomeData";
import CardViewHome from "../components/CardViewHome";

const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.slider}>
          <SlideShowHome data={dummyData} />
        </View>
        <View styles={styles.cardTitle}>
          <Separator />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Choose to Search Nearby
          </Text>
          <Separator />
        </View>
        <View style={styles.card}>
          <CardViewHome />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  slider: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    flex: 2,
  },
  card: {
    flex: 3,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  card: {
    flex: 2,
  },
});
