import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "react-native-dotenv";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { CartContext } from "../../Components/Reducers/cartReducer";
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Screen/Home/Contact";
import Intro from "../../Components/Screen/Home/Intro";
import NewArrival from "../../Components/Screen/Home/NewArrival";
import CustomIntro from "../../Components/Screen/Home/CustomIntro";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import qs from "qs";
import * as SecureStore from "expo-secure-store";

const HomeScreen = ({ navigation: { navigate } }) => {
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [cartContainer, setCartContainer] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  //fetching the newa rrivals
  const fetchNewProducts = async () => {
    try {
      let response = await axios.get(`${API_URL}products/newProducts`);
      setNewProducts(response.data.newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  //fetching the total quantity,cartItems & store it in reducer
  const fetchTotalQuantityItems = async () => {
    let customer_id = await SecureStore.getItemAsync("customer_id");
    console.log(customer_id);
    if (customer_id !== null) {
      customer_id = parseInt(customer_id);
      try {
        const response = await axios.get(`${API_URL}cart/${customer_id}`);
        const cartProductID = response.data.cartItems.map(
          (cartItem) => cartItem.id
        );
        console.log(cartProductID);
        console.log(response.data);
        setCartItems(response.data.totalQuantity);
        setCartContainer(response.data.cartItems);
        cartContext.dispatchCart({
          type: "initiate",
          payload: {
            cartProductID,
            quantity: response.data.totalQuantity,
            totalAmount: response.data.totalAmount,
            totalDiscount: parseInt(response.data.discountAmount),
          },
        });
        // getTotalAmount();
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchNewProducts();
    fetchTotalQuantityItems();
  }, []);
  //header for the loggedin users
  const LogOut = (
    <View style={styles.upperContainer}>
      <TouchableOpacity onPress={() => navigate("Cart", { test: 123 })}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={styles.cart}
            name="shoppingcart"
            size={35}
            color="black"
          />
          {cartContext.cartDetails.quantity > 0 && (
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                backgroundColor: "#FB9F3C",
                marginRight: 5,
              }}
            >
              <Text style={{ alignSelf: "center", color: "white" }}>
                {cartContext.cartDetails.quantity}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLg}
        onPress={() => {
          SecureStore.deleteItemAsync("numberOfProducts");
          SecureStore.deleteItemAsync("customer_id");
          loginContext.loginDispatch({ type: "logout" });
          cartContext.dispatchCart({ type: "logout" });
        }}
      >
        <Text style={styles.Login}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  //header for the not loggedin users
  const Login = (
    <View style={{ alignSelf: "flex-end", marginTop: 15, marginRight: 10 }}>
      <TouchableOpacity
        style={styles.LoginHeader}
        style={styles.buttonLg}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.Login}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        {loginContext.userDetails.userToken === null ? Login : LogOut}
        <Header />
        <Intro navigate={navigate} />
        {newProducts.length > 0 ? (
          <NewArrival newProducts={newProducts} navigate={navigate} />
        ) : (
          <Text>Products are Loading</Text>
        )}

        <CustomIntro />
        <Contact />
        {/* <Text style={{ color: "red", fontSize: 20 }}>
          {cartContext.cartDetails.totalAmount}
        </Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
  LoginHeader: {
    marginTop: 5,
  },
  cart: {
    marginTop: 12,
  },
  upperContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 15,
    marginRight: 10,
  },
  buttonLg: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingRight: 0,
    paddingLeft: 17,
    paddingVertical: 12,
    marginTop: 3,
    justifyContent: "center",
  },
  Login: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
    width: 75,
  },
});

export default HomeScreen;
