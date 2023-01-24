import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Button,
  ActivityIndicator,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Toast from "react-native-root-toast";

const Trips = (navigation) => {
  const Separator = () => <View style={styles.separator} />;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userDatabaseRowId,setUserDatabaseRowId]=useState();
  const [userIsBooked,setUserIsBooked]=useState();

  const userBookingCancelation=()=>{   
    setIsLoaded(false); 
    axios
    .put("https://fingobox.com/api/database/row", {
      app_id: 67,
      app_token: "dGcFxHbptVvDgDR6GvGwcW",
      database_id: 57,
      database_row_id:userDatabaseRowId, 
      database_column_values: {
        user_firstName: firstName,
        user_lastName: lastName,
        user_email: email,
        user_password: password,
        user_is_booked:false, 
      },
    })
    .then((res) => {
      console.log("res.data: ", res.data);
      Toast.show("Booking Cancelled", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      setIsLoaded(true);
      setUserIsBooked(false);
    })
    .catch((err) => console.log("err: ", err.response.data));
    
  }

  const asyncGet=()=>{

    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);
      setEmail(userObj[0].columns.user_email);
      setPassword(userObj[0].columns.user_password);
      setUserDatabaseRowId(userObj[0].database_row_id);
    })

  }

  const bookCheck= new Promise((resolve,reject)=>{
     
    setTimeout(()=>{

      asyncGet();
        resolve("getting_Email");
        reject("error");

    },1000)
  
    
  })
 
  bookCheck.then((gettingEmail)=>{
    if(email!==null&&email!==undefined){
      ifUserIsBooked();
    }
     
  }).catch((error)=>{
console.log(error);
  })
    

      // useEffect(() => {
     
      
      // }, []);

  
  const [isLoaded, setIsLoaded] = useState(true);


  const ifUserIsBooked = () => {
      axios
      .get(
        `https://fingobox.com/api/database/select/from/67/dGcFxHbptVvDgDR6GvGwcW/57/where/user_email/equals/${email}`
      )
      .then((res) => {
        const state = res.data[0].columns.user_is_booked;
       console.log(state);       
        if(state===false){
          setUserIsBooked(false);
          Toast.show("no active trip", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }
        else{
          setUserIsBooked(true); 
        }
        })
         .catch((err) => console.log(res.response.data)); 
                
  };



  return (
    <>
      <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
          <Text style={styles.titleText}>Booking Information</Text>
      </View>
      <Separator />
      {userIsBooked ? 
      <>
      <View style={styles.currentTripCard}>
      <Text style={styles.cardStyleText}>Mr : {firstName}</Text>
      <Text style={styles.cardStyleText}>you have booked</Text>
      <Text style={styles.cardStyleText}>At</Text>
      <TouchableOpacity
            style={styles.bookingButton}
            onPress={() => 
              { 
                userBookingCancelation()
              }
            }
          >
             {isLoaded ? (
              <Text style={{ color: "white", fontSize: 16 }}>Cancel Booking</Text>
            ) : (
              <ActivityIndicator size="small" color="black" />
            )}
           
          </TouchableOpacity>
      </View>
      </>
      :
      <View style={styles.currentTripCard}>
        <Text style={styles.noTripActive}>There is no trip currently active</Text>
        <View style={styles.reloadButtonContainer}>
        {/* {isLoaded ? (
               <Button
               title="Reload"
               onPress={() => ifUserIsBooked()}
             />
            ) : (
              <ActivityIndicator size="small" color="black" />
            )} */}
      
      </View>
      </View>
      }

      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Trips;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "#62757f",
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
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
  currentTripCard:{
    margin:10,
    padding:60,
    borderColor:"grey",
    borderWidth:1,
    borderRadius:5,
  },
  noTripActive:{
    fontSize:20,
    fontWeight:"400",
  },
  reloadButtonContainer: { 
    
    
     },
  cardStyleText:{
    fontSize:20,
    fontWeight:"500",
  },
  bookingButton: {
    backgroundColor: "#62757f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
