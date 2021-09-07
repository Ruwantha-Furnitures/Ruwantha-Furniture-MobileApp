//ChangeAvailabilityForm.js
//Path:frontend/Components/DeliveryDriver/ChangeAvailabilityForm.js

import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import AppButton from "../../UI/AppButton";
import SubHeader from "../../Header/SubHeader";
import { DriverContext } from "../../Reducers/driverReducer";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

const mobileWidth = Dimensions.get("window").width;

const ChangeAvailabilityForm = ({ driverData, changeAvailability }) => {
  const cardWidth = mobileWidth - 40;
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [availableDetails, setAvailableDetails] = useState([
    "Available",
    "Not Available",
  ]);
  const driverContext = useContext(DriverContext);

  const getEmailDriver = async () => {
    if (driverData.availability === 1) {
      setAvailability("Available");
    } else {
      setAvailability("Not Available");
    }
    const driverEmail = await SecureStore.getItemAsync("user_email");
    setEmail(driverEmail);
  };

  useEffect(() => {
    getEmailDriver();
  }, []);

  return (
    <Form width={mobileWidth - 30} height={580}>
      <Text style={styles.subHeaderOne}>Delivery Driver</Text>
      <Text style={styles.subHeaderTwo}>Availability</Text>
      <View style={styles.name}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.nameInput}>{driverData.first_name}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.nameInput}>{driverData.last_name}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.nameInput}>{email}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.nameInput}>{driverData.telephone}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.label}>Availability</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E7E5E9",
            padding: 2,
            dropdownIconColor: "#000",
            backgroundColor: "#E7E5E9",
            minWidth: mobileWidth / 2,
          }}
        >
          <Picker
            style={styles.nameSelect}
            selectedValue={availability}
            onValueChange={(itemValue, itemIndex) => setAvailability(itemValue)}
            mode="dropdown"
          >
            {availableDetails.map((itemValue, index) => (
              <Picker.Item key={index} label={itemValue} value={itemValue} />
            ))}
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
          onPress={() => {
            let availableStatus;
            if (availability === "Available") {
              availableStatus = 1;
            } else {
              availableStatus = 0;
            }
            driverContext.dispatchAvailability({
              type: "change",
              payload: {
                availability: availableStatus,
              },
            });
            changeAvailability(availability);
          }}
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
    width: 100,
  },
  nameInput: {
    backgroundColor: "#E7E5E9",
    borderRadius: 30,
    paddingHorizontal: 10,
    letterSpacing: 1,
    paddingVertical: 15,
    fontSize: 15,
    minWidth: mobileWidth / 2,
    color: "grey",
  },

  nameSelect: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
    letterSpacing: 1,
    fontSize: 13,
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
