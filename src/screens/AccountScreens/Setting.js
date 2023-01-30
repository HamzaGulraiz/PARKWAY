import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Colors } from "../../Utils/color";

const logoutAlert = (navigation) => {
  Alert.alert("Logout", "Do you wish to logout", [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => navigation.dispatch(StackActions.replace("Login")),
    },
  ]);
};

const Setting = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
      {/* <View style={styles.titleView}>
          <Text style={styles.titleText}>Settings</Text>
      </View> */}
      <View style={styles.infoContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../asset/adaptive-icon1.png")}
        />
      </View>
   
      <View style={styles.paragraph}>
      <ScrollView style={styles.scrollView}>
       <Text style={styles.descriptionText}>
       With fast growing population, 
       the number of cars in Pakistan is also increasing. 
       Parking space was one of the major problems in Pakistan. 
       To this date it is not solved but it has grown in numbers. 
       In Karachi, which is the largest city in Pakistan, 
       it has been estimated that Karachi has more than 3 million vehicles on the road per day, 
       but Karachi do not have enough parking for all of them or people could not find one that easy.
       The increase in city traffic is one the major effects of population growth especially in urban areas. 
       Due to this searching for a vacant parking area during peak hours is not only time-consuming but also results in wastage of fuel. 
       The only drivers keep searching for suitable parking lot which leads to increase in traffic. 
       Increasing volume of vehicular exhaust creates a negative impact on the environment. 
       Hence reservation-based smart parking has become the need of the routine.
       </Text>
       </ScrollView>
      </View>
     
        <View style={styles.logoutView}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              logoutAlert(navigation);
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height:80,
    width: 80,
  },
  paragraph:{
    padding:20,
    backfaceVisibility:"red",
  },
  descriptionText: { 
    fontSize: 18, 
    fontWeight: "500",
     color: "black", 
    },
  logoutView: {
    margin: 9,
  },
  scrollView: {
  
    
  },
  logoutButton: {
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "red",
    padding: 10,
  },
});
export default Setting;
