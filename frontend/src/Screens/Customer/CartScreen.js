import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Screen/Cart/Products";
import { useFocusEffect } from "@react-navigation/native";
import ProductPrice from "../../Components/Screen/Cart/ProductPrice";
import { CartContext } from "../../Components/Reducers/cartReducer";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";

const CartScreen = ({ navigation, route }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const customerId = await SecureStore.getItemAsync("customer_id");
      const customer_id = parseInt(customerId);
      const response = await axios.get(`${API_URL}cart/${customer_id}`);
      console.log("response");
      console.log(response.data.cartItems);
      setCartItems(response.data.cartItems);
      console.log("array");
      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("Pagere renders");
    fetchCartItems();
  }, [route, setCartItems]);

  const removeCartProduct = async (product) => {
    console.log("Product has removed from cart");
    // console.log(product);
    const { id } = product;
    try {
      const deleteProduct = await axios.delete(
        `${API_URL}cart/deleteCartProduct/${id}`
      );
      if (deleteProduct.data.state === "deleted") {
        console.log("deleted");
        const newCartArr = cartItems.filter((product) => product.id === id);
        setCartItems(newCartArr);
        console.log(newCartArr);
        console.log(cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("React new effect");
  //   }, [])
  // );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <Header />
        {cartItems.length > 0 ? (
          <Products
            products={cartItems}
            removeCartProduct={removeCartProduct}
          />
        ) : (
          <Text>No Items has been added to the cart</Text>
        )}
        {/* <ProductPrice navigation={navigation} /> */}
      </View>
    </ScrollView>
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
