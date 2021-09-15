import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "react-native-dotenv";
import { LoginContext } from "../../Reducers/loginReducer";
import { CartContext } from "../../Reducers/cartReducer";

import axios from "axios";
import * as SecureStore from "expo-secure-store";

const ViewProfile = ({ onChangeNav, userData, navigate }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);

  const mobileWidth = Dimensions.get("window").width;

  useEffect(() => {
    if (userData) {
      setEmail(() => userData.email);
      setFirstName(() => userData.first_name);
      setLastName(() => userData.last_name);
      setAddress(() => userData.address);
      setTelephone(() => userData.telephone);
      console.log(userData.telephone);
    }
  }, [userData]);

  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const customerDeleteHandler = async () => {
    setShowModal((prevState) => !prevState);
    const customerId = await SecureStore.getItemAsync("customer_id");
    const accountId = await SecureStore.getItemAsync("user_accountID");
    try {
      const response = await axios.put(
        `${API_URL}customer/deleteProfile/${customerId}/${accountId}`
      );
      if (response.status === 200) {
        console.log(response.data.message);
        SecureStore.deleteItemAsync("numberOfProducts");
        SecureStore.deleteItemAsync("customer_id");
        loginContext.loginDispatch({ type: "logout" });
        cartContext.dispatchCart({ type: "logout" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.viewProfile}>
      <Form width={mobileWidth - 1} height={520}>
        <SubHeader title="User Profile" width={200} />
        <Input editable={false} value={firstName} type="email" />
        <Input editable={false} value={lastName} type="email" />
        <Input editable={false} value={email} type="email" />
        <Input editable={false} value={address} type="string" />
        <Input editable={false} value={telephone.toString()} type="string" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <FormAppButton
            title="Delete Profile"
            width={135}
            onPress={deleteHandler}
          />
          <FormAppButton
            type="Submit"
            title="Edit Profile"
            onPress={() => onChangeNav("Edit Profile")}
            width={120}
          />
        </View>
      </Form>
      <PopUpConfirmationModal visible={showModal}>
        <AntDesign
          name="closecircleo"
          size={24}
          color="#F00"
          style={styles.closeIcon}
          onPress={deleteHandler}
        />
        <Text style={styles.confirmationText}>
          Are you sure that you want to delete your account?
        </Text>
        <View style={styles.btnContainer}>
          <FormAppButton title="No" width={100} onPress={deleteHandler} />
          <FormAppButton
            title="Yes"
            type="Submit"
            width={100}
            onPress={customerDeleteHandler}
          />
        </View>
      </PopUpConfirmationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  viewProfile: {
    marginTop: 20,
    marginLeft: -10,
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
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
  },
});
export default ViewProfile;
