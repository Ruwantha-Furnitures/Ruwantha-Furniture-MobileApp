import React, { useState } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";

const PopUpConfirmationModal = ({ visible, children }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    elevation: 10,
  },
});

export default PopUpConfirmationModal;
