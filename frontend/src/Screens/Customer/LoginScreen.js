import React, { useState, useEffect, useContext } from "react";
import { API_URL } from "react-native-dotenv";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "../../Components/Header/Header";
import Card from "../../Components/UI/Card";
import LoginForm from "../../Components/Screen/Home/LoginForm";
import ErrorModal from "../../Components/UI/ErrorModal";
import { AuthContext } from "../../Components/Context/AuthContext";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userToken, setUserToken } = useContext(AuthContext);

  useEffect(() => {
    let timer = setTimeout(() => setErrorMessage(""), 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorMessage]);

  const loginHandler = async (data) => {
    try {
      setIsLoading(true);
      console.log(API_URL)
      let response = await axios.post(
        `${API_URL}customer/login`,
        {
          data,
        }
      );
      if (response.data.auth) {
        setIsLoading(false);
        setErrorMessage("");
        await SecureStore.setItemAsync("user_token", response.data.accessToken);
        const getToken = await SecureStore.getItemAsync("user_token");
        await SecureStore.setItemAsync("user_email", response.data.userEmail);
        const getEmail = await SecureStore.getItemAsync("user_email");
        await SecureStore.setItemAsync(
          "user_accountID",
          JSON.stringify(response.data.accountId)
        );
        const getAccID = await SecureStore.getItemAsync("user_accountID");
        setUserToken(getToken);
        console.log(getAccID);
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

  // console.log(userToken)

  return (
    <View style={styles.viewContainer}>
      {errorMessage.length > 0 && <ErrorModal errorMessage={errorMessage} />}
      <View style={{ alignSelf: "flex-end", marginTop: 15, marginRight: 10 }}>
        <TouchableOpacity
          style={styles.LoginHeader}
          style={styles.buttonLg}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.Login}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  upperContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 25,
    marginRight: 10,
  },
  buttonLg: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingRight: 13,
    paddingLeft: 20,
    paddingVertical: 12,
    marginTop: 3,
    justifyContent: "center",
  },
  Login: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
    width: 75,
  },
});

export default LoginScreen;
