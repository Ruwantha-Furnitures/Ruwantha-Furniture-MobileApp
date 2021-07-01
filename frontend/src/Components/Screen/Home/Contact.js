import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const Contact = () => {
  return (
    <Form width={415} height={520}>
      <SubHeader title="Customize Your Product" width={400} />
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
    marginVertical: 20,
    flexDirection: "row",
  },
});

export default Contact;
