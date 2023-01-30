import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Button,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Toast from "react-native-root-toast";
import RecentActivityFlatlist from "../../components/RecentActivityFlatlist";

const Trips = (navigation) => {
  const Separator = () => <View style={styles.separator} />;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userDatabaseRowId,setUserDatabaseRowId]=useState();
  const [userIsBooked,setUserIsBooked]=useState();
  const [reservationNumber,setReservationNumber]=useState();

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
        reservation_number:"", 
      },
    })
    .then((res) => {
      console.log("res.data: ", res.data);
      resetSpotValue();
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

  const resetSpotValue=()=>{

    if(vehicle==="bike"){
      axios
      .put("https://fingobox.com/api/database/row", {
        app_id: 150,
        app_token: "V1aBoEr8U1Kti2PkYkbebN",
        database_id: databaseId,
        database_row_id:databaseRowId,
        database_column_values: {
        bike:bookingValue+1
      }
      })
      .then((res) => {
        console.log("res.data hereee: ",res.data.date); 
      })
      .catch((err) => console.log("err", err.response.data));
    }
    if(vehicle==="car"){
      axios
      .put("https://fingobox.com/api/database/row", {
        app_id: 150,
        app_token: "V1aBoEr8U1Kti2PkYkbebN",
        database_id: databaseId,
        database_row_id:databaseRowId,
        database_column_values: {
        car:bookingValue+1
      }
      })
      .then((res) => {
        console.log("res.data hereee: ",res.data.date); 
      })
      .catch((err) => console.log("err", err.response.data));
    }

  }

  const [plazaTitle,setPlazaTitle]=useState();
  const [databaseId,setDatabaseID]=useState();
  const [databaseRowId,setDatabaseRowId]=useState();
  const [bookingValue,setBookingValue]=useState();
  const [vehicle,setVehicle]=useState();
  const [bookingDate,setBookingDate]=useState();

 

  const asyncGet=()=>{

    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);
      setEmail(userObj[0].columns.user_email);
      setPassword(userObj[0].columns.user_password);
      setUserDatabaseRowId(userObj[0].database_row_id);
    })

    AsyncStorage.getItem("plazaInfo").then((value) => {
      let userObj = JSON.parse(value);
     // console.log(userObj[0].bike);
      setPlazaTitle(userObj[0].title);
      setDatabaseID(userObj[0].databaseId);
      setDatabaseRowId(userObj[0].databaseRowId);
      setBookingValue(userObj[0].value);
      setVehicle(userObj[0].vehicle);
      setBookingDate(userObj[0].date);
      setReservationNumber(userObj[0].reservation_number);
    });
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
      <View>
      <Text style={styles.cardStyleText}>{firstName} {lastName}</Text>
      <Text style={styles.cardStyleText}>You have booked {vehicle}</Text>
      <Text style={styles.cardStyleText}>{plazaTitle}</Text>
      <Text style={styles.cardStyleText}>Reservation #: {reservationNumber}</Text>
      </View>
      <View>
      {vehicle==="bike"?
      <Image style={styles.image} source={require("../../asset/bike.png")} />
      :
      <Image style={styles.image} source={require("../../asset/car.png")} />  
      }     
      </View>
      </View>
      <View style={styles.bookingButtonContainer}>
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
      </View>
      </View>
      }
       <Separator />
      <View style={styles.flatlistContainer} >
      <RecentActivityFlatlist/>      
      </View>
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
    flexDirection:"row",
    justifyContent:"space-around",
    margin:5,
    padding:10,
   
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
  bookingButtonContainer:{
    margin:5,
  },
  bookingButton: {
    backgroundColor: "#62757f",
    padding:10,
    margin:10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  flatlistContainer:{
    flex:1,
    
  },


});
