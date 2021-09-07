import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Screen/AboutUs/Contact";
import Info from "../../Components/Screen/AboutUs/Info";
import Map from "../../Components/Screen/AboutUs/Map";
import Intro from "../../Components/Screen/AboutUs/Intro";
import WebMobileAppIntro from "../../Components/Screen/AboutUs/WebMobileAppIntro";
import PopUpConfirmationModal from "../../Components/UI/PopUpConfirmationModal";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { CartContext } from "../../Components/Reducers/cartReducer";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const AboutUsScreen = ({ navigation: { navigate } }) => {
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const contactUsHandler = async (data) => {
    try {
      const { first_name, last_name, email, contact_number, details } = data;
      const response = await axios.post(`${API_URL}customer/message`, {
        first_name,
        last_name,
        email,
        contact_number,
        details,
      });
      if (response.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };

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
        <Intro />
        <Info />
        <WebMobileAppIntro />
        <Contact contactUsHandler={contactUsHandler} />
        <PopUpConfirmationModal visible={showModal}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="#F00"
            style={styles.closeIcon}
            onPress={deleteHandler}
          />
          <Text style={styles.confirmationText}>
            Thank you for contacting us, Your message has been recorderd.
          </Text>
        </PopUpConfirmationModal>
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
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: -18,
    marginRight: 5,
    marginBottom: 0,
  },
  confirmationText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 25,
  },
});

export default AboutUsScreen;
