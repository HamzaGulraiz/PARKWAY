import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

const Help = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);
  const [messageState, setMessageState] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);
      setEmail(userObj[0].columns.user_email);

      // console.log(userObj[0].columns.user_email);
    });
  }, []);

  const submit = () => {
    if (message.length > 20) {
      setMessageState(true);
      alert(message);
    }
  };

  const inputState = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContaier}>
          <Text style={styles.titleText}>Help</Text>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.helpDescription}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Report an issue
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formView}>
              <Text style={styles.formTextHeader}>From </Text>
              <Text style={styles.formTextDetail}>
                {firstName} {lastName}
              </Text>
            </View>
            <View style={styles.formView}>
              <Text style={styles.formTextHeader}>Email </Text>
              <Text style={styles.formTextDetail}>{email}</Text>
            </View>
            <View style={styles.formView}>
              <TextInput
                style={styles.input}
                editable={true}
                maxLength={120}
                multiline={true}
                numberOfLines={6}
                onChangeText={(text) => setMessage(text)}
                placeholder="Write here..."
              />
            </View>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => submit()}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: StatusBar.currentHeight,
  },
  titleContaier: {
    alignItems: "center",
    margin: 10,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  helpDescription: {
    margin: 20,
    alignItems: "center",
  },
  formContainer: {
    margin: 10,
  },
  formView: {
    margin: 10,
  },
  formTextHeader: {
    fontSize: 20,
    fontWeight: "700",
  },
  formTextDetail: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    height: 100,
    margin: 2,
    borderWidth: 1,
    padding: 10,
  },
  btnView: {
    margin: 10,
  },
  submitButton: {
    backgroundColor: "#62757f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
