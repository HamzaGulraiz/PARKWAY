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

// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const RegisterUser = () => {
  //   createUserWithEmailAndPassword(auth, name, email, password)
  //     .then((re) => {
  //       console.log(re);
  //     })
  //     .catch((re) => {
  //       console.log(re);
  //     });
  // };

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

          <TextInput
            style={styles.input}
            // value={name}
            // onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            //  value={email}
            //  onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            // value={password}
            // onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Password"
          />

          <View style={styles.buttonContainer}>
            <Button onPress={handleSignup} title="Register" color="#62757f" />
            <View style={styles.row}>
              <Text>Already have an account </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.link}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  logoContainer: { alignItems: "center", marginTop: StatusBar.currentHeight },
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
