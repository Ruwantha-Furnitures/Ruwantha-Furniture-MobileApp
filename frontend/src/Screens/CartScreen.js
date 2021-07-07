import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header/Header";
import Products from "../Components/Screen/Cart/Products";
import ProductPrice from "../Components/Screen/Cart/ProductPrice";

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <Products />
      <ProductPrice navigation={navigation} />
    </View>
  );
};


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    minHeight: 1000,
  },
});

export default CartScreen;
