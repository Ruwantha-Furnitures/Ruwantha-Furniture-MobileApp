import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  LogBox,
  Dimensions,
} from "react-native";
import Product from "./Product";
import axios from "axios";

LogBox.ignoreLogs(["Warning: ..."]);

const mobileWidth = Dimensions.get("window").width;
const Products = ({ navigate, products, categories, addToCart }) => {
  const [productType, setProductType] = useState("All");
  const [list, setList] = useState();

  useEffect(() => {
    console.log(products);
    setList(products);
  }, []);
  return (
    <View style={{ marginTop: 25, marginBottom: 0 }}>
      <View style={styles.navStyles}>
        <TouchableOpacity
          style={
            productType === "All"
              ? styles.selectedIndicatorNew
              : styles.defaultIndicator
          }
          onPress={() => {
            setProductType("All");
            setList(products);
          }}
        >
          <Text
            style={
              productType === "All"
                ? styles.textIndicatorNew
                : styles.textStyleNew
            }
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            style={
              productType === category.name
                ? styles.selectedIndicatorNew
                : styles.defaultIndicatorNew
            }
            onPress={() => {
              setProductType(category.name);
              const newList = products.filter(
                (product) => product.type === category.name
              );
              setList(newList);
            }}
          >
            <Text
              style={
                productType === category.name
                  ? styles.textIndicator
                  : styles.textStyle
              }
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <Product item={item} navigate={navigate} addToCart={addToCart} />
          )}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  navStyles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -2,
    padding: 10,
  },
  selectedIndicator: {
    backgroundColor: "#FB9F3C",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: -8,
    minWidth: mobileWidth / 5,
  },

  defaultIndicator: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: -8,
  },

  selectedIndicatorNew: {
    backgroundColor: "#FB9F3C",
    borderRadius: 20,
    minWidth: mobileWidth / 6,
    maxWidth: mobileWidth / 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: -8,
  },
  defaultIndicatorNew: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: -8,
  },
  textIndicator: {
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
  },
  textIndicatorNew: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
    letterSpacing: 1,
  },
  textStyle: {
    fontSize: 15,
    color: "#000",
    letterSpacing: 1,
    width: 55,
    fontWeight: "bold",
  },

  textStyleNew: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#000",
    letterSpacing: 1,
    width: 55,
  },
});
export default Products;
