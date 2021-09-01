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
  const [driverData, setDriverData] = useState(null);
  const getDriverDetails = async () => {
    try {
      const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
      console.log(driverID);
      const driverDetailsResponse = await axios.get(
        `${API_URL}deliveryDriver/driverDetails/${driverID}`
      );
      if (driverDetailsResponse.status === 200) {
        const { deliveryDriverDetails } = driverDetailsResponse.data;
        setDriverData(deliveryDriverDetails);
        console.log(driverDetailsResponse.data.deliveryDriverDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const changeAvailability = async (availability) => {
  console.log(availability);
  try {
    const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
    const changeAvailability = await axios.put(
      `${API_URL}deliveryDriver/driverAvailability/${driverID}`,
      { availability }
    );
    if (changeAvailability.status === 200) {
      console.log("Status has been updated");
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getDriverDetails();
}, []);
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
