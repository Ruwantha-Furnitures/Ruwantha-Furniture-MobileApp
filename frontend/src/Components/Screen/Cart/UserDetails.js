import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import SubHeader from "../../Header/SubHeader";
import Input from "../../UI/Input";
import TermsConditionsModal from "../../UI/TermsConditionsModal";
import FormAppButton from "../../UI/FormAppButton";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
const mobileWidth = Dimensions.get("window").width;

const UserDetails = ({ districts }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryAmount, setDeliveryAmount] = useState("");
  const [district, setDistrict] = useState("");
  // useEffect(() => {
  //   console.log(districts);
  // }, []);

  const deliveryChargeHandler = (item) => {
    setDistrict(item.area);
    setDeliveryAmount(item.amount);
    console.log(district);
    console.log(deliveryAmount);
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <SubHeader title="Personal Information" width={mobileWidth / 1.3} />
        <Input placeholder="Enter Your First Name" />
        <Input placeholder="Enter Your Last Name" />
        <Input placeholder="Enter Your Telephone Number" />
      </React.Fragment>
      <React.Fragment>
        <SubHeader title="Shipping Details" width={mobileWidth / 1.3} />
        <Input placeholder="Enter Your Address" name="textarea" />
        <Picker
          style={styles.nameSelect}
          selectedValue={district}
          onValueChange={(itemValue, itemIndex) =>
            deliveryChargeHandler(itemValue)
          }
          mode="dropdown"
        >
          {districts.map((district) => (
            <Picker.Item
              label={district.area}
              value={district}
              key={district.id}
            />
          ))}
        </Picker>
      </React.Fragment>
      <View style={styles.conditions}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <TermsConditionsModal />
      </View>
      <View style={styles.btnContainer}>
        <FormAppButton title="Proceed To Payment" type="Submit" width={250} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  conditions: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
  },
  checkbox: {
    marginTop: 5,
    marginRight: 15,
  },
  btnContainer: {
    marginLeft: -15,
    alignSelf: "center",
    marginTop: 25,
  },

  nameSelect: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
    letterSpacing: 1,
    fontSize: 15,
    minWidth: 140,
    minHeight: 20,
    maxWidth: 230,
    marginLeft: 20,
    color: "#000",
    fontWeight: "bold",
  },
});

export default UserDetails;
