import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";
const Info = () => {
  return (
    <Card width={415} height={550} ml={20} pd={0} bg="#E7E5E9">
      <View style={{ flexDirection: "column" }}>
        <View style={styles.textHeader}>
          <SubHeader title="About Us" width={200} />
        </View>
        <Image
          source={require("../../../../assets/shop.jpg")}
          style={styles.imageStyle}
        />
        <View style={{ flexDirection: "row" }}>
          <Card width={195} height={250} ml={5} pd={0} bg="#fff" fd="column">
            <Text style={styles.title}>Our Mission</Text>
            <AntDesign
              name="Trophy"
              style={{ alignSelf: "center" }}
              size={35}
              color="black"
            />
            <Text style={styles.paragraph}>
              Our Mission is to provide you with the best furniture and the best
              services as possible.And make your expectations come true with
              those superior Produts
            </Text>
          </Card>
          <Card width={195} height={250} ml={15} pd={0} bg="#fff" fd="column">
            <Text style={styles.title}>Our Story</Text>
            <Entypo
              name="newsletter"
              style={{ alignSelf: "center" }}
              size={35}
              color="black"
            />
            <Text style={styles.paragraph}>
              Ruwantha Furnitur was founded by Mr. Hasitha Fernando who is an
              integral part of the Sri Lankan Furniture Industry.He is been
              regarded as a pioneer in the furniture Industry
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
    height: 180,
    borderRadius: 10,
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
});
export default Info;
