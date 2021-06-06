import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const Contact = () => {
  return (
    <Form width={415} height={520}>
      <SubHeader title="Contact Us" />
      <Input placeholder="Name" type="string" />
      <Input placeholder="Telephone" type="number" />
      <Input placeholder="Email" type="string" />
      <Input placeholder="Description" name="textarea" type="string" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Submit" />
      </View>
    </Form>
  );
};

export default Contact;

const styles = StyleSheet.create({});
