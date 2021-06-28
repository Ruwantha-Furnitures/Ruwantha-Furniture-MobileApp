import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const Contact = () => {
  return (
    <Form width={415} height={550}>
      <SubHeader title="Customize Your Product" width={400} />
      <Input placeholder="Name" type="string" />
      <Input placeholder="Telephone" type="number" />
      <Input placeholder="Email" type="string" />
      <Input placeholder="Description" name="textarea" type="string" />
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <FormAppButton title="Submit" width={110} />
      </View>
    </Form>
  );
};

export default Contact;

const styles = StyleSheet.create({});
