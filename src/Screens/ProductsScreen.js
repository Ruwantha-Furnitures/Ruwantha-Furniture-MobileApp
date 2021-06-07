import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Searchbar from "../Components/UI/SearchBar";
import Header from "../Components/Header/Header";

const ProductScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.LoginHeader}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.Login}>Log In</Text>
      </TouchableOpacity>
      <Header />
      <Searchbar placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  Login: {
    alignSelf: "flex-end",
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  LoginHeader: {
    marginTop: 5,
  },
});

export default ProductScreen;
