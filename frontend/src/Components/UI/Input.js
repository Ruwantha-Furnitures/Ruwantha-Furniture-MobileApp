import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;

const Input = ({
  onChangeText,
  placeholder,
  type,
  name,
  backgroundColor,
  height,
  value,
  editable,
}) => {
  const cusStyles = {
    backgroundColor,
    height,
  };

  return (
    <TextInput
      value={value}
      secureTextEntry={type === "password" ? true : false}
      style={name === "textarea" ? styles.textArea : styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      editable={editable}
      numberOfLines={name === "textarea" ? 6 : 1}
      multiline={name === "textarea" ? true : false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: mobileHeight > 900 ? 50 : 45,
    backgroundColor: "#E7E5E9",
    marginVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    letterSpacing: 1,
    paddingVertical: 10,
    fontSize: 18,
  },
  textArea: {
    backgroundColor: "#E7E5E9",
    marginVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 25,
    paddingTop: 20,
    fontSize: 18,
    textAlignVertical: "top",
  },
});
export default Input;
