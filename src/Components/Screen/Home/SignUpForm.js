import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const SignUpForm = () => {
  return (
    <Form type="SignUp">
      <SubHeader title="Create Account" />
      <Input placeholder="Name" type="string" />
      <Input placeholder="UserName" type="string" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Contact No" type="string" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Sign Up" />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({});
export default SignUpForm;
