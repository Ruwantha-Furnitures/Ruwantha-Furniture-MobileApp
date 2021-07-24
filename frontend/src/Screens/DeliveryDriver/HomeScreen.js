//This is the landing page
import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity,Dimensions, } from "react-native";
import Card from "../../Components/UI/Card";
import { MaterialIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  return (
    <Card
      width={mobileWidth - 60}
      height={mobileHeight / 6}
      ml={30}
      pd={7}
      fd="row"
      bg="#FFF"
    >
    
    <View style={styles.productContainer}>
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{`${item.price} /=`}</Text>
              <Text style={styles.itemQuantity}>1</Text>
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
  
  itemPrice: {
    marginTop: 10,
    color: "#FB9F3C",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});

export default HomeScreen;

