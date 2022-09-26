import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { Colors } from "../Utils/color";

function RestorePassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../asset/adaptive-icon1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Restore Password</Text>
        </View>

        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Email"
        />
        <View style={{ marginLeft: 50 }}>
          <Text>You will receive email with password reset link</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="Register" color="#62757f" />
          <View style={styles.row}>
            <Text>Already have an account </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RestorePassword;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenBackGround },
  logoContainer: { alignItems: "center", marginTop: 100 },
  text: { fontSize: 30 },
  image: { height: 130, width: 130 },
  formContainer: { justifyContent: "center" },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    padding: 30,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  link: {
    fontWeight: "bold",
    color: "blue",
  },
});
