import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../Components/Header/Header";
import ForgotPasswordForm from "../../Components/Screen/Home/ForgotPasswordForm";
const ForgotPasswordScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <ForgotPasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
});

export default ForgotPasswordScreen;
