import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Header from "../Components/Header/Header";
import Card from "../Components/UI/Card";
import AppButton from "../Components/UI/AppButton";
const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewContainer}>
      <Header />
      <Card>
        <Image
          source={require("../../assets/download_ar.jpg")}
          style={styles.image}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.subHeader}>Best Furniture</Text>
          <Text style={{ marginLeft: 15, fontSize: 15, marginVertical: 10 }}>
            Bye Your Favourite furniture products from us,make an aspring
            decision.Bye Your Favourite furniture products from us,make an
            aspring decision.
          </Text>
          <View style={{ marginLeft: 45, marginTop: 7.5 }}>
            <AppButton
              title="View Products"
              onPress={() => console.log("Clicked")}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    width: 210,
    height: 280,
    borderRadius: 10,
  },
  detailContainer: {
    marginHorizontal: 10,
    borderColor: "red",
    borderWidth: 2,
    width: 187.5,
  },
  subHeader: {
    letterSpacing: 3,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 22,
  },
});

export default HomeScreen;
