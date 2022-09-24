import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const CardViewHome = ({ item }) => {
  return (
    <View style={styles.cardViewContainer}>
      <View style={styles.cardView}>
        <Image style={styles.image} source={require("../asset/car.png")} />
        {/* <View style={styles.textView}>
          <Text style={styles.itemTitle}>Car</Text>
        </View> */}
      </View>
      <View style={styles.cardView}>
        <Image
          style={styles.image}
          source={require("../asset/electric-motor.png")}
        />
        {/* <View style={styles.textView}>
          <Text style={styles.itemTitle}>Bike</Text>
        </View> */}
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
    width: 80,
    height: 80,
    backgroundColor: "#62757f",
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
    bottom: 20,
    margin: 10,
    left: 5,
  },
  image: {
    width: 70,
    height: 70,
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
