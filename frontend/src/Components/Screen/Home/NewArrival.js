import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import SubHeader from "../../Header/SubHeader";
import AppButton from "../../UI/AppButton";
import Card from "../../UI/Card";
const NewArrival = () => {
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
  ];
  const renderItem = ({ item }) => {
    return (
      <Card width={170} height={120} ml={25} pd={7} fd="row" bg="#E7E5E9">
        <Image
          source={item.url}
          style={{ width: 70, height: 70, borderRadius: 40 }}
        />
        <View>
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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
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
  },
  itemPrice: {
    color: "#FB9F3C",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
export default NewArrival;
