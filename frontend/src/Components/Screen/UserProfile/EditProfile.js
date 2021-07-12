import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const EditProfile = ({ userData }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (userData) {
      setEmail(() => userData.email);
      setName(() => userData.name);
      setAddress(() => userData.address);
      setTelephone(() => userData.telephone);
    }
  }, [userData]);

  return (
    <View style={styles.viewProfile}>
      <Form width={415} height={500}>
        <SubHeader title="Edit Profile" width={200} />
        <Input
          value={name}
          onChangeText={(userName) => setName(userName)}
          type="string"
        />
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          type="email"
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
          <FormAppButton type="Submit" title="Submit" width={120} />
        </View>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  viewProfile: {
    marginTop: 20,
  },
});

export default EditProfile;
