import React, { useState } from "react";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import { View, StyleSheet, Dimensions } from "react-native";

const mobileWidth = Dimensions.get("window").width;

const Contact = ({ contactUsHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
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
  };

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
    </Form>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default Contact;
