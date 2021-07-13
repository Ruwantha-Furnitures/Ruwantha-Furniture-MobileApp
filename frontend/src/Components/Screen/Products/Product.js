import React, { useContext } from "react";
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
import { AuthContext } from "../../Context/AuthContext";
import { AntDesign } from "@expo/vector-icons";

const Product = ({ item, navigate }) => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const cardWidth = mobileWidth - 40;
  const { userToken, setUserToken } = useContext(AuthContext);

  return (
    <Card width={cardWidth} height={200} ml={20} bg="#fff">
      <View style={styles.productContainer}>
        <TouchableOpacity
          onPress={() => {
            navigate("More Details", { item });
          }}
        >
          <View style={styles.imgBorder}>
            <Image source={item.image} style={styles.productImage} />
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>{`Rs. ${item.price}/=`}</Text>
          <View style={styles.btnContainer}>
            <AppButton
              title="Preview AR"
              width={80}
              onPress={() => navigate("ProductsAR")}
            />
            {userToken !== null && (
              <AppButton
                width={80}
                title="Add to cart"
                onPress={() => console.log("Clicked")}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#E7E5E9" />
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  productContainer: { flexDirection: "row", marginTop: 10, marginLeft: 10 },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginTop: 10,
  },
  overlay: {
    backgroundColor: "red",
  },
  productName: {
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 22,
    width: 255,
    marginBottom: 10,
  },
  productDescription: {
    width: 250,
    marginLeft: 30,
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
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ratingContainer: { marginTop: -30, flexDirection: "row", marginLeft: 8 },
  imgBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 60,
    padding: 5,
  },
});
export default Product;
