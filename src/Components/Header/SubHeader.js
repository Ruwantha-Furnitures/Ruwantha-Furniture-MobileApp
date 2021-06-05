import React from "react";
import { Text, StyleSheet } from "react-native";
const SubHeader = ({ title }) => {
  return <Text style={styles.subHeader}>{title}</Text>;
};

const styles = StyleSheet.create({
  subHeader: {
    letterSpacing: 3,
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25,
    marginLeft: 50,
    fontWeight: "bold",
    alignSelf: "center",
    width: 200,
  },
});
export default SubHeader;
