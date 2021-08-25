import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import FormAppButton from "../../UI/FormAppButton";
import { API_URL } from "react-native-dotenv";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const StripeApp = () => {
  const [name, setName] = useState();
  const [showModal, setShowModal] = useState(false);
  //   const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  const fetchPaymentIntentClientSecret = async () => {
    const response = await axios.post(
      `${API_URL}payments/create-payment-intent`
    );
    const { client_secret, error } = response.data;
    return { client_secret, error };
  };

  const paymentHandler = async () => {
    console.log("payment submitted");
    //Gather the billing information has been added
    if (!name) {
      Alert.alert("Please enter complete card details");
      return;
    }

    //fetch the client secret
    try {
      const { client_secret, error } = await fetchPaymentIntentClientSecret();
      console.log(client_secret);
      //confirm payment
      if (error) {
        console.log(error);
      } else {
        const { error, paymentIntent } = await confirmPayment(client_secret, {
          type: "Card",
          billingDetails: { name },
        });
        setShowModal((prevState) => !prevState);

        // if (error) {
        //   console.log(error);
        //   alert("Payment Confirmation error");
        // } else {
        //   alert("Payment Successful");
        //   console.log(paymentIntent);
        // }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Form width={mobileWidth - 30} height={330}>
        <SubHeader title="Payment Form" width={300} />
        <Input
          placeholder="Enter your name"
          value={name}
          onChangeText={(name) => setName(name)}
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
            postalCodeEnabled={true}
            placeholder={{ number: "4242 4242 4242 4242" }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={(cardDetails) => console.log(cardDetails)}
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
            disabled={loading}
          />
        </View>
        <PopUpConfirmationModal visible={showModal}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="#F00"
            style={styles.closeIcon}
          />
          <MaterialIcons
            name="payments"
            size={80}
            color="#B89068"
            style={styles.mailIcon}
          />
          <Text style={styles.confirmationText}>Payment Successful</Text>
        </PopUpConfirmationModal>
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
  mailIcon: {
    alignSelf: "center",
  },

  confirmationText: {
    fontWeight: "bold",
    fontSize: 33,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  confirmationTextTwo: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 34,
    marginLeft: 50,
    marginRight: 5,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: -18,
    marginRight: 5,
    marginBottom: 0,
  },
});
