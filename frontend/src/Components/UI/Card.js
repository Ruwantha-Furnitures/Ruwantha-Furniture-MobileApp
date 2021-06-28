import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = (props) => {
  const { width, height, ml, pd, bg, fd, mh } = props;
  const dimensions = {
    width,
    height,
    marginLeft: ml,
    padding: pd,
    backgroundColor: bg,
    flexDirection: fd,
    maxHeight: mh,
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
});
export default Card;
