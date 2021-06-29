import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import Card from "../Components/UI/Card";
import LoginForm from "../Components/Screen/Home/LoginForm";
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.SignUpHeader}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.SignUp}>Sign Up</Text>
      </TouchableOpacity>
      <Header />
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
  SignUp: {
    alignSelf: "flex-end",
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  SignUpHeader: {
    marginTop: 10,
  },
});

export default LoginScreen;
