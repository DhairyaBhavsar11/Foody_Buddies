import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";
import { MaterialIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Colors from "../design-assets/colors";

const Dashboard = ({ navigation }) => {
  const Item = ({ title }) => {
    return (
      <TouchableOpacity style={[styles.listItem, styles.bgWhite]}>
        <Image
          style={styles.listItemImage}
          source={require("../assets/food_banner1.jpeg")}
        />
        <View style={styles.listItemDetails}>
          <Text style={styles.listItemTitle}>{title}</Text>
          <Text style={styles.listItemPrice}>$25</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, styles.bgWhite]}>
      <MapView
        userInterfaceStyle={"light"}
        style={styles.map}
        minZoomLevel={11}
        maxZoomLevel={12}
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
          title="Your Location"
        >
          <Image
            source={require("../assets/homeMarker.png")}
            style={styles.homeMarker}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: 37.77825,
            longitude: -122.4324,
          }}
          title="Marker Title"
          description="Marker Description"
        >
          <Image
            source={require("../assets/map_marker.png")}
            style={styles.restaurantMarker}
          />
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Favourite Restaurant</Text>
                {/* <Text>A short description</Text> */}
                <Image
                  style={styles.image}
                  source={require("../assets/food_banner1.jpeg")}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.79825,
            longitude: -122.4324,
          }}
          title="Marker Title"
          description="Marker Description"
        >
          <Image
            source={require("../assets/map_marker.png")}
            style={styles.restaurantMarker}
          />
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Favourite Restaurant</Text>
                {/* <Text>A short description</Text> */}
                <Image
                  style={styles.image}
                  source={require("../assets/food_banner1.jpeg")}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.categoryHorizontalScrollView}>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === "android" ? 20 : 0,
          }}
        >
          <TouchableOpacity style={[styles.chipsItem, styles.bgLightGreen]}>
            <Text style={styles.textBlack}>Chip 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chip 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chip 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chip 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chip 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chip 6</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={[styles.bottomContainer, styles.bgMateDarkBlack]}>
        <View style={styles.listHorizontalScrollView}></View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === "android" ? 20 : 0,
          }}
        >
          <Item title={"Traditional Food - Olive Garden"} />
          <Item title={"Traditional "} />
        </ScrollView>
        {/* <Text style={[styles.heading, styles.textWhite]}>
          Let's get something
        </Text>
        <Text style={[styles.subHeading, styles.textWhite]}>
          Good to see you back
        </Text> */}
        <View style={styles.divider}></View>
      </View>
      <View style={[styles.bottomNavigationContainer, styles.bgMateDarkBlack]}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              // handleSignOut();
            }}
          >
            <Feather
              style={styles.tabIcon}
              name="home"
              size={24}
              color={Colors.lightGreen}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // handleSignOut();
            }}
          >
            <MaterialIcons
              style={styles.tabIcon}
              name="account-circle"
              size={27}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
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

export default Dashboard;
