import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";

const ChangePasswordForm = ({ email, navigation, errorMessageHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  const submitHandler = async () => {
    const email = await SecureStore.getItemAsync("user_email");
    if (newPassword === confirmPassword) {
      try {
        const response = await axios.post(`${API_URL}customer/changePassword`, {
          password,
          newPassword,
          email,
        });
        if (response.status === 200) {
          setShowModal((prevState) => !prevState);
          setPassword("");
          setNewPassword("");
          setConfirmPassword("");
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    } else {
      errorMessageHandler(
        "Entered two new passwords does not match,with each other.please try again"
      );
    }
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Form width={mobileWidth - 40} height={400}>
        <SubHeader title="Change Password" width={300} />
        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Enter Your Password"
          type="password"
        />
        <Input
          value={newPassword}
          onChangeText={(password) => setNewPassword(password)}
          placeholder="Enter Your New Password"
          type="password"
        />
        <Input
          value={confirmPassword}
          onChangeText={(password) => setConfirmPassword(password)}
          placeholder="Confirm Your New Password"
          type="password"
        />
        <View style={styles.btnContainer}>
          <FormAppButton title="Cancel" type="Cancel" width={120} />
          <FormAppButton
            title="Update"
            type="Submit"
            width={120}
            onPress={submitHandler}
          />
        </View>
      </Form>
      <PopUpConfirmationModal visible={showModal}>
        <AntDesign
          name="closecircleo"
          size={24}
          color="#F00"
          style={styles.closeIcon}
          onPress={() => setShowModal((prevState) => !prevState)}
        />
        <Text style={styles.confirmationText}>
          Your Account Password has been successfully changed.
        </Text>
        <View style={styles.btnContainer}>
          <FormAppButton
            title="OK"
            type="Submit"
            width={100}
            onPress={() => setShowModal((prevState) => !prevState)}
          />
        </View>
      </PopUpConfirmationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: 17,
    fontWeight: "bold",
    width: 200,
  },
  btnContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: -18,
    marginRight: 5,
    marginBottom: 0,
  },
});
export default ChangePasswordForm;
