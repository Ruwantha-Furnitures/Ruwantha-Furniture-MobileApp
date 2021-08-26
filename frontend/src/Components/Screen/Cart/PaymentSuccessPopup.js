import { StyleSheet, Text, View } from "react-native";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const PaymentSuccessPopup = () => {
  useEffect(() => {}, []);
  return (
    <PopUpConfirmationModal visible={showModal}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
      />
      <MaterialIcons
        name="payments"
        size={80}
        color="#B89068"
        style={styles.mailIcon}
      />
      <Text style={styles.confirmationText}>Payment Successful</Text>
    </PopUpConfirmationModal>
  );
};

export default PaymentSuccessPopup;

const styles = StyleSheet.create({
  mailIcon: {
    alignSelf: "center",
  },

  confirmationText: {
    fontWeight: "bold",
    fontSize: 33,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  confirmationTextTwo: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 34,
    marginLeft: 50,
    marginRight: 5,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: -18,
    marginRight: 5,
    marginBottom: 0,
  },
});
