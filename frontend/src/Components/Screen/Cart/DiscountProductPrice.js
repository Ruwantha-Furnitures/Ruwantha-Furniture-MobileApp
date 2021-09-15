import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { CartContext } from "../../Reducers/cartReducer";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const fontScale = Dimensions.get("window").fontScale;

const DiscountProductPrice = ({
  navigation,
  firstName,
  lastName,
  address,
  district,
  telephoneNumber,
  selectdeliveryDetails,
}) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const cartContext = useContext(CartContext);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setErrorStatus(false), 3 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorStatus]);

  const paymentHandler = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      address === "" ||
      district === "" ||
      telephoneNumber === "" ||
      selectdeliveryDetails === ""
    ) {
      setErrorStatus(true);
    } else {
      navigation.navigate("StripeApp", {
        userDetails: {
          firstName,
          lastName,
          address,
          telephoneNumber,
          district,
          selectdeliveryDetails,
        },
      });
    }
  };
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <Card width={mobileWidth - 20} pd={9} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Your Order</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Total Purchase</Text>
            <Text style={styles.productName}>
              Rs.
              {cartContext.cartDetails.totalAmount.toFixed(2)}
              /=
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>After Discount</Text>
            <Text style={styles.productName}>
              Rs.
              {(
                cartContext.cartDetails.totalAmount +
                -cartContext.cartDetails.totalDiscountAmount
              ).toFixed(2)}
              /=
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Delivery Price</Text>
            <Text style={styles.productName}>
              {`Rs.${cartContext.cartDetails.deliveryCharges}.00/=`}
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.amountDiscount}>Total Price</Text>
            <Text style={styles.amountDiscount}>
              Rs.
              {(
                cartContext.cartDetails.totalAmount -
                cartContext.cartDetails.totalDiscountAmount +
                cartContext.cartDetails.deliveryCharges
              ).toFixed(2)}
              /=
            </Text>
          </View>
          <View style={styles.checkoutButton}>
            <AppButton
              title="Proceed To Payment"
              size="lg"
              width={220}
              onPress={paymentHandler}
            />
          </View>
        </View>
      </Card>
      <PopUpConfirmationModal visible={errorStatus}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="exclamationcircle" size={24} color="red" />
          <Text style={styles.confirmationText}>
            Please enter the required fields
          </Text>
        </View>
      </PopUpConfirmationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    letterSpacing: 3,
    marginTop: 10,
    fontSize: 27,
    marginLeft: 120,
    fontWeight: "bold",
    width: 250,
    color: "#FFF",
    marginBottom: 20,
  },
  productDetail: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 18,
    width: 200,
  },
  amountDiscount: {
    color: "#fff",
    fontSize: 18,
    width: 200,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    marginLeft: 45,
    fontSize: 16,
  },
  checkoutButton: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    marginRight: 80,
  },

  confirmationText: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 20 / fontScale,
    marginLeft: 15,
    marginRight: 5,
    color: "#f40",
  },
});

export default DiscountProductPrice;
