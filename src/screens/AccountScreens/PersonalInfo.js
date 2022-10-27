import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Colors } from "../../Utils/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

const Separator = () => <View style={styles.separator} />;

const PersonalInfo = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);
      setEmail(userObj[0].columns.user_email);
      setPassword(userObj[0].columns.user_password);

      // console.log(userObj[0].columns.user_email);
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Personal Information</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoHeading}>First Name</Text>
          <Text style={styles.infoDetail}>{firstName}</Text>
        </View>
        <Separator />
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeading}>Last Name</Text>
          <Text style={styles.infoDetail}>{lastName}</Text>
        </View>
        <Separator />
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeading}>Email Address</Text>
          <Text style={styles.infoDetail}>{email}</Text>
        </View>
        <Separator />
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeading}>Password</Text>
          {showPassword ? (
            <View style={styles.row}>
              <Text style={styles.infoDetail}>{password}</Text>
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setShowPassword(false);
                }}
              >
                <Ionicons name="eye" size={18} color="black" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.row}>
              <Text style={styles.infoDetail}>***************</Text>
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setShowPassword(true);
                }}
              >
                <Ionicons name="eye-off" size={18} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Separator />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackGround,
  },
  titleView: {
    marginTop: StatusBar.currentHeight,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  infoContainer: {
    margin: 20,
  },
  infoHeading: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
  infoDetail: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showPassword: {},
  separator: {
    backgroundColor: "#62757f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
