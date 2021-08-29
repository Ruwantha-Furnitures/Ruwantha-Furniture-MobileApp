import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import PurchasedProduct from "./PurchasedProduct";
const MyPurchases = ({ customerOrders }) => {
  useEffect(() => {
    console.log("Customer Orders");
    console.log(customerOrders);
  }, []);
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={customerOrders}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item }) => <PurchasedProduct order={item} />}
      />
    </View>
  );
};

export default MyPurchases;
