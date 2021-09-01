import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../../Components/UI/Card";
import AppButton from "../../Components/UI/AppButton";
import * as All from "../../Components/Screen/Products/ALLImages";

const MoreDetailsScreen = ({ route }) => {
  const { item } = route.params;
  const [quantity, SetQuantity] = useState(1);
  console.log("More Screen");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <Image source={All[`Image${item.id}`]} style={styles.imgLarge} />
        <Card width={435} height={440} ml={10} bg="#fff">
          <View style={styles.body}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.content}>{item.description}</Text>
            <View style={styles.imageContainer}>
              <Image
                source={All[`Image${item.id}`]}
                style={[
                  styles.imgSmaller,
                  { transform: [{ rotate: "90deg" }] },
                ]}
              />
              <Image
                source={All[`Image${item.id}`]}
                style={[
                  styles.imgSmaller,
                  { transform: [{ rotate: "180deg" }] },
                ]}
              />
              <Image
                source={All[`Image${item.id}`]}
                style={[
                  styles.imgSmaller,
                  { transform: [{ rotate: "270deg" }] },
                ]}
              />
            </View>
            <Text style={styles.price}>{`Rs.${item.price}/=`}</Text>
            <View style={styles.bottomContainer}>
              <Text style={styles.quantityTitle}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => SetQuantity(quantity - 1)}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <View style={styles.hr} />
                <Text style={[styles.quantityText, { marginTop: -2 }]}>
                  {quantity}
                </Text>
                <View style={styles.hr} />
                <TouchableOpacity onPress={() => SetQuantity(quantity + 1)}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 225, marginTop: -35 }}>
                <AppButton
                  width={150}
                  size="lg"
                  title="Add to cart"
                  onPress={() => console.log("Clicked")}
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
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
    marginBottom: 20,
  },
  imgLarge: {
    width: 455,
    height: 350,
    resizeMode: "stretch",
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
    width: 150,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    marginLeft: 20,
  },
  hr: {
    borderBottomColor: "black",
    borderRightWidth: 2,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 4,
  },
});
export default MoreDetailsScreen;
