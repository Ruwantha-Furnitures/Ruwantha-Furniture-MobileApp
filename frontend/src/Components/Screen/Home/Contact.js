import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [details, setDetails] = useState("");

  const messageSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}customer/message`, {
        first_name: firstName,
        last_name: lastName,
        email,
        contact_number: telephone,
        details,
      });
      if (response.status === 200) {
        console.log(response.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setTelephone("");
        setDetails("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ marginLeft: -5 }}>
      <Form width={mobileWidth - 30} height={600}>
        <SubHeader title="Customize Your Furniture" width={mobileWidth + 15} />
        <Input
          placeholder="Fist Name"
          type="string"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Input
          placeholder="Last Name"
          type="string"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Input
          placeholder="Telephone"
          type="number"
          value={telephone}
          onChangeText={(telephone) => setTelephone(telephone)}
        />
        <Input
          placeholder="Email"
          type="string"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder="Description"
          name="textarea"
          type="string"
          value={details}
          onChangeText={(details) => setDetails(details)}
        />
        <View style={styles.btnContainer}>
          <FormAppButton title="Cancel" width={110} />
          <FormAppButton
            type="Submit"
            title="Submit"
            onPress={messageSubmit}
            width={110}
          />
        </View>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    marginVertical: 20,
    flexDirection: "row",
  },
});

export default Contact;
