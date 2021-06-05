import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Form = (props) => {
  const { type } = props;
  return (
    <View style={type === "login" ? styles.loginForm : styles.signUpForm}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: 415,
    height: 380,
    backgroundColor: "#E7E5E9",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  signUpForm: {
    width: 415,
    height: 580,
    backgroundColor: "#E7E5E9",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
});
export default Form;
