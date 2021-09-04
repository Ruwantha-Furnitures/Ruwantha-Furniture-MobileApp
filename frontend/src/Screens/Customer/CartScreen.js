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
  const cartContext = useContext(CartContext);

  //fetching the products in the cart currently
  const fetchCartItems = async () => {
    try {
      const customerId = await SecureStore.getItemAsync("customer_id");
      const customer_id = parseInt(customerId);
      console.log(customer_id);
      const response = await axios.get(`${API_URL}cart/${customer_id}`);
      // console.log("response");
      console.log(response.data.cartItems);
      let numberOfItems = 0;
      for (let i = 0; i < response.data.cartItems.length; i++) {
        numberOfItems += response.data.cartItems[i].quantity;
      }
      await SecureStore.setItemAsync(
        "numberOfProducts",
        JSON.stringify(numberOfItems)
      );
      console.log(await SecureStore.getItemAsync("numberOfProducts"));
      setCartItems(response.data.cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Pagere renders");
    fetchCartItems();
  }, [route, setCartItems]);

  //deleting the particular product
  const removeCartProduct = async (product) => {
    console.log("Product has removed from cart");
    console.log(product);
    const { id } = product.item;
    const customerId = await SecureStore.getItemAsync("customer_id");
    const { quantity, discount, price } = product;
    let totalAmount = price * quantity;
    let discountAmount = (price * discount * quantity) / 100;
    console.log(discountAmount);
    cartContext.dispatchCart({
      type: "delete",
      payload: { id, quantity, discount: discountAmount, totalAmount },
    });
    try {
      const deleteProduct = await axios.delete(
        `${API_URL}cart/deleteCartProduct/${id}/${customerId}`
      );
      if (deleteProduct.data.state === "deleted") {
        const newCartArr = cartItems.filter((product) => product.id === id);
        setCartItems(newCartArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <Header />
        {cartContext.cartDetails.quantity > 0 ? (
          <Products
            products={cartItems}
            removeCartProduct={removeCartProduct}
          />
        ) : (
          <Text>No Items has been added to the cart</Text>
        )}
        {cartContext.cartDetails.quantity > 0 && (
          <ProductPrice navigation={navigation} cartItems={cartItems} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    minHeight: mobileHeight - 100,
  },
});

export default CartScreen;
