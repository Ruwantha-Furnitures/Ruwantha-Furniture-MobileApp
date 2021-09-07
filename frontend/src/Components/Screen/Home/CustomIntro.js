import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";

const mobileWidth = Dimensions.get("window").width;

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
      imgUri: require("../../../../assets/pexels-max-vakhtbovych-6969827.jpg"),
    },

    {
      id: 6,
      imgUri: require("../../../../assets/pexels-max-vakhtbovych-6969830.jpg"),
    },
  ];

  return (
    <Card width={mobileWidth - 40} height={340} ml={20} bg="#fff">
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
                width: mobileWidth - 40,
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
