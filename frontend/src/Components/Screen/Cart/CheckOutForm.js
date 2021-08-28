import React, { useEffect, useState, useContext } from "react";
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
import { CartContext } from "../../Reducers/cartReducer";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;
const StatusBarHeight = StatusBar.currentHeight;

const CheckOutForm = ({ navigation }) => {
  const [districts, setDistricts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const cartContext = useContext(CartContext);

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
    <React.Fragment>
      {districts.length > 0 && (
        <UserDetails districts={districts} navigation={navigation} />
      )}
    </React.Fragment>
  );
};

export default CheckOutForm;
