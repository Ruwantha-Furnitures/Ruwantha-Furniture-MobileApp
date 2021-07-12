import React, { useState, useContext, useEffect } from "react";
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
import { AuthContext } from "../Components/Context/AuthContext";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const UserProfileScreen = ({ navigation: { navigate } }) => {
  const [currentView, setCurrentView] = useState("My Profile");
  const { userToken, setUserToken } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const [showModal, setShowModal] = useState(false);

  const onChangeNav = (header) => {
    setCurrentView(header);
  };

  useEffect(() => {
    const result = async () => {
      try {
        let email = await SecureStore.getItemAsync("user_email");
        let accID = await SecureStore.getItemAsync("user_accountID");
        let response = await axios.get(
          `http://192.168.8.210:3002/armagic/api/customer/viewprofile/${accID}`
        );
        if (response.data.auth === true) {
          const { name, address, telephone } = response.data;
          const data = { email, name, address, telephone };
          setUserData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    result();
    // return () => result;
  }, []);

  const editProfileHandler = async (data) => {
    try {
      let accID = await SecureStore.getItemAsync("user_accountID");
      let email = await SecureStore.getItemAsync("user_email");
      let res = await axios.put(
        `http://192.168.8.210:3002/armagic/api/customer/viewprofile/${accID}`,
        { data }
      );
      if (res.data.status === "Successful") {
        const { name, address, telephone } = res.data;
        const updatedUserDetails = { email, name, address, telephone };
        setUserData(() => updatedUserDetails);
        console.log(userData);
      } else {
        console.log("Data has not been updated");
      }
    } catch (error) {}
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        {LogOut}
        <Header />
        <NavProfile currentView={currentView} onChangeNav={onChangeNav} />
        {currentView === "My Profile" && (
          <ViewProfile onChangeNav={onChangeNav} userData={userData} />
        )}
        {currentView === "My Purchases" && <MyPurchases />}
        {currentView === "Edit Profile" && (
          <EditProfile
            userData={userData}
            editProfileHandler={editProfileHandler}
          />
        )}
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
  // Login: {
  //   color: "#FFF",
  //   fontSize: 28,
  //   letterSpacing: 5,
  // },
  LoginHeader: {
    marginTop: 5,
  },
  upperContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 15,
    marginRight: 10,
  },
  cart: {
    marginRight: 15,
    marginTop: 8,
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
export default UserProfileScreen;
