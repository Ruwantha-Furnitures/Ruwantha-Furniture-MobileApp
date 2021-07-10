import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import PurchaseDetailTable from "./PurchaseDetailTable";
import RatingsForm from "./RatingsForm";

const PurchasedProduct = ({ item }) => {
  const [ratingDisplay, setRatingDisplay] = useState(false);

  const ratingFormHandler = () => {
    setRatingDisplay((prevState) => !prevState);
  };

  return (
    <View style={styles.purchases}>
      <Card width={415} height={ratingDisplay ? 610 : 300} ml={20} bg="#fff">
        <View style={styles.productContainer}>
          <Text style={styles.purchaseItemName}>{item.name}</Text>
          <Image source={item.image} style={styles.productImage} />
          <PurchaseDetailTable item={item} />
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
        {ratingDisplay && <RatingsForm ratingFormHandler={ratingFormHandler} />}
      </Card>
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
