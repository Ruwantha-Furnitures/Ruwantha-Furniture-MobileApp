import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header/Header";
import CheckOutForm from "../Components/Screen/Cart/CheckOutForm";

const CheckOutScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <CheckOutForm />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    minHeight: 1000,
  },
});
export default CheckOutScreen;