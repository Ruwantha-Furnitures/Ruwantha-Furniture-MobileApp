import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ErrorModal = ({ errorMessage }) => {
  return (
    <View style={styles.errorModal}>
      <AntDesign name="exclamationcircle" size={24} color="white" />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorModal: {
    backgroundColor: "#F00",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
  },
  errorMessage: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
export default ErrorModal;
