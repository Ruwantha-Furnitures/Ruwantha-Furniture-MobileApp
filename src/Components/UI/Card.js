import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = (props) => {
  return (
    <View style={props.size === "lg" ? styles.lg_card : styles.md_card}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  lg_card: {
    width: 415,
    height: 280,
    backgroundColor: "#E7E5E9",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 20,
  },
  md_card: {
    width: 170,
    height: 120,
    backgroundColor: "#FFF",
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 20,
    padding: 7,
  },
});
export default Card;
