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
  // const [productsDetail, sellProductDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [dataLoaded, setDataLoaded] = useState(false);

  const fetchCartItems = async () => {
    try {
      const customerId = await SecureStore.getItemAsync("customer_id");
      const customer_id = parseInt(customerId);
      const response = await axios.get(`${API_URL}cart/${customer_id}`);
      // console.log("response");
      console.log(response.data.cartItems);
      setCartItems(response.data.cartItems);
      // console.log("array");
      // console.log(cartItems);
      // fetchProductPriceItems();
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchProductPriceItems = async () => {
  //   console.log("fetching products");
  //   console.log(cartItems);
  //   setIsLoading(true);
  //   setDataLoaded(false);
  //   for (let i = 0; i < cartItems.length; i++) {
  //     let id = cartItems[i].product_id;
  //     let quantity = cartItems[i].quantity;
  //     let response = await axios.get(`${API_URL}cart/getProduct/${id}`);
  //     const { name, price } = response.data.product;
  //     const productPrice = price * quantity;
  //     console.log(productPrice);
  //     const data = { id, name, productPrice };
  //     const result = productsDetail.some((product) => product.id === id);
  //     console.log(productsDetail);
  //     console.log(result, i);
  //     if (result) {
  //       let ids = productsDetail.map((o) => o.id);
  //       let filtered = productsDetail.filter(
  //         ({ id }, index) => !ids.includes(id, index + 1)
  //       );
  //       console.log("filtered products");
  //       // sellProductDetails((prevState) => [...prevState, data]);
  //       sellProductDetails(filtered);
  //       setIsLoading(false);
  //       setDataLoaded(true);

  //       console.log(filtered);
  //     }
  //     if (!result && i >= 0) {
  //       console.log("result: " + JSON.stringify(result));
  //       sellProductDetails((prevState) => [...prevState, data]);
  //       setIsLoading(false);
  //       setDataLoaded(true);
  //       console.log(productsDetail);
  //     }
  //   }
  // };

  useEffect(() => {
    console.log("Pagere renders");
    fetchCartItems();
  }, [route, setCartItems]);

  // useEffect(() => {
  //   fetchProductPriceItems();
  // }, [setDataLoaded]);
  const removeCartProduct = async (product) => {
    console.log("Product has removed from cart");
    // console.log(product);
    const { id } = product;
    try {
      const deleteProduct = await axios.delete(
        `${API_URL}cart/deleteCartProduct/${id}`
      );
      if (deleteProduct.data.state === "deleted") {
        const newCartArr = cartItems.filter((product) => product.id === id);
        setCartItems(newCartArr);
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
        {cartItems.length > 0 && (
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
    minHeight: 1000,
  },
});

export default CartScreen;
