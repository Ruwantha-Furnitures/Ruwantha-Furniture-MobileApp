import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Input from "../../UI/Input";

const mobileWidth = Dimensions.get("window").width;

const UserDetails = () => {
  return (
    <View>
      <SubHeader title="Personal Information" width={mobileWidth / 1.3} />
      <Input placeholder="Enter Your First Name" />
      <Input placeholder="Enter Your Last Name" />
      <Input placeholder="Enter Your Telephone Number" />
      <SubHeader title="Shipping Details" width={mobileWidth / 1.3} />
      <Input placeholder="Enter Your Address" name="textarea" />
      <Input placeholder="Enter Your City" />
      <Input placeholder="Enter Your Postal Code" />
    </View>
  );
};

export default UserDetails;
