import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

const CardViewHome = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="camera" size={80} onPress={() => {}} />
      <IconButton icon="camera" size={80} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CardViewHome;
