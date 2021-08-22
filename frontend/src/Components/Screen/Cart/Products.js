import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Product from "./Product";

const Products = ({ products, addToCart, removeCartProduct }) => {
  useEffect(() => {
    console.log("Inside cart products");
    console.log(products);
  }, [products]);
  return (
    <View style={styles.productContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product item={item} removeCartProduct={removeCartProduct} />
        )}
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
