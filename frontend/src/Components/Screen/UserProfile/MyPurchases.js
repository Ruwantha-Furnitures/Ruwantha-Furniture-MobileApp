import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import PurchaseDetailTable from "./PurchaseDetailTable";
import RatingsForm from "./RatingsForm";
const MyPurchases = () => {
  const [ratingDisplay, setRatingDisplay] = useState(false);

  const productList = [
    {
      orderID: 1,
      name: "Molteni Outline Chair",
      price: 1500,
      date: "21st January 2021",
      image: {
        uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      },
      orderStatus: true,
      paymentStatus: true,
    },
    {
      orderID: 2,
      name: "Monay NewCastle Chair",
      price: 1500,
      date: "21st January 2021",
      image: {
        uri: "data:image/jpeg;base64,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",
      },
      rating: 5,
      orderStatus: true,
      paymentStatus: true,
    },
  ];

  const ratingFormHandler = () => {
    setRatingDisplay((prevState) => !prevState);
  };
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productList}
        keyExtractor={(product) => product.orderID}
        renderItem={({ item }) => (
          <View style={styles.purchases}>
            <Card
              width={415}
              height={ratingDisplay ? 560 : 300}
              ml={20}
              bg="#fff"
            >
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
              {ratingDisplay && (
                <RatingsForm ratingFormHandler={ratingFormHandler} />
              )}
            </Card>
          </View>
        )}
      />
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
export default MyPurchases;
