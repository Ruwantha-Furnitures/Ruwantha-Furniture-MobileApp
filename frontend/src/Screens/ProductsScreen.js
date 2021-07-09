import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

import Searchbar from "../Components/UI/SearchBar";
import Header from "../Components/Header/Header";
import Products from "../Components/Screen/Products/Products";
import { AuthContext } from "../Components/Context/AuthContext";
import { AntDesign } from "@expo/vector-icons";

let ScreenHeight = Dimensions.get("window").height;
let StatusBarHeight = StatusBar.currentHeight;

const ProductScreen = ({ navigation: { navigate } }) => {
  const { userToken, setUserToken } = useContext(AuthContext);

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
        onPress={() => setUserToken(null)}
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
        {userToken === null ? Login : LogOut}

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
  Login: {
    alignSelf: "flex-end",
    color: "#FFF",
    fontSize: 28,
    letterSpacing: 5,
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
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});

export default ProductScreen;
