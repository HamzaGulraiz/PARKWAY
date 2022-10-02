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
import React, { useState } from "react";
import { Colors } from "../Utils/color";

// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const RegisterUser = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../asset/adaptive-icon1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Welcome Back</Text>
        </View>

        <TextInput
          style={styles.input}
          // value={email}
          placeholder="User Name"
          //  onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          // value={password}
          //  onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Restore");
            }}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              navigation.navigate("Main");
            }}
            title="Login"
            color="#62757f"
          />
          <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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
  forgotPassword: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 1,
  },
  forgot: {
    fontSize: 14,
    color: "black",
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
