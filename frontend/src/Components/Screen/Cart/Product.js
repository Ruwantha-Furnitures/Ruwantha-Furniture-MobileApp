import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Card from "../../UI/Card";
import { MaterialIcons } from "@expo/vector-icons";

const Product = ({ item }) => {
  return (
    <Card width={380} height={155} ml={30} pd={7} fd="row" bg="#FFF">
      <View style={styles.productContainer}>
        <Image source={item.url} style={styles.itemImage} />
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{`${item.price} /=`}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <View>
                <Text style={styles.btnMinIcon}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.itemQuantity}>1</Text>
            <TouchableOpacity style={styles.btn}>
              <View>
                <Text style={styles.btnIcon}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelete}>
              <View>
                <MaterialIcons name="delete" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
  },
  productContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  itemDetailsContainer: {
    marginLeft: 30,
    flexDirection: "column",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
    width: 180,
    letterSpacing: 2,
  },
  itemPrice: {
    marginTop: 10,
    color: "#FB9F3C",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    height: 35,
    width: 30,
    borderRadius: 25,
    backgroundColor: "#E7E5E9",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginLeft: 15,
  },
  btnContainer: {
    marginTop: 10,
    marginLeft: -15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 230,
  },
  itemQuantity: {
    color: "#FB9F3C",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
  },
  btnIcon: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btnMinIcon: {
    fontWeight: "bold",
    fontSize: 25,
  },
  btnDelete: {
    height: 45,
    width: 60,
    borderRadius: 35,
    backgroundColor: "#E7E5E9",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginLeft: 40,
    marginTop: -8,
    padding: 10,
  },
});

export default Product;
