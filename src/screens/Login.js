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
  ToastAndroid,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import { Colors } from "../Utils/color";
import FormInput from "../components/FormInput";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;
  console.log(userInfo);
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invail Email!", setError);

    if (!password.trimEnd() || password.length < 6)
      return updateError("Password should be atleast 6 characters!", setError);
  };

  const submitForm = () => {
    if (isValidForm()) {
      //submit

      console.log(userInfo);
    }
  };

  ///////////////////////login with database

  const LoginUser = () => {
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    //   .then((userCredential) => {
    //     setIsSignedIn(true);
    //     const user = userCredential.user;
    //     navigation.navigate("Main");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode);
    //     if (errorCode == "auth/wrong-password")
    //       ToastAndroid.show("Incorrect Password!", ToastAndroid.SHORT);
    //     if (errorCode == "auth/user-not-found")
    //       ToastAndroid.show("User not found!", ToastAndroid.SHORT);
    //   });
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

        {error ? (
          <Text style={{ color: "red", fontSize: 15, textAlign: "center" }}>
            {error}
          </Text>
        ) : null}
        <FormInput
          value={email}
          onChangeText={(value) => handleOnChangeText(value, "email")}
          placeholder="example@email.com"
          autoCapitalize="none"
        />

        <FormInput
          value={password}
          onChangeText={(value) => handleOnChangeText(value, "password")}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              submitForm
                ? navigation.dispatch(StackActions.replace("Main"))
                : null;
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
