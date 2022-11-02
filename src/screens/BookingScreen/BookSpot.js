import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const BookSpot = ({ route, navigation }) => {
  const Separator = () => <View style={styles.separator} />;
  const { item } = route.params;

  const [bookCar, setBookCar] = useState(false);
  const [bookBike, setBookBike] = useState(false);
  const [BookBtnClick, setBookBtnClick] = useState(false);

  const bookState = () => {
    setBookBtnClick(true);
    setTimeout(() => {
      setBookBtnClick(false);
    }, 2000);
  };

  const btnPressedBike = () => {
    if (bookBike === false) {
      setBookBike(true);
      setBookCar(false);
    } else {
      setBookBike(false);
    }
  };
  const btnPressedCar = () => {
    if (bookCar === false) {
      setBookCar(true);
      setBookBike(false);
    } else {
      setBookCar(false);
    }
  };

  const bookBtn = () => {
    if (bookBike === false && bookCar === false) {
      bookState();
    } else {
      if (bookBike === true) {
        alert("bike");
      } else {
        alert("car");
      }
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <ScrollView>
          <View style={styles.addressContainer}>
            <Ionicons name="location" size={18} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "300", left: 5 }}>
              Example text for location address
            </Text>
          </View>

          <Separator />
          <View style={styles.imgTitleContainer}>
            <Image style={styles.image} source={item.img} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <Separator />
          {BookBtnClick ? (
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Ionicons name="caret-down" size={16} color="black" />
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Choose one
              </Text>
              <Ionicons name="caret-down" size={16} color="black" />
            </View>
          ) : (
            <View
              style={{
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>Spaces</Text>
            </View>
          )}

          <View style={styles.spacesContainer}>
            <View style={styles.spacesView}>
              <TouchableOpacity onPress={() => btnPressedCar()}>
                <View
                  style={
                    bookCar
                      ? styles.spacesButtonPressed
                      : styles.spacesButtonNormal
                  }
                >
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../asset/car.png")}
                  />
                </View>
              </TouchableOpacity>
              <View style={{ margin: 6, borderWidth: 1, borderColor: "green" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                  Spaces
                </Text>
              </View>
            </View>
            <View style={styles.spacesView}>
              <TouchableOpacity onPress={() => btnPressedBike()}>
                <View
                  style={
                    bookBike
                      ? styles.spacesButtonPressed
                      : styles.spacesButtonNormal
                  }
                >
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../asset/bike.png")}
                  />
                </View>
              </TouchableOpacity>

              <View style={{ margin: 6, borderWidth: 1, borderColor: "green" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                  Spaces
                </Text>
              </View>
            </View>
          </View>
          <Separator />

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              margin: 10,
            }}
          >
            <Ionicons name="information" size={18} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "300", left: 5 }}>
              Free Cancellation
            </Text>
          </View>
          <Separator />
          <TouchableOpacity
            style={styles.bookingButton}
            onPress={() => bookBtn()}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Book</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default BookSpot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

    marginTop: StatusBar.currentHeight,
  },
  titleContainer: {
    margin: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "#62757f",
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
  addressContainer: {
    flexDirection: "row",

    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgTitleContainer: {
    alignItems: "center",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
  },
  descriptionContainer: { marginVertical: 10, margin: 10 },
  descriptionText: { fontSize: 14, fontWeight: "400", color: "black" },
  spacesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    margin: 10,
  },
  spacesView: {
    flexDirection: "row",
  },
  bookingButton: {
    backgroundColor: "#62757f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  spacesButtonPressed: {
    // margin: 10,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: "#cfd8dc",
    borderColor: "black",
  },
  spacesButtonNormal: {
    // margin: 6,
  },
});
