import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { API_URL } from "react-native-dotenv";
import StripeApp from "../../Components/Screen/Cart/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
import axios from "axios";
const StripeAppScreen = ({ route, navigation }) => {
  const [publishableKey, setPublishableKey] = useState("");
  const { userDetails } = route.params;
  useEffect(() => {
    const fetchPublishableKey = async () => {
      try {
        let response = await axios.get(`${API_URL}payments/publishableKey`);
        console.log(response.data.PUBLISHABLE_KEY);
        setPublishableKey(response.data.PUBLISHABLE_KEY);
      } catch (error) {
        console.log(error.type);
        console.log(error);
      }
    };
    fetchPublishableKey();
  }, []);
  return (
    <StripeProvider publishableKey={publishableKey}>
      <StripeApp userDetails={userDetails} navigation={navigation} />
    </StripeProvider>
  );
};

export default StripeAppScreen;

const styles = StyleSheet.create({});
