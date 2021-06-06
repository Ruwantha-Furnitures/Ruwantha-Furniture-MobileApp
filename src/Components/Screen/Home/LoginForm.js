import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const LoginForm = ({ navigation }) => {
  return (
    <Form type="login">
      <SubHeader title="Login Form" />
      <Input placeholder="email or username" type="email" />
      <Input placeholder="password" type="password" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Log In" />
      </View>
      <TouchableOpacity
        style={{ alignSelf: "center", fontSize: 18 }}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.signUp}>Don't have an account</Text>
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", fontSize: 15 }}>Forgot Password</Text>
    </Form>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: 17,
    fontWeight: "bold",
    width: 200,
  },
});
export default LoginForm;
