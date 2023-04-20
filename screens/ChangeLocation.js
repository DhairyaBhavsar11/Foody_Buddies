import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";
import {
  MaterialIcons,
  Feather,
  SimpleLineIcons,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import * as Colors from "../design-assets/colors";
import MapView, { Marker, Callout, Circle } from "react-native-maps";

const ChangeLocation = ({ route, navigation }) => {
  const { coords, user } = route.params;
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [address, setAddress] = useState(
    "40 Fountainhead Rd, North York, ON M3J 2V1"
  );

  const handleMarkerDrag = (e) => {
    setMarkerPosition(e.nativeEvent.coordinate);
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        markerPosition.latitude +
        "," +
        markerPosition.longitude +
        "&key=AIzaSyAV4hI7oKB7SIZZnU3TnV9RyDyw8WWiFLw"
    )
      .then((response) => response.json())
      .then((json) => {
        const newAddress = json.results[0].formatted_address;
        setAddress(newAddress);
      })
      .catch((error) => console.error(error));
  };

  const Item = ({ title }) => {
    // return (
    //   <TouchableOpacity style={[styles.listItem, styles.bgWhite]}>
    //     <Image
    //       style={styles.listItemImage}
    //       source={require("../assets/food_banner1.jpeg")}
    //     />
    //     <View style={styles.listItemDetails}>
    //       <Text style={styles.listItemTitle}>{title}</Text>
    //       <Text style={styles.listItemPrice}>$25</Text>
    //     </View>
    //   </TouchableOpacity>
    // );
  };

  return (
    <View style={[styles.container, styles.bgDarkGreen]}>
      <View style={[styles.preLoginContainer, styles.bgMateDarkBlack]}>
        <View style={styles.profileHeader}>
          <Text style={[styles.heading, styles.textWhite, styles.mb30]}>
            Change Location
          </Text>
          <View style={styles.iconProfileTextInput}>
            <MaterialIcons name="my-location" size={24} color="white" />
            <Text
              style={[styles.iconText, styles.textWhite]}

              // value={password}
              // onChangeText={setPassword}
            >
              {address}
            </Text>
          </View>
          <View style={styles.iconProfileTextInput}>
            <Octicons name="number" size={24} color="white" />
            <TextInput
              style={[styles.iconInput, styles.textWhite]}
              // value={password}
              // onChangeText={setPassword}
              placeholderTextColor={"grey"}
              placeholder="Unit"
            />
          </View>
          <View style={styles.mapSquare}>
            <MapView
              userInterfaceStyle={"light"}
              style={styles.map}
              // customMapStyle={FoodyBuddies}
              // customMapStyleID="77908cd3abdd8cff"
              showsPointsOfInterest={false}
              showsBuildings={false}
              minZoomLevel={13}
              maxZoomLevel={18}
              zoomTapEnabled={true}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {/* <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title="Your Location"
            >
              <Image
                source={require("../assets/homeMarker.png")}
                style={styles.homeMarker}
              />
            </Marker> */}
              <Marker
                draggable
                coordinate={markerPosition}
                onDragEnd={handleMarkerDrag}
              />
            </MapView>
          </View>
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={
              () => handleSignIn()
              // navigation.navigate("Step 2", { firstName, lastName, email })
            }
          >
            <Text style={styles.buttonText}>Change Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
      </View>
      <View style={[styles.bottomNavigationContainer, styles.bgMateDarkBlack]}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Change Password", {
                coords: coords,
                user: user,
              });
            }}
          >
            <Ionicons
              style={styles.tabIcon}
              name="key-outline"
              size={27}
              color={Colors.whiteColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.replace("Change Location");
            }}
          >
            <Ionicons
              style={styles.tabIcon}
              name="location"
              size={27}
              color={Colors.lightGreen}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Home", { coords: coords });
              // handleSignOut();
            }}
          >
            <Feather
              style={styles.tabIcon}
              name="home"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Account Settings", {
                coords: coords,
                user: user,
              });
            }}
          >
            <MaterialIcons
              style={styles.tabIcon}
              name="account-circle"
              size={27}
              color={Colors.whiteColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Login");
              // handleSignOut();
            }}
          >
            <SimpleLineIcons
              style={styles.tabIcon}
              name="logout"
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangeLocation;
