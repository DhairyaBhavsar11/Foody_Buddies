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
import * as Colors from "../design-assets/colors";

const AccountSettings = ({ navigation }) => {
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
    <View style={[styles.container, styles.bgWhite]}>
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
              navigation.replace("Home");
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
              // handleSignOut();
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

export default AccountSettings;
