import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../Components/Header/Header";
import ChangePasswordForm from "../../Components/Screen/Home/ChangePasswordForm";
import ErrorModal from "../../Components/UI/ErrorModal";

const PasswordRecoveryScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessageHandler = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  useEffect(() => {
    let timer = setTimeout(() => setErrorMessage(""), 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorMessage]);

  return (
    <View style={styles.viewContainer}>
      {errorMessage.length > 0 && <ErrorModal errorMessage={errorMessage} />}

      <Header />
      <ChangePasswordForm
        navigation={navigation}
        email={email}
        errorMessageHandler={errorMessageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
});

export default PasswordRecoveryScreen;
