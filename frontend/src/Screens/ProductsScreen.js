import React, { useContext } from "react";
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

import Searchbar from "../Components/UI/SearchBar";
import Header from "../Components/Header/Header";
import Products from "../Components/Screen/Products/Products";
import { AuthContext } from "../Components/Context/AuthContext";
import { AntDesign } from "@expo/vector-icons";

let ScreenHeight = Dimensions.get("window").height;
let StatusBarHeight = StatusBar.currentHeight;

const ProductScreen = ({ navigation: { navigate } }) => {
  const { userToken, setUserToken } = useContext(AuthContext);
  LogBox.ignoreAllLogs(); //Ignore all log notifications

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
