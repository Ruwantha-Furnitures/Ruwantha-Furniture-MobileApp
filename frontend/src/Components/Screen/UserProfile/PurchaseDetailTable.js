import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const PurchaseDetailTable = ({ item }) => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 15,
      }}
    >
      <Grid>
        <Col size={10}>
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
          <Row style={styles.cell}>
            <Text>{`OD0${item[0].orderID}`}</Text>
          </Row>
        </Col>
        <Col size={18}>
          <Row style={styles.cell}>
            <Text
              style={{
                fontWeight: "bold",
                height: "100%",
              }}
            >
              Item Price (After Discount)
            </Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Rs.{item[0].itemPrice}/=</Text>
          </Row>
        </Col>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text
              style={{
                fontWeight: "bold",
                height: "100%",
              }}
            >
              Purchased Date
            </Text>
          </Row>
          <Row style={styles.cell}>
            <Text>{item[0].purchasedDate.split("T")[0]}</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
});
export default PurchaseDetailTable;
