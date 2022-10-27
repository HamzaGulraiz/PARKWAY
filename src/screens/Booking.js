import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import PlazaBooking from "../components/PlazaBooking";
import { BookingdummyData } from "../asset/PlazaBookingData";

export default function Booking({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.searchContainer}>
          <Searchbar style={styles.searchBar} placeholder="Search" />
        </View> */}

        <View style={styles.bookingContainer}>
          <PlazaBooking data={BookingdummyData} />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {},
  searchBar: {
    margin: 10,
    backgroundColor: "#cfd8dc",
  },

  bookingContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
