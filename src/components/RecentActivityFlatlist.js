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
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";


const RecentactivityFlatlist = (navigation) => {

    const [activityData,setActivityData]=useState();
    const [fetchDataLoader,setFetchDataLoader]=useState(true);
    const [userEmail,setUserEmail]=useState();

 
    const activityDataFetchApi= async()=>{
      try{
        const response = await fetch(`https://fingobox.com/api/database/select/from/156/3k09fXJ7gW6RjyswkMwGqi/149/where/user_email/equals/${userEmail}`);
        const myData =await response.json();

        setActivityData(myData);
        
        setFetchDataLoader(false);
        }
        catch(error){
          console.log(error);
        }


    // axios
    // .get(
    //   `https://fingobox.com/api/database/select/from/156/3k09fXJ7gW6RjyswkMwGqi/149/where/user_email/equals/hamzagulraiz@gmail.com`
    // )
    // .then((res) => {
     
    //   const jsonValue = JSON.stringify(res.data);
    //   console.log("res.json: ", jsonValue);
    //   setActivityData(jsonValue);
    //   setFetchDataLoader(false);
  
    // })
    // .catch((err) => console.log(err.response.data));



  }

  const readData = async () => {
 AsyncStorage.getItem("userInfo").then((value) => {
            let userObj = JSON.parse(value);
            setUserEmail(userObj[0].columns.user_email);
            console.log(userObj[0].columns.user_email);
          });
         
  };
   
  setTimeout(() => {
    activityDataFetchApi();
}, 3000);

      useEffect(() => {
        
        // AsyncStorage.getItem("userInfo").then((value) => {
        //     let userObj = JSON.parse(value);
        //     setUserEmail(userObj[0].columns.user_email);
        //   });
        readData();

      
      
        //activityDataFetchApi();
      }, []);



  return (
    <>
      <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <Text style={{fontSize:30,fontWeight:"500",alignSelf:"center"}} >Recent Actitvity</Text>
        {fetchDataLoader ?
      <Text style={{fontSize:20,fontWeight:"500",alignSelf:"center"}}>Fetching Data...</Text>
      :  
    //  <Text>data {activityData}</Text>
      <FlatList
      data={activityData}
      renderItem={({item})=>{
        return <View style={styles.cardContainer}>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.columns.user_first_name} {item.columns.user_last_name}</Text>
             </View>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.columns.user_email}</Text>
             </View>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.columns.user_booked}</Text>
             </View>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.columns.at_plaza}</Text>
             </View>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.columns.reservation_number}</Text>
             </View>
             <View style={styles.infoContainer}>
             <Text style={styles.infoDetail}>{item.date}</Text>
             </View>
        </View>
      }}
    />
      }
    
      </View>
      </SafeAreaView>
    
    </>
  );
};

export default RecentactivityFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  flatlistContainer:{
        
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 50,
    borderRadius:5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#cfd8dc",
    width: 370,
    height: 160,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent:"center",
    alignItems:"center",
  },
  infoContainer: {
    flexDirection:"row",
  },
  infoHeading: {
    fontSize: 16,
    fontWeight: "400",
  },
  infoDetail: {
    fontSize: 16,
    fontWeight: "500",
  },
});
