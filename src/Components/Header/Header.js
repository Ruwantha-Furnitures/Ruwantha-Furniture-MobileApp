import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imageHeader}
      />
      <Text style={styles.title}>Ruwantha Furniture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginVertical: 25,
    marginHorizontal: 3,
    opacity: 0.9,
  },
  imageHeader: {
    width: 200,
    height: 130,
    marginLeft: 5,
    marginRight: -20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
    marginTop: 20,
  },
});

export default Header;
