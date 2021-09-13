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

const LoginForm = ({ navigation, loginHandler }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const submitHandler = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(userEmail) === false) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      loginHandler({ userEmail, password });
    }
  };

  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;

  return (
    <Form width={mobileWidth - 40} height={380}>
      <SubHeader title="LogIn" width={100} />
      <Input
        value={userEmail}
        onChangeText={(userEmail) => setUserEmail(userEmail)}
        placeholder="email"
        type="email"
      />

      {invalidEmail && (
        <Text style={styles.errorMessage}>
          Please enter a valid email address
        </Text>
      )}
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="password"
        type="password"
      />
      <View style={styles.btnContainer}>
        <FormAppButton
          title="Cancel"
          type="Cancel"
          width={120}
          onPress={submitHandler}
        />
        <FormAppButton
          title="Submit"
          type="Submit"
          width={120}
          onPress={submitHandler}
        />
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
  btnContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});
export default LoginForm;
