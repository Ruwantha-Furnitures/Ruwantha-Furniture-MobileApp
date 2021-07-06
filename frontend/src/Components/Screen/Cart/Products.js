import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Product from "./Product";

const Products = () => {
  const data = [
    {
      id: 1,
      url: require("../../../../assets/Molteni-Outline-Chair-3D-Model.jpeg"),
      name: "Monay Chair",
      price: "Rs.500",
    },
    {
      id: 2,
      url: require("../../../../assets/newImg.jpg"),
      name: "Molteni Chair",
      price: "Rs.1000",
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
