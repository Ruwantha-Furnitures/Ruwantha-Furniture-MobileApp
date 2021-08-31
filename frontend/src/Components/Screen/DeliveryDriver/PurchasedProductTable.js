//PurchasedProductTable.js
//Path:frontend/Components/DeliveryDriver/PurchasedProductTable.js

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Card from "../../UI/Card";

const PurchasedProductTable = () => {
  const mobileWidth = Dimensions.get("window").width;
  const cardWidth = mobileWidth - 40;
  return (
    <React.Fragment>
      <Text style={styles.subheader}>Purchased Product Details</Text>

      <Grid style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <Col size={25}>
          <Row style={styles.cell}>
            <Text
              style={{
                fontWeight: "bold",
                height: "100%",
              }}
            >
              Product Name
            </Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Serena Single Seater</Text>
          </Row>
        </Col>
        <Col size={15}>
          <Row style={styles.cell}>
            <Text
              style={{
                fontWeight: "bold",
                width: 80,
                alignSelf: "flex-start",
              }}
            >
              Quantity
            </Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1</Text>
          </Row>
        </Col>
        <Col size={26}>
          <Row style={styles.cell}>
            <Text
              style={{
                fontWeight: "bold",
                width: 80,
                alignSelf: "flex-start",
              }}
            >
              Amount
            </Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ marginLeft: 10 }}>Rs.72975.00/=</Text>
          </Row>
        </Col>
      </Grid>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
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
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
});
export default PurchasedProductTable;
