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
  ScrollView,
} from "react-native";
import Toast from "react-native-root-toast";
import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import FormInput from "../components/FormInput";
import { Colors } from "../Utils/color";

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

const Register = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { firstName, lastName, email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invail Email!", setError);

    if (!firstName.trimEnd() || firstName.length < 3)
      return updateError(
        "Invalid Name 'name should be more than 3 characters'!",
        setError
      );

    if (!lastName.trimEnd() || lastName.length < 6)
      return updateError(
        "Invalid Name! 'name should be more than 3 characters'",
        setError
      );

    if (!password.trimEnd() || password.length < 6)
      return updateError("Password should be atleast 6 characters!", setError);
  };

  const submitForm = () => {
    if (isValidForm()) {
      //submit

      console.log(userInfo);
    }
  };

  //////////////////////////////////User Creation with Database
  const RegisterUser = () => {
    // // let uuid = uuidv4();
    // let fName = userInfo.firstName;
    // let lName = userInfo.lastName;
    // let email = userInfo.email;
    // let password = userInfo.password;
    // axios
    //   .post("https://fingobox.com/api/database/row", {
    //     app_id: 67,
    //     app_token: "dGcFxHbptVvDgDR6GvGwcW",
    //     database_id: 57,
    //     database_column_values: {
    //       user_firstName: fName,
    //       user_lastName: lName,
    //       user_email: email,
    //       user_password: password,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res.data: ", res.data);
    //     navigation.navigate("Login");
    //   })
    //   .catch((err) => console.log("err: ", err.response.data));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../asset/adaptive-icon1.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Become a member</Text>
          </View>

          <ScrollView>
            {error ? (
              <Text style={{ color: "red", fontSize: 15, textAlign: "center" }}>
                {error}
              </Text>
            ) : null}

            <FormInput
              value={firstName}
              onChangeText={(value) => handleOnChangeText(value, "firstName")}
              placeholder="First Name"
              autoCapitalize="none"
            />

            <FormInput
              value={lastName}
              onChangeText={(value) => handleOnChangeText(value, "lastName")}
              placeholder="Last Name"
              autoCapitalize="none"
            />

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

            <View style={styles.buttonContainer}>
              <Button
                onPress={() => {
                  submitForm ? navigation.navigate("Login") : null;
                }}
                title="Register"
                color="#62757f"
              />

              {/* <TouchableOpacity>
                <Text>Register</Text>
              </TouchableOpacity> */}
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackGround,
  },
  logoContainer: { alignItems: "center", marginTop: 100 },
  text: { fontSize: 30 },
  image: { height: 130, width: 130 },
  formContainer: { justifyContent: "center" },

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
