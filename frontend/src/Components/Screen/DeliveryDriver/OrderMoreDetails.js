import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import PurchasedProductTable from "./PurchasedProductTable";
import StatusPopup from "./StatusPopup";

const mobileWidth = Dimensions.get("window").width;

const OrderMoreDetails = ({ order, productContainer, changeStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const cardWidth = mobileWidth - 20;
  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <View>
      <Text style={styles.header}>More Details On Order</Text>
      <Card width={cardWidth} pd={8} ml={0} bg="#fff">
        <Text style={styles.subheader}>User Details</Text>
        <View style={styles.name}>
          <Text style={styles.label}>Order ID</Text>
          <Text style={styles.nameInput}>{`OD00${order.order_id}`}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Customer Name</Text>
          <Text style={styles.nameInput}>{order.customerName}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Customer Address</Text>
          <Text style={styles.nameInput}>{order.shipping_address}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Contact Number</Text>
          <Text style={styles.nameInput}>{order.contact_number}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Purchased Date</Text>
          <Text style={styles.nameInput}>
            {order.purchasedDate.split("T")[0]}
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Due Date</Text>
          <Text style={styles.nameInput}>
            {order.purchasedDate.split("T")[0].split("-")[0]}-
            {order.purchasedDate.split("T")[0].split("-")[1]}-
            {parseInt(order.purchasedDate.split("T")[0].split("-")[2]) + 2}
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Total Amount</Text>
          <Text style={styles.nameInput}>{order.total_product_amount}</Text>
        </View>
        <PurchasedProductTable productContainer={productContainer} />
        {order.complete_status === 0 && (
          <React.Fragment>
            <View
              style={{
                alignSelf: "flex-end",
                marginRight: 35,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <AppButton
                width={160}
                size="lg"
                title="Change Status"
                onPress={deleteHandler}
              />
            </View>
            <StatusPopup
              showModal={showModal}
              changeStatus={changeStatus}
              deleteHandler={deleteHandler}
              order_id={order.order_id}
            />
          </React.Fragment>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    paddingVertical: 10,
    width: 120,
  },
  nameInput: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 10,
    fontSize: 15,
    marginLeft: 25,
    maxWidth: 215,
    minWidth: mobileWidth / 2,
  },
  header: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 25,
    marginTop: 20,
    letterSpacing: 0.9,
    width: 300,
    marginBottom: 20,
  },
  subheader: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 20,
    marginTop: 20,
    letterSpacing: 0.5,
    width: 300,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});
export default OrderMoreDetails;
