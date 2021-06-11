import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import Info from "../Components/Screen/AboutUs/Info";
import Card from "../Components/UI/Card";
const AboutUsScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.LoginHeader}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.Login}>Log In</Text>
      </TouchableOpacity>
      <Header />
      <Info />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  Login: {
    alignSelf: "flex-end",
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  LoginHeader: {
    marginTop: 5,
  },
});

export default AboutUsScreen;
