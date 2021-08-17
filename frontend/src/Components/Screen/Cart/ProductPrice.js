import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";

const ProductPrice = ({ navigation }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  return (
    <View style={styles.priceContainer}>
      <Card width={mobileWidth} pd={7} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Selected Items</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Wooden Dining Chair</Text>
            <Text style={styles.productPrice}>Rs.6875 /=</Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Total Price</Text>
            <Text style={styles.productPrice}>Rs.6875 /=</Text>
          </View>
          <View style={styles.checkoutButton}>
            <AppButton
              title="Checkout"
              size="lg"
              width={130}
              onPress={() => navigation.navigate("CheckOut")}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    position: "absolute",
    bottom: 166,
  },
  subHeader: {
    letterSpacing: 3,
    marginTop: 10,
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
    marginLeft: 300,
  },
});

export default ProductPrice;
