import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";

const WebMobileAppIntro = () => {
  return (
    <Card width={415} height={670} ml={20} pd={0} bg="#fff">
      <Image
        source={require("../../../../assets/6.png")}
        style={styles.imageStyle}
      />
      <SubHeader title="Our Website and Mobile App" width={400} />
      <Text style={styles.textStyle}>
        AR Magic website is aimed to provide you with the latest furniture
        models and accessories at a price you can afford. We always consider the
        superior selection, value, and quality which we provide the customers.
        Also, our Mobile Application will be providing the Augmented reality
        technology where the customer can view the furniture with their home
        arrangement, which is not currently available in Sri Lankan furniture
        industry. Our staff is ready to assist you with any questions regarding
        your purchases. Both App and the website pave the way to shop with great
        confidence that you the customer will always be treated with the utmost
        care and respect.
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
    marginHorizontal: 25,
    fontSize: 16,
  },
});

export default WebMobileAppIntro;
