import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  LogBox,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Searchbar from "../../Components/UI/SearchBar";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Screen/Products/Products";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { CartContext } from "../../Components/Reducers/cartReducer";
import { API_URL } from "react-native-dotenv";
import { AntDesign } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

let ScreenHeight = Dimensions.get("window").height;
let StatusBarHeight = StatusBar.currentHeight;

const ProductScreen = ({ navigation: { navigate } }) => {
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  //fetching the products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}products/`);
      const productsResult = response.data;
      setProducts(productsResult.data);
      setAllProducts(productsResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  //fetching the categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}products/categories`);
      const categoryResult = response.data.result;
      setCategories(categoryResult);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (product) => {
    //when adding to the cart check whether the particular product already exists in the cart
    if (
      cartContext.cartDetails.quantity > 0 &&
      cartContext.cartDetails.cartProductID.includes(product.id)
    ) {
      console.log("exists already");
      return;
    }
    //when the particular product is not exists in the cart
    else {
      //calculate the discount amount
      let discountAmount = (product.discount * product.price) / 100;
      try {
        cartContext.dispatchCart({
          type: "add",
          payload: {
            id: product.id,
            totalAmount: product.price,
            discount: discountAmount,
            quantity: 1,
          },
        });
        const { id } = product;
        const customerId = await SecureStore.getItemAsync("customer_id");
        const customer_id = parseInt(customerId);
        console.log(customer_id);
        const data = { product_id: id, customer_id, quantity: 1 };
        let response = await axios.post(`${API_URL}cart/addToCart`, {
          data,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const LogOut = (
    <View style={styles.upperContainer}>
      <TouchableOpacity onPress={() => navigate("Cart")}>
        {cartContext.cartDetails.quantity > 0 ? (
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={styles.cart}
              name="shoppingcart"
              size={35}
              color="black"
            />
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
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={{ marginRight: 13, marginTop: 8 }}
              name="shoppingcart"
              size={35}
              color="black"
            />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLg}
        onPress={() => loginContext.loginDispatch({ type: "logout" })}
      >
        <Text style={styles.Login}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

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
        {products.length > 0 && (
          <Products
            navigate={navigate}
            products={products}
            categories={categories}
            addToCart={addToCart}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#E7E5E9",
    minHeight: ScreenHeight - StatusBarHeight,
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
    paddingLeft: 20,
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

export default ProductScreen;
