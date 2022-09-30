import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import { Searchbar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.listButton}
            onPress={() => {
              // navigation.navigate("PersonalInfo");
            }}
          >
            <Ionicons name="time" size={16} color="black" />
            <Text style={styles.listText}>Saved Places</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.listText}>Recent</Text>
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.listButton}
            onPress={() => {
              // navigation.navigate("PersonalInfo");
            }}
          >
            <Ionicons name="time" size={16} color="black" />
            <Text style={styles.listText}>Liberty</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listButton}
            onPress={() => {
              // navigation.navigate("PersonalInfo");
            }}
          >
            <Ionicons name="time" size={16} color="black" />
            <Text style={styles.listText}>Emporium</Text>
          </TouchableOpacity>
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
  list: {
    margin: 1,
  },
  listButton: {
    marginVertical: 5,
    flexDirection: "row",
    padding: 10,
  },
  listText: { fontSize: 15, marginLeft: 20, fontWeight: "500" },
});

export default SearchScreen;
