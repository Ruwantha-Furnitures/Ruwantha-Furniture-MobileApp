import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import PurchaseDetailTable from "./PurchaseDetailTable";
import RatingsForm from "./RatingsForm";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as All from "../Products/ALLImages";

const PurchasedProduct = ({ item, order }) => {
  const [ratingDisplay, setRatingDisplay] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [details, setDetails] = useState(null);
  const [startRating, setStartRating] = useState(1);
  const [feedback, setFeedback] = useState("");

  const ratingFormHandler = () => {
    setRatingDisplay((prevState) => !prevState);
  };

  const feedbackHandler = async (defaultRating, feedback) => {
    console.log(defaultRating);
    console.log(feedback);
    console.log(details[0].id);
    try {
      const ratingsResponse = await axios.post(
        `${API_URL}customer/purchaseOrders/feedback`,
        { product_id: details[0].id, feedback, rating_points: defaultRating }
      );
      if (ratingsResponse.status === 200) {
        console.log("ratings has been added");
        setRatingDisplay((prevState) => !prevState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetails = async () => {
    try {
      const orderid = order.id;
      setOrderId(orderId);
      console.log("wtf");
      const purchasedProductResponse = await axios.get(
        `${API_URL}customer/purchaseOrders/products/${orderid}`
      );
      console.log(purchasedProductResponse.data);
      if (purchasedProductResponse.status === 200) {
        const { sellProduct, productDetails } = purchasedProductResponse.data;
        setDetails(productDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <View style={styles.purchases}>
      {details != null && (
        <Card width={415} height={ratingDisplay ? 610 : 300} ml={20} bg="#fff">
          <View style={styles.productContainer}>
            <Text style={styles.purchaseItemName}>{details[0].name}</Text>
            <Image
              source={All[`Image${details[0].id}`]}
              style={styles.productImage}
            />
            {details && <PurchaseDetailTable item={details} />}
            {!ratingDisplay && (
              <View style={styles.btnContainer}>
                <AppButton
                  size="lg"
                  title="Provide Ratings"
                  onPress={ratingFormHandler}
                  width={200}
                />
              </View>
            )}
          </View>
          {ratingDisplay && (
            <RatingsForm
              ratingFormHandler={ratingFormHandler}
              feedbackHandler={feedbackHandler}
            />
          )}
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  purchases: {
    marginTop: 2,
  },
  productContainer: {
    flexDirection: "column",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    alignSelf: "center",
  },
  purchaseItemDeatils: {
    marginLeft: 30,
    justifyContent: "space-evenly",
  },
  purchaseItemName: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
    marginLeft: 85,
    marginBottom: 15,
    marginTop: 5,
  },
  purchasePrice: {
    fontSize: 16,
    marginLeft: 8,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 0,
    justifyContent: "space-evenly",
    alignSelf: "flex-end",
    marginRight: 15,
  },
});

export default PurchasedProduct;
