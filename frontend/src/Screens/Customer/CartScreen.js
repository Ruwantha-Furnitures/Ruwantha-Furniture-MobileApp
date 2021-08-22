import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Screen/Cart/Products";
import ProductPrice from "../../Components/Screen/Cart/ProductPrice";
import { CartContext } from "../../Components/Reducers/cartReducer";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const customerId = await SecureStore.getItemAsync("customer_id");
      const customer_id = parseInt(customerId);
      const response = await axios.get(`${API_URL}cart/${customer_id}`);
      setCartItems([...cartItems, response.data]);
      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("Pagere renders");
    fetchCartItems();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <Header />
        {cartItems.length > 0 ? (
          <Products products={cartItems} />
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
