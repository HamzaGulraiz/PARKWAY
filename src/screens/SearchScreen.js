import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import { Searchbar } from "react-native-paper";

function SearchScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchView}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            autoFocus={true}
          />
        </View>
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
  searchBar: {
    backgroundColor: "#cfd8dc",
  },
  searchView: {
    marginTop: StatusBar.currentHeight,
    padding: 10,
  },
});

export default SearchScreen;
