import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
// import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);
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
