//This is the landing page
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const HomeScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>This is the Home Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default HomeScreen;
