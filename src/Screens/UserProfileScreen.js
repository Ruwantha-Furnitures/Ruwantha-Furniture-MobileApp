import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import NavProfile from "../Components/Screen/UserProfile/NavProfile";
import ViewProfile from "../Components/Screen/UserProfile/ViewProfile";
const UserProfileScreen = ({ navigation: { navigate } }) => {
  const [currentView, setCurrentView] = useState("My Profile");

  //   const changeView = (requestedView) => {
  //     console.log(requestedView);
  //     setCurrentView(requestedView);
  //   };

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.LoginHeader}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.Login}>Log In</Text>
      </TouchableOpacity>
      <Header />
      <NavProfile navigate={navigate} currentView={currentView} />
      <ViewProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
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
export default UserProfileScreen;
