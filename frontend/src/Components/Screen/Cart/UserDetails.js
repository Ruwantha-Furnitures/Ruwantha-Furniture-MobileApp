import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import SubHeader from "../../Header/SubHeader";
import Input from "../../UI/Input";
import TermsConditionsModal from "../../UI/TermsConditionsModal";
import FormAppButton from "../../UI/FormAppButton";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
const mobileWidth = Dimensions.get("window").width;

const UserDetails = ({ districts, navigation }) => {
  // const [allDistricts, setAllDistricts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // const [deliveryAmount, setDeliveryAmount] = useState("");
  const [district, setDistrict] = useState(districts[0].area);
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  // useEffect(() => {
  //   setAllDistricts(districts);
  // }, []);

  const deliveryChargeHandler = districts.map((location) => {
    return (
      <Picker.Item label={location.area} value={location} key={location.id} />
    );
  });

  return (
    <React.Fragment>
      <React.Fragment>
        <SubHeader title="Personal Information" width={mobileWidth / 1.3} />
        <Input
          placeholder="Enter Your First Name"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Input
          placeholder="Enter Your Last Name"
          value={lastName}
          onChangeText={(lastName) => setLastName}
        />
        <Input
          placeholder="Enter Your Telephone Number"
          value={telephoneNumber}
          onChangeText={(telephoneNumber) =>
            setTelephoneNumber(telephoneNumber)
          }
        />
      </React.Fragment>
      <React.Fragment>
        <SubHeader title="Shipping Details" width={mobileWidth / 1.3} />
        <Input
          placeholder="Enter Your Address"
          name="textarea"
          value={address}
          onChangeText={(address) => setAddress(address)}
        />
        <Picker
          style={styles.nameSelect}
          selectedValue={district}
          // value={
          //   deliveryDetails === null ? "Select your area" : deliveryDetails.area
          // }
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue);
            setDeliveryDetails(itemValue);
            setDistrict(itemValue.area);
          }}
          mode="dropdown"
        >
          {deliveryChargeHandler}
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
      <FormAppButton
        title="Proceed To Payment"
        type="Submit"
        width={250}
        onPress={() => navigation.navigate("StripeApp")}
      />
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
    borderColor: "black",
    borderWidth: 10,
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
