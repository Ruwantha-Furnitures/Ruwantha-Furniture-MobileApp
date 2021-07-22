import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { API_URL } from "react-native-dotenv";
import Header from "../../Components/Header/Header";
import SignUpForm from "../../Components/Screen/Home/SignUpForm";
import ErrorModal from "../../Components/UI/ErrorModal";
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
        `${API_URL}customer/signup`,
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
      <View style={{ alignSelf: "flex-end", marginTop: 15, marginRight: 10 }}>
        <TouchableOpacity
          style={styles.LoginHeader}
          style={styles.buttonLg}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>
      </View>
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
  LoginHeader: {
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
    paddingRight: 0,
    paddingLeft: 17,
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

export default SignUpScreen;
