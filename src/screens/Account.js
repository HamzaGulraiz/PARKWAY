import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import Ionicons from "react-native-vector-icons/Ionicons";

const Separator = () => <View style={styles.separator} />;

export default function Account({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  useEffect(() => {
    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);

      // console.log(userObj[0].columns.user_email);
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headercontainer}>
          <View style={styles.headerInfo}>
            <Text style={styles.headerFirstName}>{firstName}</Text>
            <Text style={styles.headerLastName}>{lastName}</Text>
          </View>
          <TouchableOpacity style={styles.imgContainer}>
            <Image
              style={styles.userImage}
              source={require("../asset/account.png")}
            />
          </TouchableOpacity>
        </View>
        <Separator />
        <ScrollView>
          <View style={styles.list}>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("PersonalInfo");
              }}
            >
              <Ionicons name="person" size={16} color="black" />
              <Text style={styles.listText}>Personal Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("CardAndAccounts");
              }}
            >
              <Ionicons name="card" size={16} color="black" />
              <Text style={styles.listText}>Card and accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Wallet");
              }}
            >
              <Ionicons name="wallet" size={16} color="black" />
              <Text style={styles.listText}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Trips");
              }}
            >
              <Ionicons name="time" size={16} color="black" />
              <Text style={styles.listText}>Trips</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Message");
              }}
            >
              <Ionicons name="chatbubble-ellipses" size={16} color="black" />
              <Text style={styles.listText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Help");
              }}
            >
              <Ionicons name="help-circle" size={16} color="black" />
              <Text style={styles.listText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Location");
              }}
            >
              <Ionicons name="location" size={16} color="black" />
              <Text style={styles.listText}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              <Ionicons name="settings-outline" size={16} color="black" />
              <Text style={styles.listText}>Setting</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginLeft: 10 }}>V-Alpha 1.01</Text>
        </ScrollView>
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
  headercontainer: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  headerInfo: {
    flexDirection: "row",
  },
  headerFirstName: { fontSize: 40, fontWeight: "bold" },
  headerLastName: { fontSize: 40, fontWeight: "bold", marginLeft: 8 },
  imgContainer: { margin: 1, marginLeft: 40 },
  userImage: { height: 60, width: 60, borderRadius: 50 },
  separator: {
    padding: 3,
    backgroundColor: "#62757f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list: {
    flex: 1,
    borderColor: "#62757f",
    padding: 10,
    margin: 10,
  },
  listButton: {
    marginVertical: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#62757f",
    padding: 10,
  },
  listText: { fontSize: 15, marginLeft: 20, fontWeight: "500" },
});
