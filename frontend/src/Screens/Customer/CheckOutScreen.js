import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../Components/Header/Header";
import CheckOutForm from "../../Components/Screen/Cart/CheckOutForm";
import axios from "axios";

const CheckOutScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <Header />
        <CheckOutForm navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
    minHeight: 1000,
  },
});
export default CheckOutScreen;
