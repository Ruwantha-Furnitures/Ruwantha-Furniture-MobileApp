import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import Card from "../../UI/Card";
import UserDetails from "./UserDetails";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;
const StatusBarHeight = StatusBar.currentHeight;

const CheckOutForm = () => {
  return (
    <Card
      width={mobileWidth - 40}
      height={mobileHeight / 1.1}
      ml={20}
      bg="#fff"
    >
      <UserDetails />
    </Card>
  );
};

export default CheckOutForm;
