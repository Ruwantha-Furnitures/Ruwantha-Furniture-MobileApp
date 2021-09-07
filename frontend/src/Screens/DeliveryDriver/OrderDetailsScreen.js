import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderMoreDetails from "../../Components/Screen/DeliveryDriver/OrderMoreDetails";
import { DashboardContext } from "../../Components/Reducers/dashboardReducer";
import PurchasedProductTable from "../../Components/Screen/DeliveryDriver/PurchasedProductTable";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "react-native-dotenv";

const OrderDetailsScreen = ({ route, navigation }) => {
  const { order } = route.params;
  const [moreDetails, setMoreDetails] = useState(null);
  const [productContainer, setProductContainer] = useState([]);
  const dashboardContext = useContext(DashboardContext);

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
      console.log("sss");
      console.log(order_id);
      const response = await axios.put(
        `${API_URL}deliveryDriver/orders/changeStatus/${order_id}/${driverID}`
      );
      if (response.status === 200) {
        dashboardContext.dispatchDashboard({
          type: "statusChanged",
        });
        navigation.navigate("ViewOrders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

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
