import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  StatusBar,
  TouchableOpacity,
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
      // console.log(filteredData);
      setSearch(text);

      // console.log(newData);
      // console.log(search);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const handleItemClick = () => {
    console.log("abc");
  };

  // console.log(filteredData);
  // console.log(masterData);
  if (data && data.length) {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
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
          {filteredData != undefined && filteredData.length > 0 ? (
            <>
              <FlatList
                data={filteredData}
                renderItem={({ item }) => {
                  return (
                    <PlazaBookingModel
                      item={item}
                      // onItemClick={handleItemClick}
                    />
                  );
                }}
              />
            </>
          ) : (
            <>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  Not Available
                </Text>
              </View>
            </>
          )}
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
  button: {
    flexDirection: "row",
    backgroundColor: "#cfd8dc",
    borderRadius: 5,

    padding: 12,
    margin: 20,
  },
});
