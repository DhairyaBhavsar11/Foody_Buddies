import React, { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
// import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";
import * as location from "../services/location";

const SplashScreen = ({ navigation }) => {
  location
    .getCurrentLocation()
    .then((coords) => {
      console.log(coords);
      navigation.replace("Login");
    })
    .catch((err) => {
      helper.alertBox(err);
      navigation.replace("Login");
    });

  // setTimeout(() => {
  //   // console.log(useCurrentLocation);
  //   navigation.replace("Login");
  // }, 3000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </View>
  );
};

export default SplashScreen;
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  loginForm: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
