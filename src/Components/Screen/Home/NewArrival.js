import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
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
      <Card size="md">
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
    <Card size="lg">
      <View style={styles.newArrivalContainer}>
        <Text style={styles.subHeader}>New Arrivals</Text>
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
  subHeader: {
    letterSpacing: 2,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 22,
    marginLeft: 100,
    fontWeight: "bold",
    alignSelf: "center",
    width: 200,
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
