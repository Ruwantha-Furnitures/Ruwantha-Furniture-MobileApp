import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Form from "../../UI/Form";
import Input from "../../UI/Input";

const LoginForm = () => {
  return (
    <Form type="login">
      <SubHeader title="Login Form" />
      <Input placeholder="email or username" type="email" />
      <Input placeholder="password" type="password" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <AppButton title="Log In" size="lg" />
      </View>
      <Text style={{ alignSelf: "center", fontSize: 18 }}>
        Don't have an account ?
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 15 }}>Forgot Password</Text>
    </Form>
  );
};

const styles = StyleSheet.create({});
export default LoginForm;
