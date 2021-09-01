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

  
}

export default HomeScreen;
