import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import Card from "../../UI/Card";
import UserDetails from "./UserDetails";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;
const StatusBarHeight = StatusBar.currentHeight;

const CheckOutForm = ({ navigation }) => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchDistrictList = async () => {
      console.log("Inside useEffect");
      try {
        let result = await axios.get(`${API_URL}payments/deliveryCharges`);
        const { deliveryCharges } = result.data;
        setDistricts(deliveryCharges);
        console.log(districts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDistrictList();
  }, []);

  return (
    <Card
      width={mobileWidth - 40}
      height={mobileHeight / 1.1}
      ml={20}
      bg="#fff"
    >
      {districts.length > 0 && (
        <UserDetails districts={districts} navigation={navigation} />
      )}
    </Card>
  );
};

export default CheckOutForm;
