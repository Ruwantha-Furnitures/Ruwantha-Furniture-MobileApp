import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../../assets/logo.jpeg")}
        style={styles.imageHeader}
      />
      <Text style={styles.title}>Ruwantha Furniture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginVertical: 12,
    marginHorizontal: 3,
    opacity: 0.9,
    marginLeft: 50,
  },
  imageHeader: {
    width: 80,
    height: 80,
    marginTop: 15,
    marginRight: 20,
    marginLeft: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
    marginTop: 10,
    height: 100,
  },
});

export default Header;
