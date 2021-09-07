import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const { width, fontScale } = Dimensions.get("window");

const SubHeader = ({ title, width }) => {
  const dimensions = {
    width,
  };
  return <Text style={[styles.subHeader, dimensions]}>{title}</Text>;
};

const styles = StyleSheet.create({
  subHeader: {
    letterSpacing: 3,
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25 / fontScale,
    marginLeft: 50,
    fontWeight: "bold",
    alignSelf: "center",
    width: 250,
  },
});
export default SubHeader;
