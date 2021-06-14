import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../Components/UI/Card";
import AppButton from "../Components/UI/AppButton";
const MoreDetailsScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.viewContainer}>
      <Image source={item.image} style={styles.imgLarge} />
      <Card width={435} height={440} ml={10} bg="#fff">
        <View style={styles.body}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.content}>{item.content}</Text>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.imgSmaller} />
            <Image source={item.image} style={styles.imgSmaller} />
            <Image source={item.image} style={styles.imgSmaller} />
          </View>
          <Text style={styles.price}>{`Rs.${item.price}/=`}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.quantityTitle}>Quantity</Text>
            <View style={styles.quantityContainer}></View>
            <View style={{ marginLeft: 260, marginTop: -35 }}>
              <AppButton
                size="lg"
                title="Add to cart"
                onPress={() => console.log("Clicked")}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  body: {
    marginVertical: 15,
  },
  itemName: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "#000",
    width: 350,
    letterSpacing: 5,
    fontSize: 22,
    marginLeft: 25,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    marginLeft: 20,
    width: 390,
  },
  imgLarge: {
    width: 455,
    height: 350,
  },
  imgSmaller: {
    width: 80,
    height: 80,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#FB9F3C",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  price: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FB9F3C",
    marginRight: 20,
    marginTop: 10,
  },
  quantityTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 20,
  },
  quantityContainer: {
    backgroundColor: "#E7E5E9",
    borderRadius: 20,
    width: 120,
    height: 40,
    marginTop: 5,
  },
  bottomContainer: {
    marginLeft: 20,
  },
});
export default MoreDetailsScreen;
