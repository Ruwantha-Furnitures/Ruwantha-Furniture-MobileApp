import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "../Components/Header/Header";
import Card from "../Components/UI/Card";
import LoginForm from "../Components/Screen/Home/LoginForm";
import ErrorModal from "../Components/UI/ErrorModal";
import { AuthContext } from "../Components/Context/AuthContext";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userToken = useContext(AuthContext);

  useEffect(() => {
    let timer = setTimeout(() => setErrorMessage(""), 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorMessage]);

  const loginHandler = async (data) => {
    try {
      setIsLoading(true);
      let response = await axios.post(
        "http://192.168.8.193:3002/armagic/api/customer/login",
        {
          data,
        }
      );
      if (response.data.auth) {
        setIsLoading(false);
        setErrorMessage("");
        await SecureStore.setItemAsync("user_token", response.data.accessToken);
        const getToken = await SecureStore.getItemAsync("user_token");
        console.log(getToken);
        navigation.navigate("Home");
      } else {
        setIsLoading(false);
        let errorMessage = response.data.errorMessage;
        setErrorMessage(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(userToken);
  return (
    <View style={styles.viewContainer}>
      {errorMessage.length > 0 && <ErrorModal errorMessage={errorMessage} />}
      <TouchableOpacity
        style={styles.SignUpHeader}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.SignUp}>Sign Up</Text>
      </TouchableOpacity>
      <Header />
      {isLoading && <ActivityIndicator size="large" color="green" />}
      <LoginForm navigation={navigation} loginHandler={loginHandler} />
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
