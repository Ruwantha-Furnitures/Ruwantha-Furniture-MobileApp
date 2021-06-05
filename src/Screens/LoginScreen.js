import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header/Header";
import Card from "../Components/UI/Card";
import LoginForm from "../Components/Screen/Home/LoginForm";
const LoginScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default LoginScreen;
