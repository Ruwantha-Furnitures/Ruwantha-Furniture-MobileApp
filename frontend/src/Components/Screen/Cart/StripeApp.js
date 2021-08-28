import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Platform,
  Image,
} from "react-native";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import FormAppButton from "../../UI/FormAppButton";
import { API_URL } from "react-native-dotenv";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { CartContext } from "../../Reducers/cartReducer";
import { MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const StripeApp = ({ userDetails }) => {
  const [name, setName] = useState();
  const [showModal, setShowModal] = useState(false);
  const cartContext = useContext(CartContext);
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

        const total_product_amount = parseFloat(
          cartContext.cartDetails.totalAmount
        ).toFixed(2);
        const customerID = await SecureStore.getItemAsync("customer_id");
        const customer_id = parseInt(customerID);
        const payment_method = "online";
        const data = {
          total_product_amount,
          customer_id,
          payment_method,
        };
        console.log(data);
        try {
          const response = await axios.post(`${API_URL}payments/orders`, {
            data,
          });
          const { order_id } = response.data;
          setShowModal((prevState) => !prevState);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Form width={mobileWidth - 30} height={mobileHeight - 250}>
        <Image
          source={require("../../../../assets/nlogo.png")}
          style={styles.imageHeader}
        />
        <SubHeader title="Payment Form" width={mobileWidth / 1.75} />
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
            title="Pay With Payhere"
            onPress={paymentHandler}
            width={200}
            disabled={loading}
          />
        </View>
        <PopUpConfirmationModal visible={showModal}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="#F00"
            style={styles.closeIcon}
            onPress={() => setShowModal(!showModal)}
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
  imageHeader: {
    width: 90,
    height: 90,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
