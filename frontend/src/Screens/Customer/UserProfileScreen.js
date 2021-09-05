import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "react-native-dotenv";
import Header from "../../Components/Header/Header";
import NavProfile from "../../Components/Screen/UserProfile/NavProfile";
import ViewProfile from "../../Components/Screen/UserProfile/ViewProfile";
import MyPurchases from "../../Components/Screen/UserProfile/MyPurchases";
import EditProfile from "../../Components/Screen/UserProfile/EditProfile";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import { CartContext } from "../../Components/Reducers/cartReducer";
import PopUpConfirmationModal from "../../Components/UI/PopUpConfirmationModal";
import FormAppButton from "../../Components/UI/FormAppButton";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const UserProfileScreen = ({ navigation: { navigate } }) => {
  const [currentView, setCurrentView] = useState("My Profile");
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);
  const [userData, setUserData] = useState();
  const [customerOrders, setCustomerOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onChangeNav = (header) => {
    setCurrentView(header);
  };

  useEffect(() => {
    const result = async () => {
      try {
        let email = await SecureStore.getItemAsync("user_email");
        let customerID = await SecureStore.getItemAsync("customer_id");
        let response = await axios.get(
          `${API_URL}customer/viewprofile/${customerID}`
        );
        if (response.data.auth === true) {
          const { first_name, address, telephone, last_name } = response.data;
          const data = { email, first_name, last_name, address, telephone };
          setUserData(data);
          let ordersResponse = await axios.get(
            `${API_URL}customer/purchaseOrders/${customerID}`
          );
          if (ordersResponse.status === 200) {
            const { orders } = ordersResponse.data;
            setCustomerOrders(orders);
          } else {
            console.log("error");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    result();
    // return () => result;
  }, [setUserData]);

  const editProfileHandler = async (data) => {
    try {
      setShowModal((prevState) => !prevState);
      let customerID = await SecureStore.getItemAsync("customer_id");
      let email = await SecureStore.getItemAsync("user_email");
      let res = await axios.put(
        `http://192.168.8.210:3002/armagic/api/customer/viewprofile/${customerID}`,
        { data }
      );
      if (res.data.status === "Successful") {
        const { firstName, lastName, address, telephone } = res.data;
        const updatedUserDetails = {
          email,
          first_name: firstName,
          last_name: lastName,
          address,
          telephone,
        };
        setUserData(updatedUserDetails);
      } else {
        console.log("Data has not been updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editConfirmationHandler = () => {
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        {LogOut}
        <Header />
        <NavProfile currentView={currentView} onChangeNav={onChangeNav} />
        {currentView === "My Profile" && (
          <ViewProfile
            onChangeNav={onChangeNav}
            userData={userData}
            navigate={navigate}
          />
        )}
        {currentView === "My Purchases" && customerOrders.length > 0 && (
          <MyPurchases customerOrders={customerOrders} />
        )}
        {currentView === "Edit Profile" && (
          <EditProfile
            userData={userData}
            editProfileHandler={editProfileHandler}
          />
        )}
        <PopUpConfirmationModal visible={showModal}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="#F00"
            style={styles.closeIcon}
            onPress={editConfirmationHandler}
          />
          <Text style={styles.confirmationText}>
            Your Account Details have been successfully updated
          </Text>
          <View style={styles.btnContainer}>
            <FormAppButton
              title="OK"
              type="Submit"
              width={100}
              onPress={editConfirmationHandler}
            />
          </View>
        </PopUpConfirmationModal>
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
    marginTop: 12,
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
  btnContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
  },
});
export default UserProfileScreen;
