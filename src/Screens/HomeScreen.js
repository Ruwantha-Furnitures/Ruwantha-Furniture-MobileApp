import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../Components/Header/Header";
import Card from "../Components/UI/Card";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <Card />
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
