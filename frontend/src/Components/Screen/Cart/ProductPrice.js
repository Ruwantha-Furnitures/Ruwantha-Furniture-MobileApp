import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";

const ProductPrice = () => {
  return (
    <View style={styles.priceContainer}>
      <Card width={455} height={245} pd={7} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Selected Items</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Molteni Outlined Chair</Text>
            <Text style={styles.productPrice}>Rs.1500 /=</Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Molteni Outlined Chair</Text>
            <Text style={styles.productPrice}>Rs.1500 /=</Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Total Price</Text>
            <Text style={styles.productPrice}>Rs.3000 /=</Text>
          </View>
          <View style={styles.checkoutButton}>
            <AppButton title="Checkout" size="lg" />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    marginTop: 10,
  },
  subHeader: {
    letterSpacing: 3,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 27,
    marginLeft: 120,
    fontWeight: "bold",
    width: 250,
    color: "#FFF",
    marginBottom: 20,
  },
  productDetail: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
  },
  productPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    marginLeft: 45,
    fontSize: 16,
  },
  checkoutButton: {
    marginTop: 10,
    marginLeft: 260,
  },
});

export default ProductPrice;
