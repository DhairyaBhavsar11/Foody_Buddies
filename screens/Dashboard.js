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
import {
  MaterialIcons,
  Feather,
  SimpleLineIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import * as Colors from "../design-assets/colors";

const Dashboard = ({ route, navigation }) => {
  const { coords } = route.params;

  const [user, setUser] = useState("");
  const [markers, setMarkers] = useState([]);

  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [foodList, setFoodList] = useState([]);

  if (user == "") {
    helper.getAsync("user").then((user) => {
      if (user && user != "" && user._id) {
        setUser(user);
        getRestaurants();
      } else {
        helper.setAsync("user", "");
        navigation.replace("Login");
      }
    });
  }

  function getRestaurants() {
    fetch(helper.networkURL + "getNearByRestaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        MarkerList(response);
      })
      .catch((err) => {
        helper.alertBox({
          label: "Opps !",
          message: "Something went wrong",
        });
      });
  }

  function getFoods(restaurantID) {
    fetch(helper.networkURL + "getFoods", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurantId: restaurantID,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        FoodList(response);
      })
      .catch((err) => {
        helper.alertBox({
          label: "Opps !",
          message: "Something went wrong",
        });
      });
  }

  const Item = ({ food }) => {
    // console.log(food._id);
    return (
      <TouchableOpacity
        style={[styles.listItem, styles.bgWhite]}
        onPress={() => {
          navigation.replace("Order Food", {
            coords: coords,
            food: food,
            restaurant: selectedRestaurant,
            user: user,
          });
        }}
      >
        <Image
          style={styles.listItemImage}
          source={{ uri: helper.networkURL + food.imagePath }}
        />
        <View style={styles.listItemDetails}>
          <Text style={styles.listItemTitle}>{food.foodName}</Text>
          <Text style={styles.listItemPrice}>${food.foodPrice}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  function MarkerList(restaurants) {
    var tempMarkerList = [];
    restaurants.forEach((restaurant) => {
      tempMarkerList.push({
        key: restaurant._id,
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
        title: restaurant.restaurantName,
        // imageURL: helper.networkURL + restaurant.
      });
    });
    setMarkers(tempMarkerList);
  }

  function FoodList(foods) {
    var tempFoods = [];

    foods.forEach((food) => {
      tempFoods.push(food);
    });
    setFoodList(tempFoods);
  }

  return (
    <View style={[styles.container, styles.bgWhite]}>
      <MapView
        userInterfaceStyle={"light"}
        style={styles.map}
        // customMapStyle={FoodyBuddies}
        // customMapStyleID="77908cd3abdd8cff"
        showsPointsOfInterest={false}
        showsBuildings={false}
        minZoomLevel={11}
        maxZoomLevel={16}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Circle
          center={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          radius={5000}
          strokeWidth={2}
          strokeColor="rgba(0, 0, 255, 0.5)"
          fillColor="rgba(0, 0, 255, 0.1)"
        />
        <Marker
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
          title="Your Location"
        >
          <Image
            source={require("../assets/homeMarker.png")}
            style={styles.homeMarker}
          />
        </Marker>
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              onPress={() => {
                console.log(marker.key);
                setSelectedRestaurant(marker);
                getFoods(marker.key);
              }}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
            >
              <Image
                source={require("../assets/map_marker.png")}
                style={styles.restaurantMarker}
              />
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    {/* <Text>A short description</Text> */}
                    <Image
                      style={styles.image}
                      source={require("../assets/food_banner1.jpeg")}
                    />
                    <Text style={styles.name}>{marker.title}</Text>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.categoryHorizontalScrollView}>
        <TouchableOpacity
          style={[styles.orderButton, styles.bgMateLightBlack]}
          onPress={() => {
            navigation.replace("Orders", { coords: coords, user: user });
          }}
        >
          <FontAwesome name="list" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
            <Text style={styles.textBlack}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Japanese</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Greek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipsItem}>
            <Text style={styles.textWhite}>Lebanese</Text>
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
          {foodList.map((food, index) => {
            return <Item key={index} food={food} />;
          })}
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
              navigation.replace("Change Password", { coords: coords });
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
              navigation.replace("Change Location", { coords: coords });
            }}
          >
            <Ionicons
              style={styles.tabIcon}
              name="location"
              size={27}
              color={Colors.whiteColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.replace("Home");
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
              navigation.replace("Account Settings", { coords: coords });
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
              helper.setAsync("user", "");
              navigation.replace("Login");
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
