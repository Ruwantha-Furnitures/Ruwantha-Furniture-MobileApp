import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../../assets/nlogo.png")}
        style={styles.imageHeader}
      />
      <Text style={styles.title}>AR Magic</Text>
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
    width: 90,
    height: 90,
    marginRight: 20,
    marginLeft: 10,
    backgroundColor: "#E7E5E9",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
    marginTop: 25,
    width: 300,
  },
});

export default Header;
