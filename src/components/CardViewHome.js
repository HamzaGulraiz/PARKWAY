import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import CardViewHomeModel from "./CardViewHomeModel";

const CardViewHome = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <CardViewHomeModel item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: { flexDirection: "row", justifyContent: "center" },
});

export default CardViewHome;
