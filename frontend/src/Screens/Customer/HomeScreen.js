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
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Screen/Home/Contact";
import Intro from "../../Components/Screen/Home/Intro";
import NewArrival from "../../Components/Screen/Home/NewArrival";
import CustomIntro from "../../Components/Screen/Home/CustomIntro";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const HomeScreen = ({ navigation: { navigate } }) => {
  const loginContext = useContext(LoginContext);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        let response = await axios.get(`${API_URL}products/newProducts`);
        setNewProducts(response.data.newProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNewProducts();
  }, []);
  //header for the loggedin users
  const LogOut = (
    <View style={styles.upperContainer}>
      <TouchableOpacity onPress={() => navigate("Cart", { test: 123 })}>
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
