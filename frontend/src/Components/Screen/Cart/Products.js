import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Product from "./Product";

const Products = () => {
  const data = [
    {
      id: 1,
      url: require("../../../../assets/Molteni-Outline-Chair-3D-Model.jpeg"),
      name: "Wooden Dining Chair",
      price: "Rs.6875",
    },
  ];

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
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
