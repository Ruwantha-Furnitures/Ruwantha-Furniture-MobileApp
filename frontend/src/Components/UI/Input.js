import React from "react";
import { TextInput, StyleSheet } from "react-native";
const Input = ({
  onChangeText,
  placeholder,
  type,
  name,
  backgroundColor,
  height,
  value,
}) => {
  const cusStyles = {
    backgroundColor,
    height,
  };
  return (
    <TextInput
      value={value}
      secureTextEntry={type === "password" ? true : false}
      style={name === "textarea" ? [styles.textArea, cusStyles] : styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  textArea: {
    height: 110,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
  },
});
export default Input;
