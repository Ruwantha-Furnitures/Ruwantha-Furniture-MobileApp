import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  LogBox,
} from "react-native";
import Product from "./Product";

const productList = [
  {
    id: 1,
    name: "Molteni Outline Chair",
    price: 1500,
    description:
      "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

    content:
      "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

    image: {
      uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
    },
    rating: 5,
    type: "Chairs",
  },
  {
    id: 2,
    name: "Monay NewCastle Chair",
    price: 1500,
    description:
      "Monay has best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

    content:
      "Monay has best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

    image: {
      uri: "data:image/jpeg;base64,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",
    },
    rating: 5,
    type: "Chairs",
  },
  {
    id: 3,
    name: "Classic Sofar",
    price: 1500,
    description:
      "Classic Sofar has best quality brand of Italian designer modern and contemporary chairs",

    content:
      "Classic Sofar has best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3Ig-gKnVjapi_5wywTw6FXte0jdZ-sNSow&usqp=CAU",
    },
    rating: 5,
    type: "Sofars",
  },
  {
    id: 4,
    name: "Monolothic Table",
    price: 1500,
    description:
      "Classic Sofar has best quality brand of Italian designer modern and contemporary chairs",

    content:
      "Classic Sofar has best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

    image: {
      uri: "data:image/jpeg;base64,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",
    },
    rating: 5,
    type: "Tables",
  },
];

LogBox.ignoreLogs(["Warning: ..."]);

const Products = ({ navigate, products }) => {
  const [productType, setProductType] = useState("All");
  const [list, setList] = useState(productList);

  console.log(products);

  return (
    <View style={{ marginTop: 25, marginBottom: 0 }}>
      <View style={styles.navStyles}>
        <TouchableOpacity
          style={
            productType === "All"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => {
            setProductType("All");
            setList(productList);
          }}
        >
          <Text
            style={
              productType === "All" ? styles.textIndicator : styles.textStyle
            }
          >
            All Types
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            productType === "Chairs"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => {
            setProductType("Chairs");
            const newList = productList.filter(
              (product) => product.type === "Chairs"
            );
            setList(newList);
          }}
        >
          <Text
            style={
              productType === "Chairs" ? styles.textIndicator : styles.textStyle
            }
          >
            Chairs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            productType === "Sofars"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => {
            setProductType("Sofars");
            const newList = productList.filter(
              (product) => product.type === "Sofars"
            );
            setList(newList);
          }}
        >
          <Text
            style={
              productType === "Sofars" ? styles.textIndicator : styles.textStyle
            }
          >
            Sofars
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            productType === "Tables"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => {
            setProductType("Tables");
            const newList = productList.filter(
              (product) => product.type === "Tables"
            );
            setList(newList);
          }}
        >
          <Text
            style={
              productType === "Tables" ? styles.textIndicator : styles.textStyle
            }
          >
            Tables
          </Text>
        </TouchableOpacity>
      </View>
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(product) => product.itemid.toString()}
          renderItem={({ item }) => <Product item={item} navigate={navigate} />}
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
  },
  defaultIndicator: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: -8,
  },
  textIndicator: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
    letterSpacing: 2,
  },
});
export default Products;
