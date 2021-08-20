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
const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  return (
    <Form width={mobileWidth - 40} height={380}>
      <SubHeader title="Change Password" width={300} />
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Enter Your Password"
        type="password"
      />
      <Input
        value={newPassword}
        onChangeText={(password) => setNewPassword(password)}
        placeholder="Enter Your New Password"
        type="password"
      />
      <Input
        value={confirmPassword}
        onChangeText={(password) => setConfirmPassword(password)}
        placeholder="Confirm Your New Password"
        type="password"
      />
      <View style={styles.btnContainer}>
        <FormAppButton title="Cancel" type="Cancel" width={120} />
        <FormAppButton title="Update" type="Submit" width={120} />
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
});
export default ChangePasswordForm;
