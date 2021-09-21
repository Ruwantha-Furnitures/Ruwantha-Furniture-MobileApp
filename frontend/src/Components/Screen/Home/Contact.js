import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Form from "../../UI/Form";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";
import axios from "axios";
import PopUpConfirmationModal from "../../UI/PopUpConfirmationModal";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "react-native-dotenv";

const mobileWidth = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [details, setDetails] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const messageSubmit = async () => {
    setInvalidEmail(false);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      telephone === "" ||
      details === ""
    ) {
      setErrorStatus(true);
    } else if (reg.test(email.trim()) === false) {
      setInvalidEmail(true);
    } else {
      try {
        const response = await axios.post(`${API_URL}customer/message`, {
          first_name: firstName,
          last_name: lastName,
          email,
          contact_number: telephone,
          details,
        });
        if (response.status === 200) {
          console.log(response.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setTelephone("");
          setDetails("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => setErrorStatus(false), 3 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [errorStatus]);

  return (
    <View style={{ marginHorizontal: -12 }}>
      <Form width={mobileWidth - 15} height={600}>
        <SubHeader title="Customize Your Furniture" width={mobileWidth + 20} />
        <Input
          placeholder="Fist Name"
          type="string"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Input
          placeholder="Last Name"
          type="string"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Input
          placeholder="Telephone"
          type="number"
          value={telephone}
          onChangeText={(telephone) => setTelephone(telephone)}
          keyboard="telephone"
        />
        <Input
          placeholder="Email"
          type="string"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        {invalidEmail && (
          <Text style={styles.errorMessage}>
            Please enter a valid email address
          </Text>
        )}
        <Input
          placeholder="Description"
          name="textarea"
          type="string"
          value={details}
          onChangeText={(details) => setDetails(details)}
        />
        <View style={styles.btnContainer}>
          <FormAppButton title="Cancel" width={110} />
          <FormAppButton
            type="Submit"
            title="Submit"
            onPress={messageSubmit}
            width={110}
          />
        </View>
      </Form>
      <PopUpConfirmationModal visible={errorStatus}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="exclamationcircle" size={24} color="red" />
          <Text style={styles.confirmationText}>
            Please enter the required fields
          </Text>
        </View>
      </PopUpConfirmationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    marginVertical: 20,
    flexDirection: "row",
  },
  confirmationText: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 20 / fontScale,
    marginLeft: 15,
    marginRight: 5,
    color: "#f40",
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginLeft: 20,
    width: 370,
  },
});

export default Contact;
