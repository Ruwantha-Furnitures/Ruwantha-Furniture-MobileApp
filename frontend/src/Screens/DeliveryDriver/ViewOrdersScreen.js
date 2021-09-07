import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Order from "../../Components/Screen/DeliveryDriver/Order";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";
import { Entypo } from "@expo/vector-icons";
import Card from "../../Components/UI/Card";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;

const ViewOrdersScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const [todayOrders, setTodayOrders] = useState([]);
  const [changeDeliveryStatus, setChangeDeliveryStatus] = useState(false);

  const getTodayOrders = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/orders/${driverID}`
      );
      if (response.status === 200) {
        const { orderDetails } = response.data;
        console.log(orderDetails);
        setTodayOrders(orderDetails);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatusHandler = async (order_id) => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      console.log(order_id);
      const response = await axios.put(
        `${API_URL}deliveryDriver/orders/changeStatus/${order_id}/${driverID}`
      );
      if (response.status === 200) {
        console.log(response.data);
        getTodayOrders();

        // setChangeDeliveryStatus((prevState) => !prevState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodayOrders();
  }, [setChangeDeliveryStatus]);

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
          <AvailabilityStatus navigation={navigation} />
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
        {todayOrders.length > 0 ? (
          todayOrders.map((order) => (
            <Order
              order={order}
              navigation={navigation}
              changeStatus={changeStatusHandler}
            />
          ))
        ) : (
          <View style={{ marginTop: 30 }}>
            <Card
              width={mobileWidth - 40}
              height={mobileHeight / 3.5}
              ml={30}
              pd={7}
              fd="row"
              bg="#FFF"
            >
              <View style={styles.cartEmpty}>
                <Entypo name="notifications-off" size={80} color="#Bf9061" />
                <Text style={styles.cartTextEmptyHead}>
                  No Delivery Orders For Today!
                </Text>
                <Text style={styles.cartTextEmpty}>
                  Will display when there are orders to be delivered,today.
                </Text>
              </View>
            </Card>
          </View>
        )}
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
    width: 310,
    marginBottom: 10,
    letterSpacing: 5,
  },
  buttonLg: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingRight: 10,
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

  cartEmpty: {
    width: mobileWidth - 80,
    alignItems: "center",
    padding: 10,
  },
  cartTextEmptyHead: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 19,
    marginTop: 20,
    marginLeft: 75,
    minWidth: mobileWidth - 80,
  },
  cartTextEmpty: {
    marginTop: -15,
    fontSize: 14,
    color: "grey",
    fontWeight: "900",
    minWidth: mobileWidth - 50,
    marginLeft: 35,
  },
});
export default ViewOrdersScreen;
