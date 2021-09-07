//PurchasedProductTable.js
//Path:frontend/Components/DeliveryDriver/PurchasedProductTable.js

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Card from "../../UI/Card";

const PurchasedProductTable = ({ productContainer }) => {
  const mobileWidth = Dimensions.get("window").width;
  const cardWidth = mobileWidth - 40;
  return (
    <React.Fragment>
      <Text style={styles.subheader}>Purchased Product Details</Text>
      <View>
        <Grid
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Col size={22}>
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
            {productContainer.map((product, index) => (
              <Row style={styles.cell} key={index}>
                <Text>{product.name}</Text>
              </Row>
            ))}
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
            {productContainer.map((product, index) => (
              <Row style={styles.cell} key={index}>
                <Text>{product.quantity}</Text>
              </Row>
            ))}
          </Col>
          <Col size={30}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  width: 80,
                  alignSelf: "flex-start",
                }}
              >
                Amount(After Discount)
              </Text>
            </Row>
            {productContainer.map((product, index) => (
              <Row style={styles.cell} key={index}>
                <Text>{product.itemPriceAfterDiscount}</Text>
              </Row>
            ))}
          </Col>
        </Grid>
      </View>
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
    minHeight: 60,
  },
});
export default PurchasedProductTable;
