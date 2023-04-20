import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { styles } from "../design-assets/styles";
import * as helper from "../services/helper";
import * as location from "../services/location";

const SignUpScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  if (latitude == "" || longitude == "") {
    helper.getAsync("coords").then((coords) => {
      // console.log(coords);
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
      location
        .fetchAddress(coords.latitude, coords.longitude)
        .then((address) => {
          console.log(address);
          setAddress(address);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  // helper.getAsync("currentUser").then((data) => {
  //   console.log(data.email);
  // });

  const handleSignUp = async () => {
    if (firstName != "" && lastName != "") {
      if (password != "" && password == confirmPassword) {
        if (password.length >= 6) {
          if (helper.validateEmail(email)) {
            // var userName = helper.generateUsername(email);
            fetch(helper.networkURL + "userSignUp", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                password: password,
                confirmPassword: confirmPassword,
                address: address,
                latitude: latitude,
                longitude: longitude,
              }),
            })
              .then((res) => res.json())
              .then((response) => {
                helper.alertBox(response);
              })
              .catch((err) => {
                helper.alertBox({
                  label: "Opps !",
                  message: "Something went wrong",
                });
              });
          } else {
            helper.alertBox({ label: "Opps !", message: "Invalid Email" });
          }
        } else {
          helper.alertBox({
            label: "Opps !",
            message: "Password must contain at least 6 character",
          });
        }
      } else {
        helper.alertBox({
          label: "Opps !",
          message: "Confirm Password must be same as password",
        });
      }
    } else {
      helper.alertBox({
        label: "Opps !",
        message: "Firstname and Lastname are mandatory !!",
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.preLoginContainer}>
        <Text style={styles.heading}>Getting started</Text>
        <Text style={styles.subHeading}>Create account to continue!</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.textInput, styles.inputFlex1]}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Firstname"
          />
          <TextInput
            style={[styles.textInput, styles.inputFlex1]}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Lastname"
          />
        </View>
        <View style={styles.iconTextInput}>
          <MaterialIcons name="mail-outline" size={26} color="black" />
          <TextInput
            style={styles.iconInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
        <View style={styles.iconTextInput}>
          <MaterialIcons name="call" size={26} color="black" />
          <TextInput
            style={styles.iconInput}
            value={mobile}
            onChangeText={setMobile}
            placeholder="Mobile number"
          />
        </View>
        <View style={styles.iconTextInput}>
          <MaterialIcons name="lock-outline" size={26} color="black" />
          <TextInput
            style={styles.iconInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.iconTextInput}>
          <MaterialIcons name="lock-outline" size={26} color="black" />
          <TextInput
            style={styles.iconInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
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
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={
            () => handleSignUp()
            // navigation.navigate("Step 2", { firstName, lastName, email })
          }
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.link}>
            Already have account? <Text style={styles.linkSpan}>SIGN IN</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
