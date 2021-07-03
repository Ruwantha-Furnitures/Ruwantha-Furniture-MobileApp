import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Animated,
} from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Card from "../../UI/Card";
const NewArrival = () => {
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
      <Card width={175} height={135} ml={22} pd={7} fd="row" bg="#E7E5E9">
        <Image
          source={item.url}
          style={{ width: 70, height: 70, borderRadius: 40 }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{`${item.price}/=`}</Text>
          <AppButton title="More Details" size="md" />
        </View>
      </Card>
    );
  };
  return (
    <Card width={415} height={280} ml={20} bg="#fff">
      <View style={styles.newArrivalContainer}>
        <SubHeader title="New Arrivals" width={200} />
        <Animated.FlatList
          contentContainerStyle={{ paddingRight: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          snapToInterval={197}
          decelerationRate={0}
          snapToAlignment={"center"}
          bounce={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item) => item.id}
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
    width: 90,
    height: 30,
    fontSize: 13,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  detailContainer: {
    marginLeft: 10,
  },
});
export default NewArrival;
