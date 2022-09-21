import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const CardViewHomeModel = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.img} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CardViewHomeModel;
