import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const LoginForm = ({ navigation, loginHandler }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    loginHandler({ userEmail, password });
  };

  return (
    <Form width={415} height={380}>
      <SubHeader title="LogIn" width={100} />
      <Input
        value={userEmail}
        onChangeText={(userEmail) => setUserEmail(userEmail)}
        placeholder="email"
        type="email"
      />
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="password"
        type="password"
      />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Login" width={120} onPress={submitHandler} />
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
