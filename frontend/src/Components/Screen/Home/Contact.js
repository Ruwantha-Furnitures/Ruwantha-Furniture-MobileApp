import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const mobileWidth = Dimensions.get("window").width;

const Contact = () => {
  return (
    <Form width={mobileWidth - 40} height={550}>
      <SubHeader title="Customize Your Furniture" width={mobileWidth - 40} />
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
