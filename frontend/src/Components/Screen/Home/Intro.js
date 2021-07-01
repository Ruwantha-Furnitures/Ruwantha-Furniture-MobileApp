import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";

function Intro() {
  const images = [
    require("../../../../assets/download_ar.jpg"),
    require("../../../../assets/download.jpg"),
  ];

  const [active, setActive] = useState(0);

  return (
    <Card width={415} height={280} ml={20} pd={0} fd="row" bg="#fff">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => {
          return (
            <View key={index}>
              <Image source={image} style={styles.image} />
              <View
                style={{
                  flexDirection: "row",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 0,
                  marginLeft: 90,
                }}
              >
                {images.map((i, k, index) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        color: "white",
                        marginLeft: 3,
                        fontWeight: "bold",
                      }}
                    >
                      ⬤
                    </Text>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.detailContainer}>
        <Text style={styles.subHeader}>Best Furniture</Text>
        <Text style={{ marginLeft: 15, fontSize: 15, marginVertical: 10 }}>
          Bye Your Favourite furniture products from us,make an aspiring
          decision.We provide you with the best furnitures which would enlighten
          your house.
        </Text>
        <View style={{ marginLeft: 10, marginTop: 7.5 }}>
          <AppButton
            title="View Products"
            size="lg"
            onPress={() => console.log("Clicked")}
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 280,
    marginLeft: -10,
    borderTopLeftRadius: 10,
    resizeMode: "stretch",
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
