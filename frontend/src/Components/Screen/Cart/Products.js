import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Product from "./Product";

const Products = ({ products, addToCart }) => {
  return (
    <View style={styles.productContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 50,
  },
});

export default Products;
