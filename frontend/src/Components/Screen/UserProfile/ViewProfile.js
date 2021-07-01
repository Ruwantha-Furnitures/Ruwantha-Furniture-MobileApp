import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import SubHeader from "../../Header/SubHeader";
import FormAppButton from "../../UI/FormAppButton";
import Input from "../../UI/Input";

const ViewProfile = ({ onChangeNav }) => {
  return (
    <View style={styles.viewProfile}>
      <Form width={415} height={500}>
        <SubHeader title="User Profile" width={200} />
        <Input placeholder="Ayomal Praveen" type="email" />
        <Input placeholder="ayomalpraveen33@gmail.com" type="email" />
        <Input placeholder="No.54,Negombo road,Dankotuwa" type="string" />
        <Input placeholder="0776054853" type="string" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <FormAppButton title="Delete Profile" width={175} />
          <FormAppButton
            type="Submit"
            title="Edit Profile"
            onPress={() => onChangeNav("Edit Profile")}
            width={160}
          />
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
export default ViewProfile;
