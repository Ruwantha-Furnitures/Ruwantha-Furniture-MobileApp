import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";

const ForgotPassword = () => {
  return (
    <Form width={415} height={360}>
      <SubHeader title="Forgot Password" />
      <View style={styles.textContainer}>
        <Text>
          Please enter your login email address below and we will send you the
          instructions
        </Text>
      </View>
      <Input placeholder="enter yout email address" type="email" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Recover Password" width={200} />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
export default ForgotPassword;
