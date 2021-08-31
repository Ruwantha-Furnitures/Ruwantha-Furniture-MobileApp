//viewing all the orders for today
//ViewOrdersScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Order from "../../Components/Screen/DeliveryDriver/Order";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";

const ViewOrdersScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const orders = [
    {
      id: 1,
      orderID: "OD001",
      customerName: "Ayomal Praveen",
      address: "No.54, Negombo Road, Dankotuwa",
      telephoneNumber: "0776054853",
      status: "Not Delivered",
      totalAmount: "Rs.10,000",
      purchasedDate: "2021-10-20",
      dueDate: "2021-10-22",
      contactNumber: "0777604473",
    },
    {
      id: 2,
      orderID: "OD002",
      customerName: "Amal Perera",
      address: "No.14, Colombo Road, Negombo",
      telephoneNumber: "0776029808",
      status: "Delivered",
      totalAmount: "Rs.20,000",
      purchasedDate: "2021-10-21",
      dueDate: "2021-10-23",
      contactNumber: "0777605453",
    },
    {
      id: 3,
      orderID: "OD003",
      customerName: "Nimal Fernando",
      address: "No.94, Kandy Road, Kurunegala",
      telephoneNumber: "0777604473",
      status: "Delivered",
      totalAmount: "Rs.30,000",
      purchasedDate: "2021-10-19",
      dueDate: "2021-10-21",
      contactNumber: "0753604473",
    },
  ];
  return (
    <View style={styles.viewContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginRight: 10,
            justifyContent: "space-between",
          }}
        >
          <AvailabilityStatus />
          <TouchableOpacity
            style={styles.buttonLg}
            onPress={() => loginContext.loginDispatch({ type: "logout" })}
          >
            <Text style={styles.Login}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Order Details</Text>
        <Image
          source={require("../../../assets/nlogo.png")}
          style={styles.imageHeader}
        />
        {orders.map((order) => (
          <Order order={order} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
  header: {
    fontWeight: "100",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 12,
    width: 300,
    marginBottom: 10,
    letterSpacing: 5,
  },
  buttonLg: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingRight: 0,
    paddingLeft: 17,
    paddingVertical: 12,
    marginTop: 3,
    justifyContent: "center",
  },
  Login: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
    width: 75,
  },
  imageHeader: {
    width: 40,
    height: 40,
    marginRight: 5,
    backgroundColor: "#E7E5E9",
    alignSelf: "center",
  },
});
export default ViewOrdersScreen;
