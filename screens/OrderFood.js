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
  Entypo,
} from "@expo/vector-icons";
import * as Colors from "../design-assets/colors";
import * as ImagePicker from "expo-image-picker";

const OrderFood = ({ route, navigation }) => {
  const { coords, food, restaurant, user } = route.params;
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOrder = () => {
    if (quantity > 0 && quantity < 20) {
      fetch(helper.networkURL + "addOrder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: food.foodName,
          foodId: food.foodId,
          foodPrice: food.foodPrice,
          imagePath: food.imagePath,
          Notes: notes,
          quantity: quantity,
          restaurantId: food.restaurantId,
          userId: user._id,
          driverId: "0",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          helper.alertBox(response);
          navigation.replace("Home", { coords: coords });
        })
        .catch((err) => {
          helper.alertBox({
            label: "Opps !",
            message: "Something went wrong",
          });
        });
    } else {
      helper.alertBox({
        label: "Opps!",
        message: "You can only enter quantity between 1 to 20",
      });
    }
  };

  return (
    <View style={[styles.container, styles.bgDarkGreen]}>
      <View style={[styles.bottomContainer, styles.bgMateDarkBlack]}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.profileHeader}>
            <Text style={[styles.heading, styles.textWhite]}>Order Food</Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.foodImage}
                source={{ uri: helper.networkURL + food.imagePath }}
                resizeMode="center"
              />
            </View>
            <Text style={[styles.foodheading, styles.textWhite, styles.mb17]}>
              {food.foodName}
            </Text>
            <Text
              style={[styles.fooddescription, styles.textWhite, styles.mb17]}
            >
              {food.foodDescription}
            </Text>

            <View style={styles.iconProfileTextInput}>
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={notes}
                onChangeText={setNotes}
                placeholderTextColor={"grey"}
                placeholder="Add Notes"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={quantity}
                onChangeText={setQuantity}
                placeholderTextColor={"grey"}
                placeholder="Quantity"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={
                () => {
                  handleOrder();
                }
                // navigation.navigate("Step 2", { firstName, lastName, email })
              }
            >
              <Text style={styles.buttonText}>Order</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
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
              navigation.replace("Change Location", {
                coords: coords,
                user: user,
              });
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
              color={Colors.lightGreen}
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

export default OrderFood;
