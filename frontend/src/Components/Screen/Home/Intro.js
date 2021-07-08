import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Card from "../../UI/Card";
import AppButton from "../../UI/AppButton";

const mobileWidth = Dimensions.get("window").width;
const cardWidth = mobileWidth - 40;
const imageWidth = (cardWidth + 10) / 2;
const detailsWidth = (cardWidth - 10) / 2;

function Intro() {
  const images = [
    {
      imageId: 1,
      textId: 2,
      imgUri: require("../../../../assets/download_ar.jpg"),
    },
    {
      imageId: 2,
      textId: 3,
      imgUri: require("../../../../assets/download.jpg"),
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <Card width={cardWidth} height={280} ml={20} pd={0} fd="row" bg="#fff">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => {
          return (
            <View key={image.imageId}>
              <Image source={image.imgUri} style={styles.image} />
              <View
                style={{
                  flexDirection: "row",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 0,
                  marginLeft: 90,
                }}
              >
                {images.map((image) => {
                  return (
                    <Text
                      key={image.textId}
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
        <Text
          style={{
            marginLeft: 8,
            fontSize: 15,
            marginVertical: 10,
            width: 180,
          }}
        >
          By Your Favourite furniture products from us,make an aspiring
          decision.We provide you with the best furnitures which would enlighten
          your house.
        </Text>
        <View style={{ marginLeft: 10, marginTop: 7.5 }}>
          <AppButton
            title="View Products"
            width={170}
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
    width: imageWidth,
    height: 280,
    marginLeft: -5,
    borderTopLeftRadius: 7.5,
    resizeMode: "stretch",
  },
  detailContainer: {
    marginHorizontal: 8,
    width: detailsWidth,
  },
  subHeader: {
    letterSpacing: 0.5,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    width: 220,
  },
});
export default Intro;
