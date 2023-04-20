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

const Orders = ({ route, navigation }) => {
  const { coords, user } = route.params;
  const [orderList, setOrderList] = useState([]);
  const [firstLoop, setFirstLoop] = useState(true);

  if (firstLoop) {
    getOrdersHistory();
    setFirstLoop(false);
  }

  function getOrdersHistory() {
    fetch(helper.networkURL + "getOrderHistory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setOrderList(response);
      })
      .catch((err) => {
        helper.alertBox({
          label: "Opps !",
          message: "Something went wrong",
        });
      });
  }

  return (
    <View style={[styles.container, styles.bgDarkGreen]}>
      <View
        style={[
          styles.preLoginContainer,
          styles.bgMateDarkBlack,
          styles.profileHeader,
        ]}
      >
        <Text style={[styles.heading, styles.textWhite, styles.mb30]}>
          Orders History
        </Text>
        <ScrollView>
          {orderList.map((order, index) => {
            return (
              <View key={index}>
                <View style={styles.card}>
                  <TouchableOpacity
                    style={[styles.cardItem, styles.bgWhite]}
                    onPress={() => {}}
                  >
                    <Image
                      style={styles.listItemImage}
                      source={{
                        uri: helper.networkURL + order.imagePath,
                      }}
                    />
                    <View>
                      <Text style={styles.cardheading}>{order.foodName}</Text>

                      <Text style={styles.cardItemPrice}>
                        ${order.foodPrice} x {order.quantity}
                      </Text>
                      <TouchableOpacity
                        style={[styles.statusButton, styles.bgMateLightBlack]}
                      >
                        <Text style={styles.textWhite}>
                          {order.status == "-1" ? "Pending" : "Ready to Pickup"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
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

export default Orders;
