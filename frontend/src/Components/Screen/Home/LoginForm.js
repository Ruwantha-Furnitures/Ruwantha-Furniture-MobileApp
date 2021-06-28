import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const LoginForm = ({ navigation }) => {
  return (
    <Form width={415} height={380}>
      <SubHeader title="Login Form" />
      <Input placeholder="email or username" type="email" />
      <Input placeholder="password" type="password" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Login" width={120} />
      </View>
      <TouchableOpacity
        style={{ alignSelf: "center", fontSize: 18 }}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.signUp}>Don't have an account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignSelf: "center", fontSize: 18 }}
        onPress={() => navigation.navigate("Forgot Password")}
      >
        <Text style={{ alignSelf: "center", fontSize: 15 }}>
          Forgot Password
        </Text>
      </TouchableOpacity>
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
