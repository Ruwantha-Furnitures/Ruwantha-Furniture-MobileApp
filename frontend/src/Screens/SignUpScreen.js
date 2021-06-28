import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header/Header";
import SignUpForm from "../Components/Screen/Home/SignUpForm";
const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <SignUpForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default SignUpScreen;
