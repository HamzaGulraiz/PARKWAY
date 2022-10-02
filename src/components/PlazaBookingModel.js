import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";

const { width, height } = Dimensions.get("window");

const PlazaBookingModel = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => {
          //navigation.navigate("SearchScreen");
        }}
      >
        <View style={styles.imgTitleContainer}>
          <View>
            <Image style={styles.image} source={item.img} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlazaBookingModel;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#cfd8dc",
    width: width - 25,
    height: 180,

    borderRadius: 10,
    marginVertical: 10,
  },
  imgTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  textView: { margin: 5, flex: 2 },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  description: { marginVertical: 10, margin: 10 },
  descriptionText: { fontSize: 14, fontWeight: "400", color: "black" },
});
