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
} from "@expo/vector-icons";
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
    <View style={[styles.container, styles.bgDarkGreen]}>
      <View style={[styles.bottomContainer, styles.bgMateDarkBlack]}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.profileHeader}>
            <Text style={[styles.heading, styles.textWhite]}>
              Account Settings
            </Text>
            <Image
              style={styles.profileImage}
              source={require("../assets/profileImage.png")}
              resizeMode="center"
            />
            <Text
              style={[
                styles.heading,
                styles.textWhite,
                styles.textNormal,
                styles.mb17,
              ]}
            >
              Bhautik Pethani
            </Text>
            <View style={styles.iconProfileTextInput}>
              <Ionicons name="person" size={24} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                // value={email}
                // onChangeText={setEmail}
                placeholderTextColor={"grey"}
                placeholder="First name"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <Ionicons name="person" size={24} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                // value={email}
                // onChangeText={setEmail}
                placeholderTextColor={"grey"}
                placeholder="Last name"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="mail-outline" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                // value={email}
                // onChangeText={setEmail}
                placeholderTextColor={"grey"}
                placeholder="Email"
                value="bhautikpethani42@gmail.com"
                editable={false}
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="phone" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                // value={email}
                // onChangeText={setEmail}
                placeholderTextColor={"grey"}
                placeholder="Contact number"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <Ionicons name="location" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                // value={email}
                // onChangeText={setEmail}
                placeholderTextColor={"grey"}
                placeholder="Address"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={
                () => handleSignIn()
                // navigation.navigate("Step 2", { firstName, lastName, email })
              }
            >
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
      <View style={[styles.bottomNavigationContainer, styles.bgMateDarkBlack]}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Change Password");
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
              navigation.replace("Change Location");
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
