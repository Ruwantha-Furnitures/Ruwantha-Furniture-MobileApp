import React, { useState } from "react";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import { View, StyleSheet } from "react-native";
const Contact = ({ contactUsHandler }) => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    const data = { name, email, telephone, description };
    contactUsHandler(data);
  };

  return (
    <Form width={415} height={520}>
      <SubHeader title="Contact Us" width={200} />
      <Input
        placeholder="Name"
        type="string"
        onChangeText={(username) => setName(username)}
        value={name}
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
