import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const EditProfile = ({ userData, editProfileHandler }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const mobileWidth = Dimensions.get("window").width;

  useEffect(() => {
    if (userData) {
      setEmail(() => userData.email);
      setFirstName(() => userData.first_name);
      setLastName(() => userData.last_name);
      setAddress(() => userData.address);
      setTelephone(() => userData.telephone);
    }
  }, [userData, submitHandler]);

  const submitHandler = () => {
    editProfileHandler({ email, firstName, lastName, address, telephone });
  };

  return (
    <View style={styles.viewProfile}>
      <Form width={mobileWidth - 15} height={520}>
        <SubHeader title="Edit Profile" width={200} />
        <Input
          value={firstName}
          onChangeText={(userName) => setFirstName(userName)}
          type="string"
        />
        <Input
          value={lastName}
          onChangeText={(userName) => setLastName(userName)}
          type="string"
        />
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          type="email"
          editable={false}
        />
        <Input
          value={address}
          onChangeText={(address) => setAddress(address)}
          type="string"
        />
        <Input
          value={telephone.toString()}
          onChangeText={(telephone) => setTelephone(telephone)}
          type="string"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <FormAppButton title="Cancel" width={120} />
          <FormAppButton
            type="Submit"
            title="Submit"
            onPress={submitHandler}
            width={120}
          />
        </View>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  viewProfile: {
    marginTop: 20,
    marginLeft: -10,
  },
});

export default EditProfile;
