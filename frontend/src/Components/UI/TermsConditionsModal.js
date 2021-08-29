import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TermsConditionsModal = () => {
  return (
    <View style={styles.modal}>
      <Text>
        By Checking this you will be agreeing to our Terms & Conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 280,
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TermsConditionsModal;
