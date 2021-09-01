import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderMoreDetails from "../../Components/Screen/DeliveryDriver/OrderMoreDetails";
import PurchasedProductTable from "../../Components/Screen/DeliveryDriver/PurchasedProductTable";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const OrderDetailsScreen = ({ route }) => {
  
  const { order } = route.params;
  const [moreDetails, setMoreDetails] = useState(null);
  const [productContainer, setProductContainer] = useState([]);
  console.log(order.order_id);

  
  const fetchOrderDetails = async () => {
    try {
      const {
        order_id,
        customerName,
        shipping_address,
        contact_number,
        total_product_amount,
        purchasedDate,
        complete_status,
      } = order;
      setMoreDetails({
        order_id,
        customerName,
        shipping_address,
        contact_number,
        total_product_amount,
        purchasedDate,
        complete_status,
      });
      const response = await axios.get(
        `${API_URL}deliveryDriver/orders/moreDetails/${order_id}`
      );
      if (response.status === 200) {
        setProductContainer(response.data.productContainer);
        console.log("done");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const changeStatusHandler = async (order_id) => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      console.log(order_id);
      const response = await axios.put(
        `${API_URL}deliveryDriver/orders/changeStatus/${order_id}/${driverID}`
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  //commit 5 line 74-88 -order retreival added
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        {productContainer.length > 0 && (
          <OrderMoreDetails
            order={moreDetails}
            productContainer={productContainer}
            changeStatus={changeStatusHandler}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default OrderDetailsScreen;

