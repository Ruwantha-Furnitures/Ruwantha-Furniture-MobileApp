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
    backgroundColor: "#E7E5E9",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  signUpForm: {
    width: 415,
    height: 620,
    backgroundColor: "#E7E5E9",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
});
export default Form;
