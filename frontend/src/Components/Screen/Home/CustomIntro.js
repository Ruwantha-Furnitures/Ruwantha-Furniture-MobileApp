import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../../UI/Card";
const CustomIntro = () => {
  const Images = [
    {
      id: 1,
      imgUri: require("../../../../assets/1.png"),
    },
    {
      id: 2,
      imgUri: require("../../../../assets/2.jpeg"),
    },
    {
      id: 3,
      imgUri: require("../../../../assets/3.jpeg"),
    },
    {
      id: 4,
      imgUri: require("../../../../assets/4.jpeg"),
    },
    {
      id: 5,
      imgUri: require("../../../../assets/5.jpeg"),
    },
  ];

  return (
    <Card width={415} height={310} ml={20} bg="#fff">
      <FlatList
        data={Images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width: 415, height: 310 }}>
            <Image
              source={item.imgUri}
              style={[StyleSheet.absoluteFillObject]}
            />{" "}
          </View>
        )}
        resizeMode="stretch"
      />
    </Card>
  );
};

export default CustomIntro;
