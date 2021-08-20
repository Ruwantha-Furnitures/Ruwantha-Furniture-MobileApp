//This is the landing page
//HomeScreen.js file
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../../Components/UI/Card";
import Header from "../../Components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PendingOrdersTable from "../../Components/Screen/DeliveryDriver/PendingOrdersTable";

const HomeScreen = () => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const loginContext = useContext(LoginContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.productContainer}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginRight: 10,
            justifyContent: "space-between",
          }}
        >
          <AvailabilityStatus />
          <TouchableOpacity
            style={styles.buttonLg}
            onPress={() => loginContext.loginDispatch({ type: "logout" })}
          >
            <Text style={styles.Login}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Home Page</Text>
        <Image
          source={require("../../../assets/nlogo.png")}
          style={styles.imageHeader}
        />
        <View style={{ flexDirection: "row" }}>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={40}
                color="#542b14"
              />
              <Text style={styles.itemName}>Today Deliveries</Text>
              <Text style={styles.itemPrice}>02</Text>
            </View>
          </Card>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialIcons name="category" size={40} color="#542b14" />
              <Text style={styles.itemName}>All Deliveries</Text>
              <Text style={styles.itemPrice}>50</Text>
            </View>
          </Card>
      </Card>
     
        </View>
        <View style={{ flexDirection: "row" }}>
          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <MaterialIcons
                name="stacked-line-chart"
                size={40}
                color="#542b14"
              />
              <Text style={styles.itemName}>Daily income</Text>
              <Text style={styles.itemPrice}>Rs.8000 /=</Text>
            </View>
          </Card>

          <Card
            width={mobileWidth / 2.15}
            height={mobileHeight / 6}
            ml={10}
            pd={7}
            fd="row"
            bg="#FFF"
          >
            <View style={styles.itemDetailsContainer}>
              <FontAwesome5 name="spa" size={40} color="#542b14" />
              <Text style={styles.itemName}>Total Income</Text>
              <Text style={styles.itemPrice}>Rs.25,000 /=</Text>
            </View>
          </Card>
        </View>
        <PendingOrdersTable />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
  },

  itemName: {
    marginTop: 10,
    fontSize: 18,
    width: 180,
    letterSpacing: 2,
  },

  productContainer: {
    flex: 1,
    backgroundColor: "#E7E5E9",
  },
  itemDetailsContainer: {
    marginLeft: 30,
    flexDirection: "column",
  },

  itemPrice: {
    marginTop: 10,
    color: "#542b14",
    fontSize: 25,
    fontWeight: "bold",
  },

  buttonLg: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingRight: 0,
    paddingLeft: 17,
    paddingVertical: 12,
    marginTop: 3,
    justifyContent: "center",
  },
  Login: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
    width: 75,
  },
  header: {
    fontWeight: "100",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 12,
    width: 300,
    marginBottom: 10,
    letterSpacing: 5,
    marginLeft: 50,
  },
  imageHeader: {
    width: 40,
    height: 40,
    marginRight: 5,
    backgroundColor: "#E7E5E9",
    alignSelf: "center",
  },
});

export default HomeScreen;
