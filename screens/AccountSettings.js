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

const AccountSettings = ({ route, navigation }) => {
  const { coords, user } = route.params;
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [contactNo, setContactNo] = useState(user.mobile);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      const source = { uri: result.assets[0].uri };
      console.log("Source is:", source);
      setImage(source);
    }
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
      <View style={[styles.bottomContainer, styles.bgMateDarkBlack]}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.profileHeader}>
            <Text style={[styles.heading, styles.textWhite]}>
              Account Settings
            </Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.profileImage}
                source={
                  image == "" || image == null
                    ? require("../assets/profileImage.png")
                    : { uri: image.uri }
                }
                resizeMode="center"
              />
              <TouchableOpacity
                style={styles.floatingButton}
                onPress={pickImage}
              >
                <Entypo name="camera" size={14} color="white" />
              </TouchableOpacity>
            </View>
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
                value={firstName}
                onChangeText={setFirstName}
                placeholderTextColor={"grey"}
                placeholder="First name"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <Ionicons name="person" size={24} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
                value={lastName}
                onChangeText={setLastName}
                placeholderTextColor={"grey"}
                placeholder="Last name"
              />
            </View>
            <View style={styles.iconProfileTextInput}>
              <MaterialIcons name="mail-outline" size={26} color="white" />
              <TextInput
                style={[styles.iconInput, styles.textWhite]}
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
                value={contactNo}
                onChangeText={setContactNo}
                placeholderTextColor={"grey"}
                placeholder="Contact number"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={
                () => {}
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
