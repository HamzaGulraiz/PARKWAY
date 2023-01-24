import React,{useState} from "react";
import { StyleSheet, View, TextInput,TouchableOpacity } from "react-native";
import axios from "axios";

export default function ApiCall({ navigation }) {

  

     const apiCall=()=>{
       
        axios
          .post("https://fingobox.com/api/database/row", {
            
            // "app_id": 150,
            // "app_token": "V1aBoEr8U1Kti2PkYkbebN",
            // "database_id": 146,
            // "database_column_values": {
            
            //   "car":7, 
            // }


                     
          })
          .then((res) => {
            console.log("res.data: ", res.data);
           
          })
          .catch((err) => console.log("err: ", err.response.data));

    }
  return (
    <View style={style.container}>
     
      <TouchableOpacity
                style={style.button}
                 onPress={() => apiCall()}
              ></TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: {
   
    backgroundColor: "#cfd8dc",
    borderRadius: 5,

    padding: 30,
    margin: 30,
  },

});
