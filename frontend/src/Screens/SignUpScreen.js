import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import SignUpForm from "../Components/Screen/Home/SignUpForm";
import ErrorModal from "../Components/UI/ErrorModal";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setErrorMessage(""), 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorMessage]);

  const signUpHandler = async (data) => {
    try {
      setIsLoading(true);
      let response = await axios.post(
        "http://192.168.8.193:3002/armagic/api/customer/signup",
        {
          data,
        }
      );
      if (response.data.state === "Successful") {
        navigation.navigate("Home");
      } else {
        setErrorMessage(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.viewContainer}>
      {errorMessage.length > 0 && <ErrorModal errorMessage={errorMessage} />}
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
