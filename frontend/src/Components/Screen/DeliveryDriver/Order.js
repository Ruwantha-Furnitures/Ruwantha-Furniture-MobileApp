//Order.js
//-----path:frontend/Components/Screens/DeliveryDriver/Order.js-------
import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import AppButton from "../../UI/AppButton";
import StatusPopup from "./StatusPopup";

const Order = ({ order, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const mobileWidth = Dimensions.get("window").width;
  const cardWidth = mobileWidth - 40;
  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <Card width={cardWidth} height={330} ml={20} bg="#fff">
      <View style={styles.name}>
        <Text style={styles.label}>Customer Name</Text>
        <Text style={styles.nameInput}>{order.customerName}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Customer Address</Text>
        <Text style={styles.nameInput}>{order.address}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Contact Number</Text>
        <Text style={styles.nameInput}>{order.telephoneNumber}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Order Status</Text>
        <Text
          style={
            order.status === "Delivered"
              ? styles.delivered
              : styles.notDelivered
          }
        >
          {order.status}
        </Text>
      </View>
      {order.status === "Not Delivered" ? (
        <View style={styles.btnContainer}>
          <AppButton
            width={160}
            size="lg"
            title="Change Status"
            onPress={deleteHandler}
          />
          <AppButton
            width={160}
            size="lg"
            title="More Details"
            onPress={() => navigation.navigate("OrderDetails", { order })}
          />
        </View>
      ) : (
        <View style={{ alignSelf: "flex-end", marginRight: 35, marginTop: 10 }}>
          <AppButton
            width={160}
            size="lg"
            title="More Details"
            onPress={() => navigation.navigate("OrderDetails", { order })}
          />
        </View>
      )}
      <StatusPopup showModal={showModal} deleteHandler={deleteHandler} />
    </Card>
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
    fontWeight: "bold",
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
    maxWidth: 240,
  },
  delivered: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 10,
    fontSize: 15,
    marginLeft: 25,
    maxWidth: 240,
    borderColor: "green",
    borderWidth: 2,
  },
  notDelivered: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 10,
    fontSize: 15,
    marginLeft: 25,
    maxWidth: 240,
    borderColor: "red",
    borderWidth: 2,
    color: "black",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});

export default Order;
