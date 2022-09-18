import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Account({ navigation }) {
  return (
    <View style={style.container}>
      <Text>helo</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
