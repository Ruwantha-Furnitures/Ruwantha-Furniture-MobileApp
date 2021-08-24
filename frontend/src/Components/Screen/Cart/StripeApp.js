import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import FormAppButton from "../../UI/FormAppButton";
import { API_URL } from "react-native-dotenv";
import axios from "axios";
const StripeApp = () => {
  const [email, setEmail] = useState();
  const [card, setCard] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  const fetchPaymentIntentClientSecret = async () => {
    const response = await axios.post(
      `${API_URL}payment/create-payment-intent`
    );
    console.log(response.data.clientSecret);
  };

  const paymentHandler = async () => {
    console.log("payment submitted");
    //Gather the billing information has been added
    if (!card.complete || !email) {
      Alert.alert("Please enter complete card details");
      return;
    }
    const billingDetails = {
      email,
    };
  };
  return (
    <View style={styles.container}>
      <Form width={mobileWidth - 30} height={330}>
        <SubHeader title="Payment Form" width={300} />
        <Input
          placeholder="Enter your email address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <View
          style={{
            borderRadius: 20,
            marginHorizontal: 20,
            marginVertical: 20,
            backgroundColor: "#E7E5E9",
            padding: 5,
          }}
        >
          <CardField
            postalCodeEnabled={false}
            placeholder={{ number: "4242 4242 4242 4242" }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={(cardDetails) => setCard(cardDetails)}
          />
        </View>
        <View
          style={{ marginLeft: -25, alignSelf: "center", marginVertical: 15 }}
        >
          <FormAppButton
            type="Submit"
            title="Pay With Stripe"
            onPress={paymentHandler}
            width={180}
          />
        </View>
      </Form>
    </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
  },
  cardContainer: {
    height: 50,
    backgroundColor: "#E7E5E9",
    fontSize: 14,
    borderRadius: 20,
  },
});
