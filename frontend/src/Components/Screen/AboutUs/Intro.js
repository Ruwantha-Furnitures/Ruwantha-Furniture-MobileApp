import React from "react";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";
import { View, Text, StyleSheet, Image } from "react-native";

const Intro = () => {
  return (
    <Card width={415} height={600} ml={20} pd={0} bg="#fff">
      <Image
        source={require("../../../../assets/topimg11.jpg")}
        style={styles.imageStyle}
      />
      <SubHeader title="What we do?" width={260} />
      <Text style={styles.textStyle}>
        We, AR Magic is one of the well experienced craftsmens, designers and
        professional experts, who can create interiors that are stimulating, and
        sophisticated. Our journey began as a regular furniture store located in
        Mathugama offering our customers branded furniture at an affordable
        price. We have a quite a large range of products which our currently
        available in our website as well. We always make sure to be updated in
        order to provide the latest trends to the customers.
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 415,
    height: 290,
    resizeMode: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textStyle: {
    marginHorizontal: 15,
    fontSize: 16,
  },
});

export default Intro;
