import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Card } from "react-native-paper";

const CardViewHome = () => {
  return (
    <View style={styles.container}>
      <Card style={{ padding: 30, margin: 20 }}>
        <Button
          onPress={() => {}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardViewHome;
