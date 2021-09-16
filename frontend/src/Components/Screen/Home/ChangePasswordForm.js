import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;

const ChangePasswordForm = ({ email, navigation, errorMessageHandler }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const submitHandler = async () => {
    let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setWrongPassword(false);
    if (password === "" || password === "" || confirmPassword === "") {
      errorMessageHandler("Please enter the required fields");
    } else if (regPassword.test(password) === false) {
      setWrongPassword(true);
    } else {
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            `${API_URL}customer/passwordRecovery/resetPassword`,
            {
              code,
              email,
              password,
            }
          );
          if (response.status === 200) {
            navigation.navigate("Home");
          }
        } catch (error) {
          errorMessageHandler(
            "Entered code is incorrect, please enter the code that was sent to your email address"
          );
        }
      } else {
        errorMessageHandler(
          "Entered two passwords does not match,with each other.please try again"
        );
      }
    }
  };

  return (
    <Form width={mobileWidth - 40} height={450}>
      <SubHeader title="Reset Password" width={300} />
      <View style={styles.textContainer}>
        <Text>
          You'll receive a code to reset your password, please enter it below.
        </Text>
      </View>
      <Input
        value={code}
        onChangeText={(code) => setCode(code)}
        placeholder="Enter Your Code"
        type="password"
      />
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Enter Your New Password"
        type="password"
      />
      {wrongPassword && (
        <Text style={styles.errorMessagePassword}>
          ** Use at least one lowercase,uppercase and digit.Minimum length is 6
          characterss
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
  errorMessagePassword: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: mobileWidth - 60,
  },
});
export default ChangePasswordForm;
