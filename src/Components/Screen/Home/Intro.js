import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";

const Intro = () => {
  return (
    <Card size="lg">
      <Image
        source={require("../../../../assets/download_ar.jpg")}
        style={styles.image}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.subHeader}>Best Furniture</Text>
        <Text style={{ marginLeft: 15, fontSize: 15, marginVertical: 10 }}>
          Bye Your Favourite furniture products from us,make an aspring
          decision.Bye Your Favourite furniture products from us,make an aspring
          decision.
        </Text>
        <View style={{ marginLeft: 45, marginTop: 7.5 }}>
          <AppButton
            title="View Products"
            size="lg"
            onPress={() => console.log("Clicked")}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 280,
    borderRadius: 10,
  },
  detailContainer: {
    marginHorizontal: 8,
    width: 187.5,
  },
  subHeader: {
    letterSpacing: 2,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
});
export default Intro;
