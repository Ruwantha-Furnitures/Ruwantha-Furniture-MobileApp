import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ onChangeText, placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <FontAwesome name="search" size={24} style={styles.icon} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginRight: 40,
    marginTop: 20,
    marginLeft: 5,
  },
  textInput: {
    height: 50,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 20,
    flex: 1,
    paddingLeft: 50,
  },
  icon: {
    left: -280,
    top: 12,
    position: "relative",
  },
});
export default SearchBar;
