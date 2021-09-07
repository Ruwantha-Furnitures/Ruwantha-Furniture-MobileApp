import React, { useContext, useEffect, useState } from "react";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LoginContext } from "../../Reducers/loginReducer";
import { CartContext } from "../../Reducers/cartReducer";
import { AntDesign } from "@expo/vector-icons";
import * as All from "./ALLImages";

const Product = ({ item, navigate, addToCart }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const cardWidth = mobileWidth - 30;
  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);
  const [firstLine, setFirstLine] = useState("");

  useEffect(() => {
    const line = item.description.split(".")[0];
    setFirstLine(line);
  }, []);

  // const starRating = console.log(item.rating);
  // for (let i = 1; i <= 5; i++) {
  //   if (i <= item.rating) {
  //     return <AntDesign name="star" size={24} color="#FB9F3C" />;
  //   } else {
  //     return <AntDesign name="star" size={24} color="#E7E5E9" />;
  //   }
  // }
  const cartHandler = (item) => {
    console.log("insdie products product");
    console.log(item);
    cartContext.dispatchCart({
      type: "add",
      payload: {
        itemId: item.id,
        quantity: 1,
        price: item.price,
        name: item.name,
      },
    });
  };
  return (
    <Card width={cardWidth} height={205} ml={20} bg="#fff">
      <View style={styles.productContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("More Details", { item });
            }}
          >
            <View>
              <Image
                source={All[`Image${item.id}`]}
                style={styles.productImage}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color="#FB9F3C" />
            {item.rating >= 2 ? (
              <AntDesign name="star" size={24} color="#FB9F3C" />
            ) : (
              <AntDesign name="star" size={24} color="#E7E5E9" />
            )}
            {item.rating >= 3 ? (
              <AntDesign name="star" size={24} color="#FB9F3C" />
            ) : (
              <AntDesign name="star" size={24} color="#E7E5E9" />
            )}
            {item.rating >= 4 ? (
              <AntDesign name="star" size={24} color="#FB9F3C" />
            ) : (
              <AntDesign name="star" size={24} color="#E7E5E9" />
            )}
            {item.rating >= 5 ? (
              <AntDesign name="star" size={24} color="#FB9F3C" />
            ) : (
              <AntDesign name="star" size={24} color="#E7E5E9" />
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={styles.productDescription}>{firstLine}</Text>
          <Text style={styles.productPrice}>{`Rs. ${item.price}/=`}</Text>
          <View style={styles.btnContainer}>
            <AppButton
              title="Preview AR"
              width={80}
              onPress={() => navigate("ProductsAR")}
            />
            {loginContext.userDetails.userToken !== null && (
              <AppButton
                width={80}
                title="Add to cart"
                onPress={() => addToCart(item)}
              />
            )}
          </View>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  overlay: {
    backgroundColor: "red",
  },
  productName: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 20,
    width: 250,
    marginBottom: 10,
  },
  productDescription: {
    width: 225,
    marginLeft: 20,
    fontSize: 11.5,
  },
  productPrice: {
    width: 250,
    marginLeft: 75,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    color: "#FB9F3C",
  },
  btnContainer: {
    marginLeft: -25,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ratingContainer: { marginTop: 20, flexDirection: "row", marginLeft: 8 },
  imgBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 60,
    padding: 5,
  },
});
export default Product;
