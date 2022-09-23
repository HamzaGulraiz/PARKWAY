import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const CardViewHome = ({ item }) => {
  return (
    <View style={styles.cardViewContainer}>
      <View style={styles.cardView}>
        <Image style={styles.image} source={require("../asset/car.png")} />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>Car</Text>
        </View>
      </View>
      <View style={styles.cardView}>
        <Image style={styles.image} source={require("../asset/bike.png")} />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>Bike</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardViewContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardView: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "grey",
    alignItems: "center",
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
    bottom: 59,
    margin: 10,
    left: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  itemTitle: {
    color: "white",
    fontSize: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
});

export default CardViewHome;
