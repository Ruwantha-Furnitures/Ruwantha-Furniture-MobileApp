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
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";

const ChangePasswordForm = ({ email, navigation, errorMessageHandler }) => {
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
          Alert.alert("Your Password has been updated successfully");
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
});
export default ChangePasswordForm;
