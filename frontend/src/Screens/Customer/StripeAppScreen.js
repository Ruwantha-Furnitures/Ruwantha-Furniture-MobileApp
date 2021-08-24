import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "../../Components/Screen/Cart/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
const StripeAppScreen = () => {
  return (
    <StripeProvider publishableKey="pk_test_51JS3DASG2UHVeUis6t1Onq36qCPEjxNOTQJ6SFocWyaBiqLejsN7cTU8UUsnrMSn7oO4jv7oHzC4huSgw0Xqjdao00kqrqDy8x">
      <StripeApp />
    </StripeProvider>
  );
};

export default StripeAppScreen;

const styles = StyleSheet.create({});
