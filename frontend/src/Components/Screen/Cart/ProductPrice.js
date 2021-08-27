import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { CartContext } from "../../Reducers/cartReducer";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const ProductPrice = ({ navigation, cartItems }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const [productsDetail, sellProductDetails] = useState([]);
  const cartContext = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchProductPriceItems = async () => {
    console.log("fetching products");
    console.log(cartItems);
    setIsLoading(true);
    setDataLoaded(false);
    for (let i = 0; i < cartItems.length; i++) {
      let id = cartItems[i].product_id;
      let quantity = cartItems[i].quantity;
      let response = await axios.get(`${API_URL}cart/getProduct/${id}`);
      const { name, price } = response.data.product;
      const productPrice = price * quantity;
      console.log(productPrice);
      const data = { id, name, productPrice };
      const result = productsDetail.some((product) => product.id === id);
      console.log(productsDetail);
      console.log(result, i);
      if (result) {
        let ids = productsDetail.map((o) => o.id);
        let filtered = productsDetail.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        );
        console.log("filtered products");
        // sellProductDetails((prevState) => [...prevState, data]);
        sellProductDetails(filtered);
        setIsLoading(false);
        setDataLoaded(true);

        console.log(filtered);
      }
      if (!result && i >= 0) {
        console.log("result: " + JSON.stringify(result));
        sellProductDetails((prevState) => [...prevState, data]);
        setIsLoading(false);
        setDataLoaded(true);
        console.log(productsDetail);
      }
    }
  };

  useEffect(() => {
    fetchProductPriceItems();
  }, [cartItems]);
  return (
    <View
      style={{
        width: mobileWidth,
        // position: "absolute",
        // bottom: 165,
      }}
    >
      <Card width={mobileWidth} pd={7} fd="row" bg="#343899">
        <View style={styles.products}>
          <Text style={styles.subHeader}>Your Order</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productName}>Total Purchase</Text>
            <Text
              style={styles.productName}
            >{`Rs.${cartContext.cartDetails.totalAmount}.00/=`}</Text>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.amountDiscount}>After Discount</Text>
            <Text
              style={styles.amountDiscount}
            >{`Rs.${cartContext.cartDetails.totalAmount}.00/=`}</Text>
          </View>
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
    marginTop: 10,
    marginLeft: 300,
  },
});

export default ProductPrice;
