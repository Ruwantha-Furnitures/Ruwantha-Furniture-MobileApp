import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "react-native-dotenv";
import axios from "axios";

const ViewProfile = ({ onChangeNav, userData }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

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
    const customerId = await SecureStore.getItemAsync(
      "customer_id",
      JSON.stringify(customerId)
    );
    const accountId = await SecureStore.setItemAsync(
      "user_accountID",
      JSON.stringify(response.data.accountId)
    );
  };

  return (
    <View style={styles.viewProfile}>
      <Form width={mobileWidth - 40} height={520}>
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
            width={165}
            onPress={deleteHandler}
          />
          <FormAppButton
            type="Submit"
            title="Edit Profile"
            onPress={() => onChangeNav("Edit Profile")}
            width={150}
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
