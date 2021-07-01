import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const SignUpForm = ({ signUpHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {
    signUpHandler({ name, email, address, contactNo, password });
  };

  return (
    <Form type="SignUp" width={415} height={585}>
      <SubHeader title="Create Account" width={300} />
      <Input
        placeholder="Name"
        type="string"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <Input
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        type="email"
      />
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
      />
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
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignUpForm;
