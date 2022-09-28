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
import MapView from "react-native-maps";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import SlideShowHome from "../components/SlideShowHome";
import { dummyData } from "../asset/SlideShowHomeData";
import CardViewHome from "../components/CardViewHome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
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
          </View>
          <View style={styles.mapContainer}>
            <MapView style={styles.map} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
    padding: 10,
    margin: 20,
  },
  mapContainer: {
    backgroundColor: "#9ea7aa",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 20,
  },
  map: {
    width: "100%",
    height: 200,
  },
});
