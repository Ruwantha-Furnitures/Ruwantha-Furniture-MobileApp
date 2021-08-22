import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const ProductPrice = ({ navigation, cartItems }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const [productsDetail, sellProductDetails] = useState([]);
  useEffect(() => {
    console.log("Inside price");
    const fetchProduct = async (req, res) => {
      for (let i = 0; i < cartItems.length; i++) {
        let id = cartItems[i].product_id;
        let quantity = cartItems[i].quantity;
        let response = await axios.get(`${API_URL}cart/getProduct/${id}`);
        const { name, price } = response.data.product;
        const productPrice = price * quantity;
        console.log(productPrice);
        const data = { id, name, productPrice };
        sellProductDetails((prevState) => [...prevState, data]);
        console.log(productsDetail);
      }
    };
    fetchProduct();
  }, []);
  return (
    <View style={{ width: mobileWidth }}>
      <Card width={mobileWidth} pd={7} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Selected Items</Text>
          {productsDetail.length > 0 ? (
            productsDetail.map((cartItem) => (
              <View style={styles.productDetail} key={cartItem.id}>
                <Text style={styles.productName}>{cartItem.name}</Text>
                <Text
                  style={styles.productPrice}
                >{`Rs${cartItem.productPrice}/=`}</Text>
              </View>
            ))
          ) : (
            <Text>0</Text>
          )}

          <View style={styles.checkoutButton}>
            <AppButton
              title="Checkout"
              size="lg"
              width={130}
              onPress={() => navigation.navigate("CheckOut")}
            />
          </View>
        </View>
      </Card>
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
    marginLeft: 20,
    marginTop: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
  },
  productPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    marginLeft: 45,
    fontSize: 16,
  },
  checkoutButton: {
    marginTop: 10,
    marginLeft: 300,
  },
});

export default ProductPrice;
