import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TermsConditionsModal = () => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>I agree to the terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 280,
    paddingVertical: 7.5,
    paddingHorizontal: 10,
  },
  text: {
    color: "blue",
  },
});

export default TermsConditionsModal;
