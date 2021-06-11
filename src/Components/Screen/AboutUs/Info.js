import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";
const Info = () => {
  return (
    <Card width={415} height={400} ml={20} pd={0} bg="#E7E5E9">
      <View style={styles.textHeader}>
        <SubHeader title="About Us" width={200} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    flex: 1,
    flexDirection: "column",
  },
});
export default Info;
