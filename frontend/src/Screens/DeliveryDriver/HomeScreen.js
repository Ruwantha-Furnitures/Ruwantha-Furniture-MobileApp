//This is the landing page
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "../../Components/UI/Card";
import Header from "../../Components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  return (
    <View style={styles.productContainer}>
      <Header />
      <Card
        width={mobileWidth - 40}
        height={mobileHeight / 6}
        ml={30}
        pd={7}
        fd="row"
        bg="#FFF"
      >
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Today Availability</Text>
          <Text style={styles.itemPrice}>02</Text>
        </View>
      </Card>


      <Card
        width={mobileWidth - 40}
        height={mobileHeight / 6}
        ml={30}
        pd={7}
        fd="row"
        bg="#FFF"
      >
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Tomorrow Availability</Text>
          <Text style={styles.itemPrice}>50</Text>
        </View>
      </Card>

      <Card
        width={mobileWidth - 40}
        height={mobileHeight / 6}
        ml={30}
        pd={7}
        fd="row"
        bg="#FFF"
      >
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Daily income</Text>
          <Text style={styles.itemPrice}>Rs.8000 /=</Text>
        </View>
      </Card>

      <Card
        width={mobileWidth - 40}
        height={mobileHeight / 6}
        ml={30}
        pd={7}
        fd="row"
        bg="#FFF"
      >
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Total income</Text>
          <Text style={styles.itemPrice}>Rs.25,000 /=</Text>
        </View>
      </Card>
    </View>

  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
  },

  itemName: {
    fontWeight: "bold",
    fontSize: 40,
    width: 180,
    letterSpacing: 2,
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
