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

const ChangePassword = ({ route, navigation }) => {
  const { coords, user } = route.params;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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

  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={[styles.container, styles.bgDarkGreen]}>
      <View style={[styles.preLoginContainer, styles.bgMateDarkBlack]}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.profileHeader}>
            <Text style={[styles.heading, styles.textWhite, styles.mb30]}>
              Change Password
            </Text>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="lock-outline" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={oldPassword}
                onChangeText={setOldPassword}
                placeholderTextColor={"grey"}
                placeholder="Old Password"
                secureTextEntry={passwordVisible ? false : true}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible(!passwordVisible);
                }}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={26}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="lock-outline" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholderTextColor={"grey"}
                placeholder="New Password"
                secureTextEntry={passwordVisible ? false : true}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible(!passwordVisible);
                }}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={26}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="lock-outline" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                placeholderTextColor={"grey"}
                placeholder="Confirm New Password"
                secureTextEntry={passwordVisible ? false : true}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={
                () => {}
                // navigation.navigate("Step 2", { firstName, lastName, email })
              }
            >
              <Text style={styles.buttonText}>Change</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
      <View style={[styles.bottomNavigationContainer, styles.bgMateDarkBlack]}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              //   navigation.replace("Change Password");
            }}
          >
            <Ionicons
              style={styles.tabIcon}
              name="key-outline"
              size={27}
              color={Colors.lightGreen}
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

export default ChangePassword;
