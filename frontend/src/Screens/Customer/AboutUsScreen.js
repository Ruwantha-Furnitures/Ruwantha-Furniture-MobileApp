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
import { AuthContext } from "../../Components/Context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const AboutUsScreen = ({ navigation: { navigate } }) => {
  const { userToken, setUserToken } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const contactUsHandler = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}contactus/`,
        { data }
      );
      console.log(response.data.status);
      if (response.data.status === "Successful") {
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
        <PopUpConfirmationModal visible={showModal}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="#F00"
            style={styles.closeIcon}
            onPress={deleteHandler}
          />
          <Text style={styles.confirmationText}>
            Thank you for your contacting us, Your message has been recorderd.
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
