import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Form = (props) => {
  const { width, height } = props;
  const dimension = {
    width,
    height,
  };
  return <View style={[styles.form, dimension]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    elevation: 20,
    marginLeft: 20,
    borderRadius: 25,
    marginVertical: 20,
  },
  signUpForm: {
    width: 415,
    height: 620,
    backgroundColor: "#fff",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
});
export default Form;
