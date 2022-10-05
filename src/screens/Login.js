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
  ToastAndroid
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Utils/color";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = ({ navigation }) => {
const [isSignedIn, setIsSignedIn] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const LoginUser = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsSignedIn(true);
    const user = userCredential.user;
    navigation.navigate("Main");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if (errorCode == "auth/wrong-password")
      ToastAndroid.show("Incorrect Password!", ToastAndroid.SHORT);

    if (errorCode == "auth/user-not-found")
      ToastAndroid.show("User not found!", ToastAndroid.SHORT);
  });
};

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
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Password"
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
            onPress={LoginUser}
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
