//This is the landing page
//HomeScreen.js file
//path:frontend/Screens/DeliveryDriver/HomeScreen.js

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../../Components/UI/Card";
import Header from "../../Components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { DriverContext } from "../../Components/Reducers/driverReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PendingOrdersTable from "../../Components/Screen/DeliveryDriver/PendingOrdersTable";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";

const mobileHeight = Dimensions.get("window").height;
const mobileWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {

  const loginContext = useContext(LoginContext);
  const driverContext = useContext(DriverContext);
  const [todayAssigned, setTodayAssigned] = useState(null);
  const [todayPending, setTodayPending] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(null);
  const [monthlyCompleted, setMonthlyCompleted] = useState(null);
  const [pendingOrders, setPendingOrders] = useState([]);

  const getTodayAssignments = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/dashboard/todayAssignment/${driverID}`
      );
      if (response.status === 200) {
        setTodayAssigned(response.data.noAssignedToday);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTodayCompleted = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/dashboard/todayCompleted/${driverID}`
      );
      if (response.status === 200) {
        setTodayCompleted(response.data.noCompletedToday);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTodayPending = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/dashboard/todayPending/${driverID}`
      );
      if (response.status === 200) {
        setTodayPending(response.data.noPendingToday);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMonthlyCompleted = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/dashboard/monthlyCompleted/${driverID}`
      );
      if (response.status === 200) {
        setMonthlyCompleted(response.data.noMonthlyCompleted);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllPendingOrderDetails = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      const response = await axios.get(
        `${API_URL}deliveryDriver/orders/pendingOrders/${driverID}`
      );
      if (response.status === 200) {
        console.log(response.data.orderUsers);
        setPendingOrders(response.data.orderUsers);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setGlobalStateForAvailability();
    getTodayAssignments();
    getTodayCompleted();
    getTodayPending();
    getMonthlyCompleted();
    getAllPendingOrderDetails();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.productContainer}>
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
        <Text style={styles.header}>Home Page</Text>
        <Image
          source={require("../../../assets/nlogo.png")}
          style={styles.imageHeader}
        />
        <View style={{ flexDirection: "row" }}>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={40}
                color="#542b14"
              />
              <Text style={styles.itemName}>Today Assingned</Text>
              <Text style={styles.itemPrice}>{todayAssigned}</Text>
            </View>
          </Card>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialIcons name="category" size={40} color="#542b14" />
              <Text style={styles.itemName}>Today Completed</Text>
              <Text style={styles.itemPrice}>{todayCompleted}</Text>
            </View>
          </Card>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialIcons
                name="stacked-line-chart"
                size={40}
                color="#542b14"
              />
              <Text style={styles.itemName}>Today Pending</Text>
              <Text style={styles.itemPrice}>{todayPending}</Text>
            </View>
          </Card>

          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <FontAwesome5 name="spa" size={40} color="#542b14" />
              <Text style={styles.itemName}>Monthly Completed</Text>
              <Text style={styles.itemPrice}>{monthlyCompleted}</Text>
            </View>
          </Card>
        </View>
        {pendingOrders.length > 0 && (
          <PendingOrdersTable pendingOrders={pendingOrders} />
        )}
      </View>
    </ScrollView>
  );
};


export default HomeScreen;
