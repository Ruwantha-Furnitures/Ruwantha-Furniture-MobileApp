//PendingOrdersTable.js file
//Path:frontend/Components/DeliveryDriver/PendingOrdersTable.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const PendingOrdersTable = ({ pendingOrders }) => {
  
  return (
    <React.Fragment>
      <Text style={styles.header}>Pending Orders</Text>
      <View
        style={{
          minHeight: 200,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 15,
        }}
      >
        <Grid>
          <Col size={15}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Order ID
              </Text>
            </Row>
            {pendingOrders.map((order, index) => (
              <Row style={styles.cell} key={index}>
                <Text>{`OD${order.order_id}`}</Text>
              </Row>
            ))}
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Customer Name
              </Text>
            </Row>
            {pendingOrders.map((order, index) => (
              <Row style={styles.cell} key={index}>
                <Text>{order.name}</Text>
              </Row>
            ))}
          </Col>
          <Col size={30}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Shipping Address
              </Text>
            </Row>
            {pendingOrders.map((order, index) => (
              <Row style={styles.cellAddress} key={index}>
                <Text>{order.shipping_address}</Text>
              </Row>
            ))}
          </Col>
          <Col size={20}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Delivery Due Date
              </Text>
            </Row>
            {pendingOrders.map((order, index) => (
              <Row style={styles.cell} key={index}>
                <Text>
                  {parseInt(order.createdAt.split("T")[0].split("-")[0])}-
                  {parseInt(order.createdAt.split("T")[0].split("-")[1]) + 1}-
                  {parseInt(order.createdAt.split("T")[0].split("-")[2]) - 29}
                </Text>
              </Row>
            ))}
          </Col>
        </Grid>
      </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 5,
    minHeight: 50,
  },
  cellAddress: {
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 0,
    minHeight: 50,
  },
  header: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 1,
    width: 200,
  },
});
export default PendingOrdersTable;