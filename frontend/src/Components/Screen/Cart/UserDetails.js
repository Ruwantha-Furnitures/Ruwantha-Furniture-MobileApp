import React, { useState, useEffect, useContext } from "react";
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
import Card from "../../UI/Card";
import DiscountProductPrice from "./DiscountProductPrice";
import FormAppButton from "../../UI/FormAppButton";
import { Picker } from "@react-native-picker/picker";
import { CartContext } from "../../Reducers/cartReducer";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";
const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;

const UserDetails = ({ districts, navigation }) => {
  const [allDistrictData, setAllDistrictData] = useState();
  const [allDistricts, setAllDistricts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("Please select your area");
  const [selectdeliveryDetails, setSelectDeliveryDetails] = useState();
  const [distrcitSelected, setDistrictSelected] = useState(false);
  const [initialSelectedChange, setInitialSelectedChange] = useState(false);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    setAllDistrictData(districts);
    setAllDistricts(districts.map((district) => district.area));
  }, []);

  const getDeliveryAmount = (area) => {
    const selectedDistrictIndex = allDistrictData.findIndex(
      (district) => district.area === area
    );
    const { amount } = districts[selectedDistrictIndex];
    cartContext.dispatchCart({
      type: "deliveryCharges",
      payload: {
        deliveryCharges: amount,
      },
    });
    setSelectDeliveryDetails(districts[selectedDistrictIndex]);
  };

  const deliveryChargeHandler = allDistricts.map((location, index) => {
    return <Picker.Item label={location} value={location} key={index} />;
  });

  return (
    <React.Fragment>
      <Card
        width={mobileWidth - 40}
        height={mobileHeight - 100}
        ml={20}
        bg="#fff"
      >
        <React.Fragment>
          <SubHeader title="Personal Information" width={mobileWidth / 1.1} />
          <Input
            placeholder="Enter Your First Name"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <Input
            placeholder="Enter Your Last Name"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <Input
            placeholder="Enter Your Telephone Number"
            value={telephoneNumber}
            onChangeText={(telephoneNumber) =>
              setTelephoneNumber(telephoneNumber)
            }
            keyboard="telephone"
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
          {districts.length > 0 && (
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#E7E5E9",
                padding: 1,
                marginLeft: 20,
                marginTop: 10,
                width: mobileWidth - 80,
                dropdownIconColor: "#000",
                backgroundColor: "#E7E5E9",
              }}
              onStartShouldSetResponder={() => setDistrictSelected(true)}
            >
              <Picker
                style={styles.nameSelect}
                selectedValue={district}
                onValueChange={(itemValue, itemIndex) => {
                  if (itemIndex !== 0 && initialSelectedChange === false) {
                    setDistrictSelected(true);
                  } else if (itemIndex == 0 && initialSelectedChange === true) {
                    setInitialSelectedChange(true);
                  }
                  setDistrict(itemValue);
                  getDeliveryAmount(itemValue);
                }}
                mode="dropdown"
              >
                {deliveryChargeHandler}
              </Picker>
              <AntDesign
                name="caretdown"
                size={22}
                color="black"
                style={{ position: "absolute", top: 14, right: 18 }}
              />
            </View>
          )}
          {distrcitSelected === false && initialSelectedChange === false && (
            <Text
              style={{
                fontWeight: "bold",
                color: "red",
                fontSize: 17,
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              ** Please select your district
            </Text>
          )}
        </React.Fragment>
      </Card>
      <DiscountProductPrice
        navigation={navigation}
        firstName={firstName}
        lastName={lastName}
        address={address}
        district={district}
        telephoneNumber={telephoneNumber}
        selectdeliveryDetails={selectdeliveryDetails}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  conditions: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 10,
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
    // minHeight: 20,
    // marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
  },
});

export default UserDetails;
