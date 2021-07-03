import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";
const Info = () => {
  return (
    <Card width={415} height={1050} ml={20} pd={0} bg="#fff">
      <View style={{ flexDirection: "column" }}>
        <Image
          source={require("../../../../assets/visionmission.jpg")}
          style={styles.imageStyle}
        />
        <View style={{ marginTop: 20 }}>
          <Card width={350} height={200} ml={30} pd={0} bg="#E7E5E9">
            <SubHeader title="Our Vision" width={200} />
            <Text style={styles.textStyle}>
              To be the best in providing furniture with the latest designs
              along with the highest userbase at affordable prices and to give
              the best-augmented reality shopping experience to our customers.
            </Text>
          </Card>
          <Card width={350} height={200} ml={30} pd={0} bg="#E7E5E9">
            <SubHeader title="Our Mission" width={200} />
            <Text style={styles.textStyle}>
              Recognize our clients' needs and wants and satisfy them with great
              attention and commitment to producing standard furniture and give
              value to the money you spent.
            </Text>
          </Card>
          <Card width={350} height={200} ml={30} pd={0} bg="#E7E5E9">
            <SubHeader title="Our Achievements" width={300} />
            <Text style={styles.textStyle}>
              More than 5000+ customers reached our website throughout the last
              two months beginning from the month of May. We were able to
              achieve our estimated revenue for the year 2021 in the middle of
              the year.
            </Text>
          </Card>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    flexDirection: "column",
  },
  imageStyle: {
    width: 415,
    height: 270,
    resizeMode: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: 200,
    marginLeft: 50,
    marginVertical: 10,
  },
  paragraph: {
    marginVertical: 5,
    marginLeft: 5,
    padding: 5,
  },
  textStyle: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});
export default Info;
