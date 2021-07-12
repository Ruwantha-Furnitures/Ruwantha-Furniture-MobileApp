import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";

const ViewProfile = ({ onChangeNav, userData }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (userData) {
      setEmail(() => userData.email);
      setName(() => userData.name);
      setAddress(() => userData.address);
      setTelephone(() => userData.telephone);
    }
  }, [userData]);

  const deleteHandler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <View style={styles.viewProfile}>
      <Form width={415} height={500}>
        <SubHeader title="User Profile" width={200} />
        <Input editable={false} value={name} type="email" />
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
          <FormAppButton title="No" width={100} onPress={deleteHandler} />
          <FormAppButton title="Yes" type="Submit" width={100} />
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
