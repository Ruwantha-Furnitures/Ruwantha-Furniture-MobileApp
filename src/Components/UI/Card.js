import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 415,
    height: 280,
    backgroundColor: "#fff",
    elevation: 8,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
});
export default Card;
