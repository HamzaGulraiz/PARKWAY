import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import PlazaBookingModel from "./PlazaBookingModel";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const PlazaBooking = ({ data }) => {
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  useEffect(() => {
    setMasterData(data);
    setFilteredData(data);
    return () => {};
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  if (data && data.length) {
    return (
      <>
        <SafeAreaView>
          <View style={styles.searchContainer}>
            <TextInput
              placeholderTextColor="black"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={search}
              onChangeText={(text) => searchFilter(text)}
              placeholder="Search"
              style={styles.searchBarInput}
            />
          </View>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => {
              return <PlazaBookingModel item={item} />;
            }}
          />
        </SafeAreaView>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
  console.log("Please provide Images");
  return null;
};

export default PlazaBooking;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: StatusBar.currentHeight,
    margin: 1,
    backgroundColor: "#cfd8dc",
    borderRadius: 6,
  },
  searchBarInput: {
    margin: 10,
    backgroundColor: "#cfd8dc",
    fontSize: 15,
    marginLeft: 15,
    fontWeight: "400",
  },
});
