import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Header from "../Components/Header/Header";
import Intro from "../Components/Screen/Home/Intro";
import NewArrival from "../Components/Screen/Home/NewArrival";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <Button
        title="Move to Login Page"
        onPress={() => {
          navigate("Login");
        }}
      />
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
});

export default HomeScreen;
