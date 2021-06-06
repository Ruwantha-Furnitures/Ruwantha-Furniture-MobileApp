import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../Components/Header/Header";
import Intro from "../Components/Screen/Home/Intro";
import NewArrival from "../Components/Screen/Home/NewArrival";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.LoginHeader}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.Login}>Log In</Text>
      </TouchableOpacity>
      <Header />
      <Intro />
      <NewArrival />
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

export default HomeScreen;
