import React from "react";
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

const AboutUsScreen = ({ navigation: { navigate } }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.LoginHeader}
          onPress={() => navigate("Login")}
        >
          <Text style={styles.Login}>Log In</Text>
        </TouchableOpacity>
        <Header />
        <Intro />
        <Info />
        <WebMobileAppIntro />
        <Contact />
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
  Login: {
    alignSelf: "flex-end",
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  LoginHeader: {
    marginTop: 5,
  },
});

export default AboutUsScreen;
