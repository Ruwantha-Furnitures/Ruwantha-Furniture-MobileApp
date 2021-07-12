import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";
const CustomIntro = () => {
  const Images = [
    {
      id: 1,
      imgUri: require("../../../../assets/7.jpeg"),
    },
    {
      id: 2,
      imgUri: require("../../../../assets/2.jpeg"),
    },
    {
      id: 3,
      imgUri: require("../../../../assets/1.png"),
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
    <Card width={415} height={340} ml={20} bg="#fff">
      <SubHeader title="Image Gallery" width={290} />
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={Images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.imgUri}
              style={{
                width: 415,
                height: 272,
                resizeMode: "cover",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            />
          </View>
        )}
      />
    </Card>
  );
};

export default CustomIntro;
