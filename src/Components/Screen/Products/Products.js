import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Card from "../../UI/Card";
const Products = () => {
  const [productType, setProductType] = useState("All");
  const productList = [
    {
      id: 1,
      name: "Molteni Outlined Chair",
      price: 1500,
      decription:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",
      image:
        "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Molteni Outlined Chair",
      price: 1500,
      decription:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",
      image:
        "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Molteni Outlined Chair",
      price: 1500,
      decription:
        "Molteni best quality brand of Italian designer modern and contemporary chairs | Leather and wood chairs...",
      image:
        "https://image.architonic.com/img_pro2-4/117/4367/outline-04-hr-b.jpg",
      rating: 5,
    },
  ];
  return (
    <View>
      <View style={styles.navStyles}>
        <TouchableOpacity
          style={productType === "All" ? styles.selectedIndicator : ""}
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
          style={productType === "Chairs" ? styles.selectedIndicator : ""}
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
          style={productType === "Sofars" ? styles.selectedIndicator : ""}
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productList}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <Card key={item.id} width={405} height={120} ml={20} bg="#E7E5E9">
            <Text>{item.name}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navStyles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -50,
    marginTop: -40,
    padding: 10,
  },
  selectedIndicator: {
    backgroundColor: "#FB9F3C",
    borderRadius: 10,
    // width: 120,
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
