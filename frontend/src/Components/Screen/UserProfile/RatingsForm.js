import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SubHeader from "../../Header/SubHeader";
import Input from "../../UI/Input";
import FormAppButton from "../../UI/FormAppButton";
import { AntDesign } from "@expo/vector-icons";

const RatingsForm = ({ ratingFormHandler }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="closecircleo"
        size={24}
        color="#F00"
        style={styles.closeIcon}
        onPress={ratingFormHandler}
      />
      <Text style={styles.header}>Rate Product</Text>
      <Text style={styles.content}>How was the Quality of the product</Text>
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="star" size={24} color="#FB9F3C" />
        <AntDesign name="staro" size={24} color="black" />
        <AntDesign name="staro" size={24} color="black" />
        <AntDesign name="staro" size={24} color="black" />
      </View>
      <Text style={styles.content}>Feedback</Text>
      <Input
        placeholder="Write Here"
        name="textarea"
        backgroundColor="#E7E5E9"
        height={80}
      />
      <View
        style={{
          justifyContent: "center",
          marginRight: 30,
          flexDirection: "row",
          marginTop: 3,
        }}
      >
        <FormAppButton width={110} title="Cancel" onPress={ratingFormHandler} />
        <FormAppButton width={110} type="Submit" title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 355,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 0.2,
  },
  header: {
    alignSelf: "center",
    fontWeight: "bold",
    width: 160,
    fontSize: 20,
    letterSpacing: 1,
    marginTop: -18,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 0,
  },
  content: {
    alignSelf: "center",
    fontWeight: "900",
    fontSize: 15,
    width: "80%",
  },
  ratingContainer: {
    flexDirection: "row",
    marginLeft: 8,
    alignSelf: "center",
    marginVertical: 7,
  },
});

export default RatingsForm;
