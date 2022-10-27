import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import SlideShowHome from "../components/SlideShowHome";
import { dummyData } from "../asset/SlideShowHomeData";
import CardViewHome from "../components/CardViewHome";
import Ionicons from "react-native-vector-icons/Ionicons";
import GetLocation from "../components/GetLocation";
import { useRoute } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
          </View>
          <View style={styles.card}>
            <CardViewHome />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SearchScreen");
              }}
            >
              <Ionicons name="search-outline" size={16} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Search</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Choose to Search Nearby
            </Text>
          </View>

          <View style={styles.mapContainer}>
            <GetLocation />
          </View>
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackGround,
  },
  slider: {
    marginTop: StatusBar.currentHeight,
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    flex: 4,
  },
  card: {
    flex: 3,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#cfd8dc",
    borderRadius: 5,

    padding: 12,
    margin: 20,
  },

  mapContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
});
