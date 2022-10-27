import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CardViewHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.cardViewContainer}>
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <Image style={styles.image} source={require("../asset/car.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <Image style={styles.image} source={require("../asset/bike.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardViewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardView: {
    width: 140,
    height: 80,
    backgroundColor: "#cfd8dc",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: "absolute",
    bottom: 20,
    margin: 10,
    left: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    color: "#000000",
    fontSize: 20,

    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
});

export default CardViewHome;
