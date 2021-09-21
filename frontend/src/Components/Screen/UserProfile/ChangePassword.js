import React, { useState, useEffect } from "react";
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

const fontScale = Dimensions.get("window").fontScale;
const mobileWidth = Dimensions.get("window").width;

const ChangePasswordForm = ({ email, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [currentPasswordMismatch, setCurrentPasswordMismatch] = useState(false);
  const [enterNewPassword, setEnterNewPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  const submitHandler = async () => {
    let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setInvalidPassword(false);
    setCurrentPasswordMismatch(false);
    setEnterNewPassword(false);
    setWrongPassword(false);
    const email = await SecureStore.getItemAsync("user_email");
    if (password === "" || newPassword === "" || confirmPassword === "") {
      setErrorStatus(true);
    } else if (regPassword.test(newPassword) === false) {
      setWrongPassword(true);
    } else {
      if (newPassword === confirmPassword) {
        try {
          const response = await axios.post(
            `${API_URL}customer/changePassword`,
            {
              password,
              newPassword,
              email,
            }
          );
          if (response.status === 200) {
            setShowModal((prevState) => !prevState);
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
          }
        } catch (error) {
          if (error.message === "Request failed with status code 501") {
            setEnterNewPassword(true);
          } else {
            setCurrentPasswordMismatch(true);
          }
        }
      } else {
        setInvalidPassword(true);
      }
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => setErrorStatus(false), 3 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorStatus]);

  const passwordSuccessResponse = (
    <PopUpConfirmationModal visible={showModal}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
        onPress={() => setShowModal((prevState) => !prevState)}
      />
      <Text style={styles.confirmationTextTwo}>
        Your Account Password has been successfully changed.
      </Text>
      <View style={{ alignSelf: "flex-end", marginTop: 20 }}>
        <FormAppButton
          title="OK"
          type="Submit"
          width={80}
          onPress={() => setShowModal((prevState) => !prevState)}
        />
      </View>
    </PopUpConfirmationModal>
  );

  const fieldsNotCompletedPopUp = (
    <PopUpConfirmationModal visible={errorStatus}>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="exclamationcircle" size={24} color="red" />
        <Text style={styles.confirmationText}>
          Please enter the required fields
        </Text>
      </View>
    </PopUpConfirmationModal>
  );

  const passwordMismatchPopUp = (
    <PopUpConfirmationModal visible={currentPasswordMismatch}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
        onPress={() => setCurrentPasswordMismatch((prevState) => !prevState)}
      />
      <Text style={styles.confirmationTextTwo}>
        Your entered current password does not match with your existing
        password.
      </Text>
      <View style={{ alignSelf: "flex-end", marginTop: 20 }}>
        <FormAppButton
          title="OK"
          type="Submit"
          width={80}
          onPress={() => setCurrentPasswordMismatch((prevState) => !prevState)}
        />
      </View>
    </PopUpConfirmationModal>
  );

  const sameNewCurPasswordPopup = (
    <PopUpConfirmationModal visible={enterNewPassword}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
        onPress={() => setEnterNewPassword((prevState) => !prevState)}
      />
      <Text style={styles.confirmationTextTwo}>
        Please Don't Include your current password as your new password,enter a
        different password!
      </Text>
      <View style={{ alignSelf: "flex-end", marginTop: 20 }}>
        <FormAppButton
          title="OK"
          type="Submit"
          width={80}
          onPress={() => setEnterNewPassword((prevState) => !prevState)}
        />
      </View>
    </PopUpConfirmationModal>
  );

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
        {invalidPassword && (
          <Text style={styles.errorMessage}>
            Entered two new passwords does not match,with each other.please try
            again
          </Text>
        )}
        {wrongPassword && (
          <Text style={styles.errorMessagePassword}>
            ** Use at least one lowercase,uppercase and digit.Minimum length is
            6 characterss
          </Text>
        )}
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
      {passwordSuccessResponse}
      {fieldsNotCompletedPopUp}
      {passwordMismatchPopUp}
      {sameNewCurPasswordPopup}
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
  confirmationText: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 20 / fontScale,
    marginLeft: 15,
    marginRight: 5,
    color: "#f40",
  },
  confirmationTextTwo: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 18 / fontScale,
    marginLeft: 15,
    marginRight: 5,
    color: "black",
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: mobileWidth - 60,
  },
  errorMessagePassword: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: mobileWidth - 60,
  },
});
export default ChangePasswordForm;
