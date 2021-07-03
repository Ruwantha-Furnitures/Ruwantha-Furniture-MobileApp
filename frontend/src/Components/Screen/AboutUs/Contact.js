import React from "react";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import SubHeader from "../../Header/SubHeader";
import { View, StyleSheet } from "react-native";
const Contact = () => {
  return (
    <Form width={415} height={520}>
      <SubHeader title="Contact Us" width={200} />
      <Input placeholder="Name" type="string" />
      <Input placeholder="Telephone" type="number" />
      <Input placeholder="Email" type="string" />
      <Input placeholder="Description" name="textarea" type="string" />
      <View style={styles.btnContainer}>
        <FormAppButton title="Cancel" width={110} />
        <FormAppButton type="Submit" title="Submit" width={110} />
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
