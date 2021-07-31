//checking the availability change of driver

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
const AvailabilityChangeScreen = () => {
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
        </View>
        <View style={styles.btnContainer}>
            <AppButton
              title="Available"
              width={80}
        
            />
            {loginContext.userDetails.userToken !== null && (
              <AppButton
                width={80}
                title="Not available"
               
              />
            )}
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
        </View>
        <View style={styles.btnContainer}>
            <AppButton
              title="Available"
              width={80}
        
            />
            {loginContext.userDetails.userToken !== null && (
              <AppButton
                width={80}
                title="Not available"
               
              />
            )}
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

  btnContainer: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
 
});

export default AvailabilityChangeScreen;
