import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import FormAppButton from "../../UI/FormAppButton";
import { AntDesign } from "@expo/vector-icons";

const StatusPopup = ({ showModal, deleteHandler, changeStatus, order_id }) => {
  
  return (
    <PopUpConfirmationModal visible={showModal}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
        onPress={deleteHandler}
      />
      <Text style={styles.confirmationText}>
        Are you sure that you want to Change the Delivery Status ?
      </Text>
      <View style={styles.btnContainer}>
        <FormAppButton title="No" width={90} onPress={deleteHandler} />
        <FormAppButton
          title="Yes"
          type="Submit"
          width={90}
          onPress={() => {
            deleteHandler();
            changeStatus(order_id);
          }}
        />
      </View>
    </PopUpConfirmationModal>
  );
};

// //commit 2 line 39-57 style added
// const styles = StyleSheet.create({
//   closeIcon: {
//     alignSelf: "flex-end",
//     marginTop: -18,
//     marginRight: 5,
//     marginBottom: 0,
//   },
//   confirmationText: {
//     fontSize: 17,
//     fontWeight: "bold",
//     marginTop: 25,
//   },
//   btnContainer: {
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 30,
//     marginBottom: 10,
//   },
// });
// export default StatusPopup;

// //after all commits are finished above(copy paste whole page-without the comments) : commit 3 "StatusPopup done"