import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import SignUpForm from "../Components/Screen/Home/SignUpForm";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {

  const signUpHandler = async (data) => {
    try {
      let response=await axios.post("http://192.168.8.175:3000/api/customer/signup", {
        data,
      });
      console.log(response.data.state);
      if(response.data.state === "Successful"){
        navigation.navigate("Home")
      }else{
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.LoginHeader}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.Login}>Login</Text>
      </TouchableOpacity>
      <Header />
      <SignUpForm navigation={navigation} signUpHandler={signUpHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
  Login: {
    alignSelf: "flex-end",
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  LoginHeader: {
    marginTop: 10,
  },
});

export default SignUpScreen;
