import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Components/Header/Header";
import Contact from "../Components/Screen/AboutUs/Contact";
import Info from "../Components/Screen/AboutUs/Info";
import Map from "../Components/Screen/AboutUs/Map";
import Intro from "../Components/Screen/AboutUs/Intro";
import WebMobileAppIntro from "../Components/Screen/AboutUs/WebMobileAppIntro";
import { AuthContext } from "../Components/Context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const AboutUsScreen = ({ navigation: { navigate } }) => {
  const { userToken, setUserToken } = useContext(AuthContext);

  const contactUsHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://192.168.8.210:3002/armagic/api/contactus/",
        { data }
      );
      console.log(response.data.status);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Intro />
        <Info />
        <WebMobileAppIntro />
        <Contact contactUsHandler={contactUsHandler} />
        <Map />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
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
    paddingRight: 13,
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

export default AboutUsScreen;
