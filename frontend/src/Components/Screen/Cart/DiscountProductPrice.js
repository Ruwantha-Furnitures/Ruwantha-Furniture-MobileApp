import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { CartContext } from "../../Reducers/cartReducer";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const DiscountProductPrice = ({
  navigation,
  firstName,
  lastName,
  address,
  district,
  telephoneNumber,
}) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const cartContext = useContext(CartContext);

  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <Card width={mobileWidth - 20} pd={9} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Your Order</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Total Purchase</Text>
            <Text style={styles.productName}>
              Rs.
              {cartContext.cartDetails.totalAmount +
                cartContext.cartDetails.totalDiscountAmount}
              .00/=
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.amountDiscount}>After Discount</Text>
            <Text style={styles.amountDiscount}>
              Rs.
              {cartContext.cartDetails.totalAmount +
                cartContext.cartDetails.deliveryCharges -
                cartContext.cartDetails.totalDiscountAmount}
              .00 /=
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.amountDiscount}>Delivery Charge</Text>
            <Text style={styles.amountDiscount}>
              Rs.
              {cartContext.cartDetails.totalAmount -
                cartContext.cartDetails.totalDiscountAmount}
              .00 /=
            </Text>
          </View>
          <View style={styles.checkoutButton}>
            <AppButton
              title="Proceed To Payment"
              size="lg"
              width={220}
              onPress={() =>
                navigation.navigate("StripeApp", {
                  userDetails: {
                    firstName,
                    lastName,
                    address,
                    telephoneNumber,
                    district,
                  },
                })
              }
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 200,
  },
  amountDiscount: {
    color: "#fff",
    fontSize: 18,
    width: 200,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    marginLeft: 45,
    fontSize: 16,
  },
  checkoutButton: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    marginRight: 50,
  },
});

export default DiscountProductPrice;
