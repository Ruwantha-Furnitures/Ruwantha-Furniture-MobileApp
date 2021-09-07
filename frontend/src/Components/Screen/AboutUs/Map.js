import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Card from "../../UI/Card";
import SubHeader from "../../Header/SubHeader";

const mobileWidth = Dimensions.get("window").width;

const Map = () => {
  return (
    <Card width={mobileWidth - 30} height={550} ml={20} pd={0} bg="#fff">
      <SubHeader title="Locate Us" width={200} />
      <MapView style={styles.map} />
    </Card>
  );
};

const styles = StyleSheet.create({
  map: {
    width: mobileWidth - 30,
    height: 485,
    borderRadius: 10,
  },
});

export default Map;
