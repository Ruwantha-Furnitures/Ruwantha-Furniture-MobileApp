import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const ProductScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>This is the Product Page</Text>
      <Button
        title="Go To The Home Page"
        onPress={() => {
          navigate("Login");
        }}
      />
    </View>
  );
};

export default ProductScreen;
