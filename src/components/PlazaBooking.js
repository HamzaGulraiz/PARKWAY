import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import PlazaBookingModel from "./PlazaBookingModel";

const PlazaBooking = ({ data }) => {
  if (data && data.length) {
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <PlazaBookingModel item={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
  console.log("Please provide Images");
  return null;
};

export default PlazaBooking;

const styles = StyleSheet.create({});
