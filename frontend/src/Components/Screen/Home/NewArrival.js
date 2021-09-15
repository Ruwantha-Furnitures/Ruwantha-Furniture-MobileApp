import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Card from "../../UI/Card";
import * as All from "../Products/ALLImages";

const mobileWidth = Dimensions.get("window").width;
const newItemWidth = (mobileWidth - 100) / 2;

const NewArrival = ({ newProducts, navigate }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const data = [
    {
      id: 1,
      url: require("../../../../assets/Molteni-Outline-Chair-3D-Model.jpeg"),
      name: "Monay Chair",
      price: "Rs.500",
    },
    {
      id: 2,
      url: require("../../../../assets/newImg.jpg"),
      name: "Molteni Chair",
      price: "Rs.1000",
    },
    {
      id: 3,
      url: require("../../../../assets/Molteni-Outline-Chair-3D-Model.jpeg"),
      name: "Monay Chair",
      price: "Rs.500",
    },
    {
      id: 4,
      url: require("../../../../assets/newImg.jpg"),
      name: "Molteni Chair",
      price: "Rs.1000",
    },
    {
      id: 5,
      url: require("../../../../assets/Molteni-Outline-Chair-3D-Model.jpeg"),
      name: "Monay Chair",
      price: "Rs.500",
    },
    {
      id: 6,
      url: require("../../../../assets/newImg.jpg"),
      name: "Molteni Chair",
      price: "Rs.1000",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <Card
        width={newItemWidth}
        height={135}
        ml={22}
        pd={7}
        fd="row"
        bg="#E7E5E9"
      >
        <Image
          source={All[`Image${item.id}`]}
          style={{ width: 70, height: 70, borderRadius: 40 }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{`${item.price}/=`}</Text>
          <View style={{ marginLeft: -10 }}>
            <AppButton
              title="More Details"
              width={62}
              onPress={() => {
                navigate("More Details", { item });
              }}
            />
          </View>
        </View>
      </Card>
    );
  };
  return (
    <Card width={mobileWidth - 40} height={280} ml={20} bg="#fff">
      <View style={styles.newArrivalContainer}>
        <SubHeader title="New Arrivals" width={230} />
        <Animated.FlatList
          contentContainerStyle={{ paddingRight: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newProducts}
          snapToInterval={newItemWidth + 22}
          decelerationRate={0}
          snapToAlignment={"center"}
          bounce={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item) => item.id.toString()}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  newArrivalContainer: {
    display: "flex",
    alignItems: "center",
  },
  itemName: {
    marginTop: 10,
    maxWidth: 60,
    height: 30,
    fontSize: 11,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
    fontSize: 9,
    marginTop: 5,
  },
  detailContainer: {
    marginLeft: 10,
  },
});
export default NewArrival;
