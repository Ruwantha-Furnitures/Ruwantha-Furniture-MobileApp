import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

const fontScale = Dimensions.get("window").fontScale;
const FormAppButton = ({ onPress, title, width, type, disabled }) => {
  const dimensions = {
    width,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === "Submit"
          ? [styles.buttonSubmit, dimensions]
          : [styles.buttonCancel, dimensions]
      }
      disabled={disabled}
    >
      <Text style={styles.textLg}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSubmit: {
    elevation: 8,
    backgroundColor: "#00bd37",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 25,
  },
  buttonCancel: {
    elevation: 8,
    backgroundColor: "#F00",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  textLg: {
    fontSize: 14 / fontScale,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 20,
    letterSpacing: 0.5,
  },
});
export default FormAppButton;
