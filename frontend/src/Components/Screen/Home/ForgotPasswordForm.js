import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;
const ForgotPassword = ({ navigation, errorMessageHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const deleteHandler = async () => {
    try {
      const response = await axios.post(`${API_URL}customer/passwordRecovery`, {
        email,
      });

      if (response.status === 200) {
        setShowModal((prevState) => !prevState);
        navigation.navigate("Password Recovery", { email });
      }
    } catch (error) {
      errorMessageHandler(
        "Entered email is not a registered email,please register and try again"
      );
    }
  };

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
      <Input
        placeholder="enter your email address"
        type="email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton
          title="Recover Password"
          width={220}
          onPress={deleteHandler}
        />
      </View>
      <PopUpConfirmationModal visible={showModal}>
        <AntDesign
          name="closecircleo"
          size={24}
          color="#F00"
          style={styles.closeIcon}
          onPress={deleteHandler}
        />
        <MaterialIcons
          name="mark-email-read"
          size={80}
          color="#B89068"
          style={styles.mailIcon}
        />
        <Text style={styles.confirmationText}>We sent an email </Text>
        <Text style={styles.confirmationTextTwo}>to your account</Text>
        <Text style={styles.confirmationBody}>
          Please login into your email account and click on the link we have
          sent to reset your password.
        </Text>
      </PopUpConfirmationModal>
    </Form>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  confirmationText: {
    fontWeight: "bold",
    fontSize: 30 / fontScale,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  confirmationTextTwo: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 30 / fontScale,
    marginLeft: 15,
    marginRight: 5,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: -18,
    marginRight: 5,
    marginBottom: 0,
  },
  confirmationBody: {
    marginTop: 25,
    fontSize: 15,
  },
  mailIcon: {
    alignSelf: "center",
  },
});
export default ForgotPassword;
