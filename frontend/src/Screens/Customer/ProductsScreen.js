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

import Searchbar from "../../Components/UI/SearchBar";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Screen/Products/Products";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { API_URL1 } from "react-native-dotenv";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

let ScreenHeight = Dimensions.get("window").height;
let StatusBarHeight = StatusBar.currentHeight;

const ProductScreen = ({ navigation: { navigate } }) => {
  const loginContext = useContext(LoginContext);
  const [products, setProducts] = useState([]);
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL1}products/`);
        const products = response.data;
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const LogOut = (
    <View style={styles.upperContainer}>
      <TouchableOpacity onPress={() => navigate("Cart")}>
        <AntDesign
          style={styles.cart}
          name="shoppingcart"
          size={35}
          color="black"
        />
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
        <Searchbar placeholder="Search" />
        <Products navigate={navigate} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#E7E5E9",
    minHeight: ScreenHeight - StatusBarHeight,
  },
  // Login: {
  //   alignSelf: "flex-end",
  //   color: "#FFF",
  //   fontSize: 28,
  //   letterSpacing: 5,
  // },
  LoginHeader: {
    marginTop: 5,
  },
  cart: {
    marginRight: 15,
    marginTop: 8,
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
