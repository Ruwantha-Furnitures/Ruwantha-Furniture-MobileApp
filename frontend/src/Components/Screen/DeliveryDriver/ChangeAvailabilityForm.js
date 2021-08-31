//ChangeAvailabilityForm.js
//Path:frontend/Components/DeliveryDriver/ChangeAvailabilityForm.js

import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import AppButton from "../../UI/AppButton";
import SubHeader from "../../Header/SubHeader";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

const ChangeAvailabilityForm = () => {
  const mobileWidth = Dimensions.get("window").width;
  const cardWidth = mobileWidth - 40;
  const [firstName, setFirstName] = useState("Nuwan");
  const [lastName, setLastName] = useState("Fernando");
  const [email, setEmail] = useState("nuwanfernando@gmail.com");
  const [phone, setPhone] = useState("0777604473");
  const [availability, setAvailability] = useState("1");
  return (
    <Form width={mobileWidth - 40} height={560}>
      <Text style={styles.subHeaderOne}>Delivery Driver</Text>
      <Text style={styles.subHeaderTwo}>Availability</Text>
      <View style={styles.name}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.nameInput}>{firstName}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.nameInput}>{lastName}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.nameInput}>{email}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.nameInput}>{phone}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Availability</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E7E5E9",
            padding: 2,
            marginLeft: 20,
            dropdownIconColor: "#000",
            backgroundColor: "#E7E5E9",
          }}
        >
          <Picker
            style={styles.nameSelect}
            selectedValue={availability}
            onValueChange={(itemValue, itemIndex) => setAvailability(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Available" value="1" />
            <Picker.Item label="Not Available" value="0" />
          </Picker>
          <AntDesign
            name="caretdown"
            size={22}
            color="black"
            style={{ position: "absolute", top: 14, right: 18 }}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Change Availability"
          size="lg"
          type="Submit"
          width={220}
        />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  subheader: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 20,
    marginTop: 20,
    letterSpacing: 0.5,
    width: 300,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  name: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    paddingVertical: 10,
    width: 120,
  },
  nameInput: {
    backgroundColor: "#E7E5E9",
    borderRadius: 30,
    paddingHorizontal: 15,
    letterSpacing: 1,
    paddingVertical: 15,
    fontSize: 15,
    marginLeft: 15,
    maxWidth: 300,
    color: "grey",
  },

  nameSelect: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
    letterSpacing: 1,
    fontSize: 15,
    minWidth: 140,
    minHeight: 20,
    maxWidth: 230,
    color: "#000",
    fontWeight: "bold",
  },

  btnContainer: {
    flexDirection: "row",
    marginVertical: 35,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  subHeaderOne: {
    letterSpacing: 3,
    marginTop: 15,
    fontSize: 25,
    marginLeft: 50,
    fontWeight: "bold",
    alignSelf: "center",
    width: 250,
  },
  subHeaderTwo: {
    letterSpacing: 3,
    marginBottom: 20,
    fontSize: 25,
    marginLeft: 85,
    fontWeight: "bold",
    alignSelf: "center",
    width: 250,
  },
});
export default ChangeAvailabilityForm;
