import { StyleSheet } from "react-native";
import * as Colors from "../design-assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGreen,
    paddingTop: "20%",
  },
  tabContainer: {
    backgroundColor: Colors.blackColor,
    paddingHorizontal: 10,
    borderTopLeftRadius: 50,
    paddingTop: 30,
    flex: 1,
  },
  bottomNavigationContainer: {
    height: "12%",
    backgroundColor: Colors.blackColor,
    padding: 17,
    alignItems: "center",
  },
  topNavigationContainer: {
    height: "13%",
    backgroundColor: Colors.blackColor,
    padding: 15,
    paddingTop: "18%",
    alignItems: "center",
  },
  bgWhite: {
    backgroundColor: Colors.whiteColor,
  },
  bgGrey: {
    backgroundColor: Colors.greyColor,
  },
  bgBlack: {
    backgroundColor: Colors.blackColor,
  },
  preLoginContainer: {
    flex: 1,
    padding: 10,
    marginTop: "10%",
    borderTopLeftRadius: "50%",
    borderTopEndRadius: "50%",
    paddingTop: "15%",
    backgroundColor: Colors.whiteColor,
  },
  row: { flexDirection: "row" },
  heading: {
    fontSize: 26,
    color: Colors.blackColor,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
  },
  subHeading: {
    fontSize: 20,
    color: "grey",
    textAlign: "left",
    marginLeft: 10,
    marginTop: 7,
    marginBottom: 30,
  },
  tabHeading: {
    fontSize: 26,
    color: Colors.whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputFlex1: {
    flex: 1,
  },
  textInput: {
    backgroundColor: Colors.greyColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 50,
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  iconTextInput: {
    backgroundColor: Colors.greyColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 50,
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: "row",
  },
  iconInput: {
    flex: 1,
    marginLeft: 15,
    fontSize: 18,
  },
  datePicker: {
    width: "96%",
    backgroundColor: Colors.greyColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 50,
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  buttonBorder: {
    borderWidth: 2,
    borderColor: Colors.blackColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 50,
    fontSize: 20,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  dropdown: {
    height: 50,
    backgroundColor: Colors.greyColor,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButtonText: {
    color: "#0197f6",
    fontSize: 28,
    marginHorizontal: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: Colors.blackColor,
    textAlign: "right",
    marginHorizontal: 13,
    marginVertical: 10,
    fontSize: 15,
  },
  linkSpan: {
    fontWeight: "bold",
    color: Colors.yellow,
  },
  tabIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 25,
  },
  tabActiveIcon: {
    height: 35,
    width: 35,
    marginHorizontal: 20,
  },
  textBlack: {
    color: Colors.blackColor,
  },

  item: {
    backgroundColor: Colors.blackColor,
    padding: 20,
    flex: 1,
    marginVertical: 8,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.whiteColor,
  },
  bold: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: Colors.greyColor,
    paddingTop: 2,
  },
  flagIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  cardDetails: {
    margin: 5,
    marginLeft: 20,
    paddingRight: "auto",
  },
  rightArrow: {
    marginLeft: "auto",
  },
  delete: {
    backgroundColor: "#D10000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: 5,
  },
  deleteText: {
    fontWeight: "bold",
    color: "#fff",
  },
  topNavigationBarTitle: {
    marginLeft: 10,
    flex: 1,
  },
  floatingActionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.blackColor,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
    right: "40%",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
});