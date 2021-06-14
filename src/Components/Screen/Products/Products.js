import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Product from "./Product";

const Products = ({ navigate }) => {
  const [productType, setProductType] = useState("All");
  const [list, setList] = useState(productList);
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
    },
    {
      id: 2,
      name: "Molteni Outlined Chair",
      price: 1500,
      description:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

      content:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

      image: {
        uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      },
      rating: 5,
    },
    {
      id: 3,
      name: "Molteni Outlined Chair",
      price: 1500,
      description:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

      content:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

      image: {
        uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      },
      rating: 5,
    },
    {
      id: 4,
      name: "Molteni Outlined Chair",
      price: 1500,
      description:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

      content:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

      image: {
        uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      },
      rating: 5,
    },
    {
      id: 5,
      name: "Molteni Outlined Chair",
      price: 1500,
      description:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",

      content:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs,",

      image: {
        uri: "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      },
      rating: 5,
    },
  ];
  return (
    <View style={{ marginTop: 25 }}>
      <View style={styles.navStyles}>
        <TouchableOpacity
          style={
            productType === "All"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => setProductType("All")}
        >
          <Text
            style={
              productType === "All" ? styles.textIndicator : styles.textStyle
            }
          >
            All Type
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            productType === "Chairs"
              ? styles.selectedIndicator
              : styles.defaultIndicator
          }
          onPress={() => setProductType("Chairs")}
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
          onPress={() => setProductType("Sofars")}
        >
          <Text
            style={
              productType === "Sofars" ? styles.textIndicator : styles.textStyle
            }
          >
            Sofars
          </Text>
        </TouchableOpacity>
      </View>
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productList}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => <Product item={item} navigate={navigate} />}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  navStyles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -5,
    padding: 10,
  },
  selectedIndicator: {
    backgroundColor: "#FB9F3C",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: -8,
  },
  defaultIndicator: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: -8,
  },
  textIndicator: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    letterSpacing: 2,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    letterSpacing: 2,
  },
});
export default Products;
