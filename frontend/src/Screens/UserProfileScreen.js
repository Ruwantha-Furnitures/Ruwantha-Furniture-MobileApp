import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../Components/Header/Header";
import NavProfile from "../Components/Screen/UserProfile/NavProfile";
import ViewProfile from "../Components/Screen/UserProfile/ViewProfile";
import MyPurchases from "../Components/Screen/UserProfile/MyPurchases";
import EditProfile from "../Components/Screen/UserProfile/EditProfile";

const UserProfileScreen = ({ navigation: { navigate } }) => {
  const [currentView, setCurrentView] = useState("My Profile");

  const onChangeNav = (header) => {
    setCurrentView(header);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
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
            style={styles.LoginHeader}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.Login}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Header />
        <NavProfile currentView={currentView} onChangeNav={onChangeNav} />
        {currentView === "My Profile" && (
          <ViewProfile onChangeNav={onChangeNav} />
        )}
        {currentView === "My Purchases" && <MyPurchases />}
        {currentView === "Edit Profile" && <EditProfile />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    minHeight: 1000,
  },
  Login: {
    color: "#FB9F3C",
    fontSize: 28,
    marginRight: 20,
    letterSpacing: 5,
  },
  LoginHeader: {
    marginTop: 5,
  },
  upperContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 15,
  },
  cart: {
    marginRight: 15,
    marginTop: 8,
  },
});
export default UserProfileScreen;
