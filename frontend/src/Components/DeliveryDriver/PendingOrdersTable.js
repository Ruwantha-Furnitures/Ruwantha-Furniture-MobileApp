//PendingOrdersTable.js file
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const PendingOrdersTable = () => {
  return (
    <React.Fragment>
      <Text style={styles.header}>Pending Orders</Text>
      <View
        style={{
          height: 300,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          marginHorizontal: 10,
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
              <Text>OD001</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>OD002</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>OD003</Text>
            </Row>
          </Col>
          <Col size={20}>
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
            <Row style={styles.cell}>
              <Text>Ayomal Praveen</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Amal Fernando</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Nimal Fernando</Text>
            </Row>
          </Col>
          <Col size={}>
            <Row style={styles.cell}>
              <Text
                style={{
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Customer Address
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ marginLeft: 10 }}>No.23,Colombo road,Negombo</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ marginLeft: 10 }}>
                No.54,Negombo road,Dankotuwa
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ marginLeft: 10 }}>
                No.20, Kandy road,Kurunegala
              </Text>
            </Row>
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
            <Row style={styles.cell}>
              <Text>2021-8-24</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>2021-8-24</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>2021-8-25</Text>
            </Row>
          </Col>
        </Grid>
      </View>
    </React.Fragment>
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
  header: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 1,
    width: 200,
  },
});
export default PendingOrdersTable;