import React, { useState, useEffect } from "react";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";

const mobileWidth = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

const Contact = ({ contactUsHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [errorStatus, setErrorStatus] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const submitHandler = () => {
    setInvalidEmail(false);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      telephone === "" ||
      description === ""
    ) {
      setErrorStatus(true);
    } else if (reg.test(email.trim()) === false) {
      setInvalidEmail(true);
    } else {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email,
        contact_number: telephone,
        details: description,
      };
      setFirstName("");
      setLastName("");
      setTelephone("");
      setTelephone("");
      setEmail("");
      setDescription("");
      contactUsHandler(data);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => setErrorStatus(false), 3 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorStatus]);

  return (
    <Form width={mobileWidth - 40} height={600}>
      <SubHeader title="Contact Us" width={200} />
      <Input
        placeholder="First Name"
        type="string"
        onChangeText={(firstName) => setFirstName(firstName)}
        value={firstName}
      />
      <Input
        placeholder="Last Name"
        type="string"
        onChangeText={(lastName) => setLastName(lastName)}
        value={lastName}
      />
      <Input
        placeholder="Telephone"
        type="number"
        onChangeText={(telephone) => setTelephone(telephone)}
        value={telephone}
      />
      <Input
        placeholder="Email"
        type="string"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      {invalidEmail && (
        <Text style={styles.errorMessage}>
          Please enter a valid email address
        </Text>
      )}
      <Input
        placeholder="Description"
        name="textarea"
        type="string"
        onChangeText={(description) => setDescription(description)}
        value={description}
      />
      <View style={styles.btnContainer}>
        <FormAppButton title="Cancel" width={110} />
        <FormAppButton
          type="Submit"
          title="Submit"
          onPress={submitHandler}
          width={110}
        />
      </View>
      <PopUpConfirmationModal visible={errorStatus}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="exclamationcircle" size={24} color="red" />
          <Text style={styles.confirmationText}>
            Please enter the required fields
          </Text>
        </View>
      </PopUpConfirmationModal>
    </Form>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },

  confirmationText: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 20 / fontScale,
    marginLeft: 15,
    marginRight: 5,
    color: "#f40",
  },

  errorMessage: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: 370,
  },
});

export default Contact;
