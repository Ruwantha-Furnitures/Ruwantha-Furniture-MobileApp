import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>This is the Home Page</Text>
      <Button
        title="Go To The Login Page"
        onPress={() => {
          navigate("Products");
        }}
      />
    </View>
  );
};

export default HomeScreen;
