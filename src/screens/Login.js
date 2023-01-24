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
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import axios from "axios";
import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import { Colors } from "../Utils/color";
import FormInput from "../components/FormInput";

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
  const [isLoaded, setIsLoaded] = useState(true);

  const loginOnPress = () => {
    submitForm() ? loginUser() : console.log("here is the problem line 176");
  };

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;
  // console.log(userInfo, " line 55");
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invail Email!", setError);

    if (!password.trimEnd() || password.length < 6)
      return updateError("Password should be atleast 6 characters!", setError);
    else {
      return true;
    }
  };

  const submitForm = () => {
    if (isValidForm()) {
      //submit
      return true;
      // console.log("true line 77");
    }
  };

  ///////////////////////login with database
  const loginUser = () => {
    console.log("username, password: ", email, password);
    setIsLoaded(false);
    axios
      .get(
        `https://fingobox.com/api/database/select/from/67/dGcFxHbptVvDgDR6GvGwcW/57/where/user_email/equals/${email}`
      )
      .then((res) => {
        console.log("res.data: ", res.data);

        const passCheck = res.data[0].columns.user_password;

        ////temp storage id detail/////

        const jsonValue = JSON.stringify(res.data);
        console.log("jsonvalue sent by async", jsonValue);
        AsyncStorage.setItem("userInfo", jsonValue);

        ////////////////////////////////////////

        if (password === passCheck) {
          console.log("login successful!");
          setIsLoaded(true);
          navigation.dispatch(StackActions.replace("Main"));
        } else {
          setIsLoaded(true);
          Toast.show("Invalid Email or Password!!", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          console.log("login failed!");
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#000ff" />
        </View>
      ) : (
        <View> */}
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
          {/* <Button
            onPress={() => {
              loginOnpress();
            }}
            title="Login"
            color="#62757f"
          /> */}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              loginOnPress();
            }}
          >
            {isLoaded ? (
              <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
            ) : (
              <ActivityIndicator size="small" color="white" />
            )}
          </TouchableOpacity>
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
      {/* </View>
      )} */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenBackGround },
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  loginButton: {
    backgroundColor: "#62757f",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
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
