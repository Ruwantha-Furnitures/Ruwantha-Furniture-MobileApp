import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = (props) => {
  const { width, height, ml, pd, bg, fd } = props;
  const dimensions = {
    width,
    height,
    marginLeft: ml,
    padding: pd,
    backgroundColor: bg,
    flexDirection: fd,
  };
  return <View style={[styles.card, dimensions]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 415,
    height: 280,
    elevation: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  // md_card: {
  //   width: 170,
  //   height: 120,
  //   backgroundColor: "#FFF",
  //   elevation: 10,
  //   marginLeft: 25,
  //   borderRadius: 10,
  //   flexDirection: "row",
  //   marginVertical: 20,
  //   padding: 7,
  // },
});
export default Card;
