import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
        <TouchableOpacity
          style={styles.LoginHeader}
          onPress={() => navigate("Login")}
        >
          <Text style={styles.Login}>Logout</Text>
        </TouchableOpacity>
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
