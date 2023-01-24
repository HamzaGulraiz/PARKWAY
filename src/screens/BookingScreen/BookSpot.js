import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";


const BookSpot = ({ route, navigation }) => {
  const Separator = () => <View style={styles.separator} />;
  const { item } = route.params;


  const [bookCar, setBookCar] = useState(false);
  const [bookBike, setBookBike] = useState(false);
  const [BookBtnClick, setBookBtnClick] = useState(false);

  const bookState = () => {
    setBookBtnClick(true);
    setTimeout(() => {
      setBookBtnClick(false);
    }, 2000);
  };

  

  const btnPressedBike = () => {
    if (bookBike === false) {
      ifUserIsBooked();
      setBookBike(true);
      setBookCar(false);
      bookBikeParking();
      setCarTempValue(0);

    } else {
      setBookBike(false);
      setBikeTempValue(0);
    }
  };
  const btnPressedCar = () => {
    if (bookCar === false) {
      ifUserIsBooked();
      setBookCar(true);
      setBookBike(false);
      bookCarParking();
      setBikeTempValue(0);
    } else {
      setBookCar(false);
      setCarTempValue(0);
    }
  };

  
  const [bikeTempValue, setBikeTempValue] = useState(0);    
  const [carTempValue, setCarTempValue] = useState(0);

  
  const bookBikeParking =()=>{
    if(bookBike===false){
    const tempValue=bikeSpot;
    setBikeTempValue(tempValue-1);
  }
}
  const bookCarParking =()=>{
    if(bookCar===false){
    const tempValue=carSpot;
    setCarTempValue(tempValue-1);
  }
}



  const bookBtn = () => {

    if (bookBike === false && bookCar === false) {
      bookState();
    }
      if (bookBike === true) {
        if(bikeSpot==0||bikeSpot>=bikeTotalSpots-1){
          noSpotMessage();
        }else{
        postBikeData();
      } 
    }
      if(bookCar===true) {
        if(carSpot==0||carSpot>=carTotalSpots-1){
          noSpotMessage();
        }else{
        postCarData();
      } 
    }
    
  };

  const noSpotMessage=()=>{
    Toast.show("NO Spot availble!, try again later", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }

  const dataBaseIdBike=item.dataBaseIdBike;
  const dataBaseRowIdBike=item.dataBaseRowIdBike;

  const postBikeData=()=>{

    if(apiName==="F"){


      axios
      .put("https://fingobox.com/api/database/row", {
        app_id: 150,
        app_token: "V1aBoEr8U1Kti2PkYkbebN",
        database_id: dataBaseIdBike,
        database_row_id:dataBaseRowIdBike,
        database_column_values: {
        bike:bikeTempValue
      }
      })
      .then((res) => {
        console.log("res.data: ", res.data);
        userBookingDetailUpdate();
        Toast.show("Bike value posted!", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      })
      .catch((err) => console.log("err HERE: ", err.response.data));

    
    }
    if(apiName==="T"){

      Toast.show("Bike value posted!", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }

  }

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userIsBooked,setUserIsBooked]=useState();
  const [userDatabaseRowId,setUserDatabaseRowId]=useState();
  const [plazaTitle,setPlazaTitle]=useState();
  const [spotRowId,setSpotRowId]=useState();

  const userBookingDetailUpdate=()=>{

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
        user_is_booked:true, 
      },
    })
    .then((res) => {
      console.log("res.data: ", res.data);
    })
    .catch((err) => console.log("err: ", err.response.data));
  
  }


      
  const ifUserIsBooked = () => {

    AsyncStorage.getItem("userInfo").then((value) => {
      let userObj = JSON.parse(value);
      setFirstName(userObj[0].columns.user_firstName);
      setLastName(userObj[0].columns.user_lastName);
      setEmail(userObj[0].columns.user_email);
      setPassword(userObj[0].columns.user_password);
      setUserDatabaseRowId(userObj[0].database_row_id);
      let email= userObj[0].columns.user_email;
      axios
      .get(
        `https://fingobox.com/api/database/select/from/67/dGcFxHbptVvDgDR6GvGwcW/57/where/user_email/equals/${email}`
      )
      .then((res) => {
        //console.log("res.data: ",res.data[0].columns.user_is_booked);
  
        const state = res.data[0].columns.user_is_booked;
       console.log(state);
        setUserIsBooked(state);        
        })
         .catch((err) => console.log(res.response.data));      
    });   
  };
  

  const userAlreaderBookedButton=()=>{

    Toast.show("User have already booked a parking space, more info in accounts", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });

  }
  

  const dataBaseIdCar=item.dataBaseIdCar;
  const dataBaseRowIdCar=item.dataBaseRowIdCar;

  const postCarData=()=>{


    if(apiName==="F"){


      axios
      .put("https://fingobox.com/api/database/row", {
        app_id: 150,
        app_token: "V1aBoEr8U1Kti2PkYkbebN",
        database_id: dataBaseIdCar,
        database_row_id:dataBaseRowIdCar,
        database_column_values: {
        car:carTempValue
      }
      })
      .then((res) => {
        console.log("res.data: ", res.data);
        userBookingDetailUpdate();
        Toast.show("Car value posted!", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      })
      .catch((err) => console.log("err hhhHERE: ", err.response.data));

    
    }
    if(apiName==="T"){

      Toast.show("Car value posted!", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }

  }

  
  useEffect(() => {
    const interval = setInterval(() => {
     spotData();
    
   
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const apiBike=item.apiBike;
  const apiCar=item.apiCar;
  const apiName=item.apiName;
  const totalSpots=item.totalSpots;
  
  
   
    const [bikeSpot, setBikeSpot] = useState(0);    
    const [carSpot, setCarSpot] = useState(0);
   
    const bikeTotalSpots=item.bikeTotalSpots;
    const carTotalSpots=item.carTotalSpots;
   
 
 
  const spotData = () => {
    axios
      .get(
       `${apiBike}`,
       
      )
      .then((res) => {
       if(apiName==="F"){
        const bikeVal = (res.data[0].columns.bike);
        if (bikeVal === null) {
          //console.log('bike string is empty');
        } else {
          setBikeSpot(parseInt(bikeVal));
         
          //console.log('bike string is NOT empty');
        }
       }
       if(apiName==="T"){
        const bikeVal = (res.data.feeds[0].field1); 
        if (bikeVal === null) {
          //console.log('bike string is empty');
        } else {

          //console.log('bike string is NOT empty');
         
        }
       }     
        
      })
       .catch((err) => console.log(res.response.data));

       axios
      .get(
      
       `${apiCar}`,
      )
      .then((res) => {

       

        if(apiName==="F"){
          const carVal = (res.data[0].columns.car);
          if (carVal === null) {
            //console.log('Car string is empty');
          } else {
            //console.log('car string is NOT empty');
            setCarSpot(parseInt(carVal));
          }
         }
         if(apiName==="T"){         
          const carVal = (res.data.feeds[0].field2);
          if (carVal === null) {
            console.log('Car string is empty');
          } else {
            console.log('car string is NOT empty');
            setCarSpot(parseInt(carVal));
          }
         }      
      
      })
       .catch((err) => console.log(res.response.data));

    
  };
 
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <ScrollView>
          <View style={styles.addressContainer}>
            <Ionicons name="location" size={18} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "300", left: 5 }}>
              Example text for location address
            </Text> 
          </View>
          <View style={styles.addressContainer}>
          <Text style={{ fontSize: 15, fontWeight: "300",  }}>
              Total Spaces in parking lot
            </Text> 
            <Text style={{ fontSize: 15, fontWeight: "800", left: 10 }}>{item.totalSpots}</Text>
            </View>
          <Separator />
          <View style={styles.imgTitleContainer}>
            <Image style={styles.image} source={item.img} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <Text style={styles.descriptionText}>{bikeTempValue}</Text>
            <Text style={styles.descriptionText}>{carTempValue}</Text>
       
            
          </View>
          <Separator />
          {BookBtnClick ? (
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Ionicons name="caret-down" size={16} color="black" />
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Choose one
              </Text>
              <Ionicons name="caret-down" size={16} color="black" />
            </View>
          ) : (
            <View
              style={{
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>Spaces</Text>
            </View>
          )}

          <View style={styles.spacesContainer}>
            <View style={styles.spacesView}>
              <TouchableOpacity onPress={() =>btnPressedCar()}>
                <View
                  style={
                    bookCar
                      ? styles.spacesButtonPressed
                      : styles.spacesButtonNormal
                  }
                >
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../asset/car.png")}
                  />
                </View>
              </TouchableOpacity>
              {carSpot==0? (
                  <View style={{height:50,width:50 ,borderRadius:3, borderWidth: 1,
                    borderColor: "red", justifyContent:"center",alignItems:"center" }}>
                  <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                0
                </Text>
                </View>
                ):(
                  <View style={{height:50,width:50 ,borderRadius:3, borderWidth: 1,
                    borderColor: "green", justifyContent:"center",alignItems:"center" }}>
                  <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                 {carSpot}
                </Text>
                </View>
                )}
            </View>
            <View style={styles.spacesView}>
              <TouchableOpacity onPress={() => 
               
                  btnPressedBike()
               }>
                <View
                  style={
                    bookBike
                      ? styles.spacesButtonPressed
                      : styles.spacesButtonNormal
                  }
                >
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../asset/bike.png")}
                  />
                </View>
              </TouchableOpacity>

              
                {bikeSpot==0? (
                  <View style={{height:50,width:50 ,borderRadius:3, borderWidth: 1,
                   borderColor: "red", justifyContent:"center",alignItems:"center" }}>
                  <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                 0
                </Text>
                </View>
                ):(
                  <View style={{height:50,width:50 ,borderRadius:3, borderWidth: 1,
                    borderColor: "green", justifyContent:"center",alignItems:"center" }}>
                  <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    left: 5,
                    margin: 5,
                  }}
                >
                 {bikeSpot}
                </Text>
                </View>
                )}
              
            </View>
          </View>
          <Separator />

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              margin: 10,
            }}
          >
            <Ionicons name="information" size={18} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "300", left: 5 }}>
              Free Cancellation
            </Text>
          </View>
          <Separator />
          <TouchableOpacity
            style={styles.bookingButton}
            onPress={() => 
              { userIsBooked?
                userAlreaderBookedButton() 
                :
                bookBtn()
              }
            }
          >
            <Text style={{ color: "white", fontSize: 16 }}>Book</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default BookSpot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

    marginTop: StatusBar.currentHeight,
  },
  titleContainer: {
    margin: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "#62757f",
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
  addressContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgTitleContainer: {
    alignItems: "center",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
  },
  descriptionContainer: { marginVertical: 10, margin: 10 },
  descriptionText: { fontSize: 14, fontWeight: "400", color: "black" },
  spacesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    margin: 10,
   
  },
  spacesView: {
    flexDirection: "row",
    width:125,
    justifyContent:"space-around",
    //backgroundColor:"red",
  },
  bookingButton: {
    backgroundColor: "#62757f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  spacesButtonPressed: {
    // margin: 10,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: "#cfd8dc",
    borderColor: "black",
  },
  spacesButtonNormal: {
    // margin: 6,
      },
});
