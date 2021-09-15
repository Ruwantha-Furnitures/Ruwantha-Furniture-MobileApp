import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import Checkbox from "expo-checkbox";
import TermsConditionsModal from "../../UI/TermsConditionsModal";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;

const SignUpForm = ({ signUpHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false); //to check whether the password & confirm password macthes
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [mobileInValidity, setMobileInValidity] = useState(false);
  const [passwordInValidity, setPasswordInValidity] = useState(false);

  const submitHandler = () => {
    setInvalidEmail(false);
    setErrorMessage(false);
    setMobileInValidity(false);
    setPasswordInValidity(false);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let regMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (
      confirmPassword !== password &&
      reg.test(email.trim()) === false &&
      regMobile.test(contactNo)
    ) {
      setErrorMessage(true);
      setInvalidEmail(true);
      setMobileInValidity(true);
    } else if (
      confirmPassword !== password &&
      reg.test(email.trim()) === false
    ) {
      setErrorMessage(true);
      setInvalidEmail(true);
    } else if (
      reg.test(email.trim()) === false &&
      regMobile.test(contactNo) === false
    ) {
      setInvalidEmail(true);
      setMobileInValidity(true);
    } else if (
      confirmPassword !== password &&
      regMobile.test(contactNo) === false
    ) {
      setErrorMessage(true);
      setMobileInValidity(true);
    } else if (confirmPassword !== password) {
      setErrorMessage(true);
    } else if (reg.test(email.trim()) === false) {
      setInvalidEmail(true);
    } else if (regMobile.test(contactNo) === false) {
      setMobileInValidity(true);
    } else if (regPassword.test(password) === false) {
      setPasswordInValidity(true);
    } else {
      setErrorMessage(false);
      signUpHandler({
        firstName,
        lastName,
        email,
        address,
        contactNo,
        password,
        isChecked,
      });
    }
  };

  return (
    <Form type="SignUp" width={mobileWidth - 40}>
      <SubHeader title="Create Account" width={300} />
      <Input
        placeholder="First Name"
        type="string"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <Input
        placeholder="Last Name"
        type="string"
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
      />
      <Input
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        type="email"
      />
      {invalidEmail && (
        <Text style={styles.errorMessage}>
          Please enter a valid email address
        </Text>
      )}
      <Input
        value={address}
        onChangeText={(address) => setAddress(address)}
        placeholder="Address"
        type="string"
      />
      <Input
        value={contactNo}
        onChangeText={(contact) => setContactNo(contact)}
        placeholder="Contact No"
        type="string"
        keyboard="telephone"
      />
      {mobileInValidity && (
        <Text style={styles.errorMessage}>
          Please enter a valid contact number
        </Text>
      )}
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        type="password"
      />
      <Input
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholder="Confirm Password"
        type="password"
      />
      {errorMessage && (
        <Text style={styles.errorMessage}>
          Entered two passwords does not match,with each other.please try again
        </Text>
      )}
      {passwordInValidity && (
        <Text style={styles.errorMessagePassword}>
          ** Use at least one lowercase,uppercase and digit.Minimum length is 6
          characterss
        </Text>
      )}
      <View style={styles.conditions}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <TermsConditionsModal />
      </View>
      <View style={styles.btnContainer}>
        <FormAppButton
          type="Cancel"
          title="Cancel"
          onPress={submitHandler}
          width={120}
        />
        <FormAppButton
          type="Submit"
          title="Submit"
          onPress={submitHandler}
          width={120}
        />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: 370,
  },

  errorMessagePassword: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: mobileWidth - 60,
  },
  conditions: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 20,
    justifyContent: "center",
  },
  checkbox: {
    marginTop: 3,
  },
});
export default SignUpForm;
