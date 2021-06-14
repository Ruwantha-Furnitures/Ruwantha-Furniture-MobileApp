import React from "react";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import { Image, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Product = ({ item }) => {
  return (
    <Card key={item.id} width={405} height={200} ml={20} bg="#E7E5E9">
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>{`Rs. ${item.price}/=`}</Text>
          <View style={styles.btnContainer}>
            <AppButton
              title="Add to cart"
              size="lg"
              onPress={() => console.log("Clicked")}
            />
          </View>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#fff" />
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  productContainer: { flexDirection: "row", marginTop: 10, marginLeft: 10 },
  productImage: { width: 100, height: 100, borderRadius: 40, marginTop: 10 },
  productName: {
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 22,
    width: 255,
    marginBottom: 10,
  },
  productDescription: {
    width: 250,
    marginLeft: 30,
  },
  productPrice: {
    width: 250,
    marginLeft: 75,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    color: "#FB9F3C",
  },
  btnContainer: {
    marginLeft: 130,
    marginTop: 5,
  },
  ratingContainer: { marginTop: -30, flexDirection: "row", marginLeft: 8 },
});
export default Product;
