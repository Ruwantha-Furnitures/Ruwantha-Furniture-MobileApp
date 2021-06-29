import React from "react";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import { View } from "react-native";
const Contact = () => {
  return (
    <Form width={415} height={520}>
      <SubHeader title="Contact Us" width={200} />
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
