import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import AppButton from "../../UI/AppButton";
import StatusPopup from "./StatusPopup";

const mobileWidth = Dimensions.get("window").width;

const Order = ({ order, navigation, changeStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const cardWidth = mobileWidth - 40;
  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Card width={cardWidth} height={420} ml={20} bg="#fff">
      <View style={styles.nameInitial}>
        <Text style={styles.label}>Customer Name</Text>
        <Text style={styles.nameInput}>{order.customerName}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Customer Address</Text>
        <Text style={styles.nameAddress} multiline={true}>
          {order.shipping_address}
        </Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Contact Number</Text>
        <Text style={styles.nameInput}>{order.contact_number}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Order Status</Text>
        {order.complete_status === 1 ? (
          <Text style={styles.delivered}>Delivered</Text>
        ) : (
          <Text style={styles.notDelivered}>Not Delivered </Text>
        )}
      </View>
      {order.complete_status === 0 ? (
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
        <View style={{ alignSelf: "flex-end", marginRight: 35, marginTop: 20 }}>
          <AppButton
            width={160}
            size="lg"
            title="More Details"
            onPress={() => navigation.navigate("OrderDetails", { order })}
          />
        </View>
      )}
      <StatusPopup
        showModal={showModal}
        order_id={order.order_id}
        deleteHandler={deleteHandler}
        changeStatus={changeStatus}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  nameInitial: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  name: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    paddingVertical: 10,
    fontWeight: "bold",
    width: 100,
  },
  nameInput: {
    backgroundColor: "#E7E5E9",
    borderRadius: 30,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 15,
    fontSize: 14,
    color: "grey",
    minWidth: mobileWidth / 2.1,
    marginLeft: 20,
  },
  nameAddress: {
    backgroundColor: "#E7E5E9",
    borderRadius: 30,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 15,
    fontSize: 13,
    color: "grey",
    minWidth: 20,
    marginLeft: 20,
  },
  delivered: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    letterSpacing: 2,
    paddingVertical: 10,
    fontSize: 15,
    marginLeft: 20,
    minWidth: mobileWidth / 2.1,
    borderColor: "green",
    borderWidth: 2,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000",
  },
  notDelivered: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    letterSpacing: 2,
    paddingVertical: 10,
    fontSize: 18,
    marginLeft: 20,
    minWidth: mobileWidth / 2.1,
    borderColor: "red",
    borderWidth: 2,
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default Order;