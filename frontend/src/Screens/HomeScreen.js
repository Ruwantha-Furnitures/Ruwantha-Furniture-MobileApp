import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Components/Header/Header";
import Contact from "../Components/Screen/Home/Contact";
import Intro from "../Components/Screen/Home/Intro";
import NewArrival from "../Components/Screen/Home/NewArrival";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.LoginHeader}
          onPress={() => navigate("Login")}
        >
          <Text style={styles.Login}>LogIn</Text>
        </TouchableOpacity>
        <Header />
        <Intro />
        <NewArrival />
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

export default HomeScreen;
