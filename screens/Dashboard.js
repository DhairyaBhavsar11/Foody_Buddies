import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const Dashboard = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.bgWhite]}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <View style={[styles.bottomContainer, styles.bgMateDarkBlack]}>
        <Text style={[styles.heading, styles.textWhite]}>
          Let's get something
        </Text>
        <Text style={[styles.subHeading, styles.textWhite]}>
          Good to see you back
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;
