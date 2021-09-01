import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Product from "./Product";

const Products = ({ products, addToCart, removeCartProduct }) => {
  useEffect(() => {
    console.log("Inside cart products");
    console.log(products);
  }, [products]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.productContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product item={item} removeCartProduct={removeCartProduct} />
          )}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    marginTop: 50,
  },
});

export default Products;
