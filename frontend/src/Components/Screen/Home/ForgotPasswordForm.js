import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;
const ForgotPassword = () => {
  console.log(mobileWidth + "mobile");
  return (
    <Form width={mobileWidth - 40} height={360}>
      <SubHeader title="Password Recovery" width={mobileWidth - 92.5} />
      <View style={styles.textContainer}>
        <Text>
          Please enter your login email address below and we will send you the
          instructions
        </Text>
      </View>
      <Input placeholder="enter your email address" type="email" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Recover Password" width={220} />
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
