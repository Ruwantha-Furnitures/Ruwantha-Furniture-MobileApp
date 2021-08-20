//checking the availability change of driver
//AvailabilityChangeScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";
import ChangeAvailabilityForm from "../../Components/Screen/DeliveryDriver/ChangeAvailabilityForm";

const AvailabilityChangeScreen = () => {
  const mobileWidth = Dimensions.get("window").width;
  const mobileHeight = Dimensions.get("window").height;
  const loginContext = useContext(LoginContext);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{ flex: 1, backgroundColor: "#E7E5E9", minHeight: mobileHeight }}
      >
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
        <Text style={styles.header}>Chanage</Text>
        <Text style={styles.header2}>Availability</Text>
        <Image
          source={require("../../../assets/nlogo.png")}
          style={styles.imageHeader}
        />
        <ChangeAvailabilityForm />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    fontWeight: "100",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 12,
    width: 300,
    letterSpacing: 5,
    marginLeft: 100,
  },
  header2: {
    fontWeight: "100",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 2,
    width: 300,
    marginBottom: 10,
    letterSpacing: 5,
    marginLeft: 35,
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
  imageHeader: {
    width: 40,
    height: 40,
    marginRight: 5,
    backgroundColor: "#E7E5E9",
    alignSelf: "center",
  },
});
export default AvailabilityChangeScreen;