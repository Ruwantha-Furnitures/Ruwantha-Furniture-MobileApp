import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "../../UI/Card";
import * as All from "../Products/ALLImages";
import { API_URL } from "react-native-dotenv";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { CartContext } from "../../Reducers/cartReducer";

const Product = ({ item, removeCartProduct }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState();
  const cartContext = useContext(CartContext);

  const fetchSingleProduct = async () => {
    try {
      console.log("inside cart product");
      const id = item.id;
      console.log(id);
      let response = await axios.get(`${API_URL}cart/getProduct/${id}`);
      const { name, price } = response.data.product;
      setName(name);
      setQuantity(item.quantity);
      setPrice(price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [item]);

  const updateQuantity = async () => {};

  const increment = async (item) => {
    try {
      console.log("increment");
      console.log(price);
      // const number = await SecureStore.getItemAsync("numberOfProducts");
      // const afterIncrement = parseInt(number) + 1;
      // await SecureStore.setItemAsync("numberOfProducts", afterIncrement);
      // setQuantity(quantity + 1);
      cartContext.dispatchCart({
        type: "increment",
        payload: { totalAmount: price },
      });
      const curQty = quantity + 1;
      const id = item.id;
      const customerId = item.customer_id;
      const type = "increment";
      let qtyResponse = await axios.put(
        `${API_URL}cart/updateCartProduct/${id}/${customerId}`,
        { quantity: curQty }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const decrement = async (item) => {
    try {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        const curQty = quantity - 1;
        const id = item.id;
        const customerId = item.customer_id;
        const type = "increment";
        let qtyResponse = await axios.put(
          `${API_URL}cart/updateCartProduct/${id}/${customerId}`,
          { quantity: curQty }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      width={mobileWidth - 60}
      height={mobileHeight / 5}
      ml={30}
      pd={7}
      fd="row"
      bg="#FFF"
    >
      <View style={styles.productContainer}>
        <Image source={All[`Image${item.id}`]} style={styles.itemImage} />
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemPrice}>{`${price} /=`}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => decrement(item)}
            >
              <Text style={styles.btnMinIcon}>-</Text>
            </TouchableOpacity>
            <Text style={styles.itemQuantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => increment(item)}
            >
              <Text style={styles.btnIcon}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => removeCartProduct(item)}
            >
              <View>
                <MaterialIcons name="delete" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
  },
  productContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  itemDetailsContainer: {
    marginLeft: 30,
    flexDirection: "column",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
    width: 180,
    letterSpacing: 2,
  },
  itemPrice: {
    marginTop: 10,
    color: "#FB9F3C",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    height: 35,
    width: 30,
    borderRadius: 25,
    backgroundColor: "#E7E5E9",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginLeft: 15,
  },
  btnContainer: {
    marginTop: 10,
    marginLeft: -15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 230,
  },
  itemQuantity: {
    color: "#FB9F3C",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
  },
  btnIcon: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btnMinIcon: {
    fontWeight: "bold",
    fontSize: 25,
  },
  btnDelete: {
    height: 45,
    width: 60,
    borderRadius: 35,
    backgroundColor: "#E7E5E9",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginLeft: 40,
    marginTop: -8,
    padding: 10,
  },
});

export default Product;
