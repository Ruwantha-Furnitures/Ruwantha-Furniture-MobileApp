import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../Components/Header/Header";
import ForgotPasswordForm from "../../Components/Screen/Home/ForgotPasswordForm";
import ChangePasswordForm from "../../Components/Screen/Home/ChangePasswordForm";
const ForgotPasswordScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <ChangePasswordForm />
      {/* <ForgotPasswordForm /> */}
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
