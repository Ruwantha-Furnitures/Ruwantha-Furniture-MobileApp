import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";

const ViewProfile = ({ onChangeNav }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <View style={styles.viewProfile}>
      <Form width={415} height={500}>
        <SubHeader title="User Profile" width={200} />
        <Input placeholder="Ayomal Praveen" type="email" />
        <Input placeholder="ayomalpraveen33@gmail.com" type="email" />
        <Input placeholder="No.54,Negombo road,Dankotuwa" type="string" />
        <Input placeholder="0776054853" type="string" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <FormAppButton
            title="Delete Profile"
            width={175}
            onPress={deleteHandler}
          />
          <FormAppButton
            type="Submit"
            title="Edit Profile"
            onPress={() => onChangeNav("Edit Profile")}
            width={160}
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
          <FormAppButton title="Cancel" width={120} onPress={deleteHandler} />
          <FormAppButton title="Submit" type="Submit" width={120} />
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
