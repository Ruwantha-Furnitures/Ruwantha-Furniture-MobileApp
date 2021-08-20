import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Screen/Cart/Products";
import ProductPrice from "../../Components/Screen/Cart/ProductPrice";
import { CartContext } from "../../Components/Reducers/cartReducer";

const CartScreen = ({ navigation }) => {
  const cartContext = useContext(CartContext);
  useEffect(() => console.log(cartContext.cartDetails.items), []);
  return (
    <View style={styles.viewContainer}>
      <Text>{cartContext.cartDetails.items.length}</Text>
      <Header />
      <Products products={cartContext.cartDetails.items} />
      <ProductPrice navigation={navigation} />
    </View>
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
