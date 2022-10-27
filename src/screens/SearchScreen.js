import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Colors } from "../Utils/color";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

function SearchScreen() {
  const apiKey = "AIzaSyDUyKeEdc9hDuYhTKrMHTQBVYRHC0lpfgA";
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {location ? (
          <View>
            <MapView
              style={{ width: "100%", height: "100%" }}
              provider="google"
              minZoomLevel={12}
              showsUserLocation={true}
              region={region}
            />
            <View style={{ position: "absolute", top: 5, width: "100%" }}>
              <GooglePlacesAutocomplete
                placeholder="Search"
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                  rankby: "distance",
                }}
                textInputProps={{
                  autoFocus: true,
                }}
                styles={{
                  textInputContainer: {
                    margin: 10,
                  },
                  textInput: {
                    height: 40,
                    color: "black",
                    fontSize: 15,
                    fontWeight: "500",
                    backgroundColor: "#cfd8dc",
                  },
                  predefinedPlacesDescription: {
                    color: "#1faadb",
                  },
                  container: {
                    flex: 0,
                    position: "absolute",
                    width: "100%",
                    zIndex: 1,
                  },
                  description: {
                    fontWeight: "bold",
                  },
                  listView: {
                    position: "absolute",
                    zIndex: 100,
                    elevation: 3,
                    top: 30,
                    paddingHorizontal: 15,
                  },
                }}
                onPress={(data, details = null) => {
                  setRegion({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  });
                  // 'details' is provided when fetchDetails = true
                  console.log(data, details);
                }}
                query={{
                  key: "AIzaSyDUyKeEdc9hDuYhTKrMHTQBVYRHC0lpfgA",
                  language: "en",
                  components: "country:pakistan",
                  types: "establishment",
                  radius: 30000,
                  location: `${region.latitude}, ${region.longitude}`,
                }}
              />
            </View>
          </View>
        ) : (
          <View>
            <MapView
              style={{ width: "100%", height: "100%" }}
              provider="google"
              minZoomLevel={12}
              showsUserLocation={true}
              initialRegion={{
                latitude: 31.5204,
                longitude: 74.3587,
                latitudeDelta: 1.001,
                longitudeDelta: 1.001,
              }}
            />
            <View style={{ position: "absolute", top: 5, width: "100%" }}>
              <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={2}
                textInputProps={{
                  autoFocus: true,
                }}
                styles={{
                  textInputContainer: {
                    margin: 10,
                  },
                  textInput: {
                    height: 40,
                    color: "black",
                    fontSize: 15,
                    fontWeight: "500",
                    backgroundColor: "#cfd8dc",
                  },
                  predefinedPlacesDescription: {
                    color: "#1faadb",
                  },
                }}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  console.log(data, details);
                }}
                query={{
                  key: apiKey,
                  language: "en",
                }}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },

  list: {
    margin: 1,
  },
  listButton: {
    marginVertical: 5,
    flexDirection: "row",
    padding: 10,
  },
  listText: { fontSize: 15, marginLeft: 20, fontWeight: "500" },
});

export default SearchScreen;

// <View style={styles.list}>
//           <TouchableOpacity
//             style={styles.listButton}
//             onPress={() => {
//               // navigation.navigate("PersonalInfo");
//             }}
//           >
//             <Ionicons name="time" size={16} color="black" />
//             <Text style={styles.listText}>Saved Places</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.listText}>Recent</Text>
//         <View style={styles.list}>
//           <TouchableOpacity
//             style={styles.listButton}
//             onPress={() => {
//               // navigation.navigate("PersonalInfo");
//             }}
//           >
//             <Ionicons name="time" size={16} color="black" />
//             <Text style={styles.listText}>Liberty</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.listButton}
//             onPress={() => {
//               // navigation.navigate("PersonalInfo");
//             }}
//           >
//             <Ionicons name="time" size={16} color="black" />
//             <Text style={styles.listText}>Emporium</Text>
//           </TouchableOpacity>
//         </View>
