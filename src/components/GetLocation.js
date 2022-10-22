import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import AppLoader from "./AppLoader";

export default function GetLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

      // console.log(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={{ width: "100%", height: 200, borderRadius: 10 }}
          minZoomLevel={9} // default => 0
          maxZoomLevel={12} // default => 20
          enableZoomControl={false}
          showsUserLocation={true}
          zoomEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
          followsUserLocation={true}
          provider="google"
          region={region}
          // onRegionChangeComplete={(region) => setRegion(region)}
        >
          {/* {location && <Marker coordinate={location.coords} />} */}
        </MapView>
      ) : (
        <MapView
          style={{ width: "100%", height: 200, borderRadius: 10 }}
          minZoomLevel={3} // default => 0
          // maxZoomLevel={12} // default => 20
          enableZoomControl={false}
          zoomEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
          provider="google"
          initialRegion={{
            latitude: 31.5204,
            longitude: 74.3587,
            latitudeDelta: 1.001,
            longitudeDelta: 1.001,
          }}
        ></MapView>
        // <View style={styles.locationWaitingCard}>
        //   <AppLoader />
        // </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  locationWaitingCard: {
    padding: 20,
    alignItems: "center",
  },
});
