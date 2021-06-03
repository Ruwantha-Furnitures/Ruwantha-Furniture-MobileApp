import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = () => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 280,
    backgroundColor: "#fff",
    elevation: 8,
    marginLeft: 20,
  },
});
export default Card;
