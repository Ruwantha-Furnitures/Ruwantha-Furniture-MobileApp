import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Order from "../../Components/Screen/DeliveryDriver/Order";
import { LoginContext } from "../../Components/Reducers/loginReducer";
import AvailabilityStatus from "../../Components/Screen/DeliveryDriver/AvailabilityStatus";
import { API_URL } from "react-native-dotenv";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const ViewOrdersScreen = ({ navigation }) => {
  
  const loginContext = useContext(LoginContext);
  const [todayOrders, setTodayOrders] = useState([]);
  const [changeDeliveryStatus, setChangeDeliveryStatus] = useState(false);

//   //commit 2 line 29-45 - getTodayOrders API calling done
//   const getTodayOrders = async () => {
//     try {
//       const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
//       const response = await axios.get(
//         `${API_URL}deliveryDriver/orders/${driverID}`
//       );
//       if (response.status === 200) {
//         const { orderDetails } = response.data;
//         console.log(orderDetails);
//         setTodayOrders(orderDetails);
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //commit 3 line 47-64 - changeStatusHandler API calling done
//   const changeStatusHandler = async (order_id) => {
//     try {
//       const driverID = await SecureStore.getItemAsync("deliveryDriver_id");
//       console.log(order_id);
//       const response = await axios.put(
//         `${API_URL}deliveryDriver/orders/changeStatus/${order_id}/${driverID}`
//       );
//       if (response.status === 200) {
//         console.log(response.data);
//         getTodayOrders();

//         // setChangeDeliveryStatus((prevState) => !prevState);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //commit 4 line 67-69 - useEffect function calling done
//   useEffect(() => {
//     getTodayOrders();
//   }, [setChangeDeliveryStatus]);

//   //commit 5 line line 72-107 Order retreival done
//   return (
//     <View style={styles.viewContainer}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: 15,
//             marginRight: 10,
//             justifyContent: "space-between",
//           }}
//         >
//           <AvailabilityStatus navigation={navigation} />
//           <TouchableOpacity
//             style={styles.buttonLg}
//             onPress={() => loginContext.loginDispatch({ type: "logout" })}
//           >
//             <Text style={styles.Login}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.header}>Order Details</Text>
//         <Image
//           source={require("../../../assets/nlogo.png")}
//           style={styles.imageHeader}
//         />
//         {todayOrders.length > 0 &&
//           todayOrders.map((order) => (
//             <Order
//               order={order}
//               navigation={navigation}
//               changeStatus={changeStatusHandler}
//             />
//           ))}
//       </ScrollView>
//     </View>
//   );
// };

// //commit 6 line 111-150 styles added
// const styles = StyleSheet.create({
//   viewContainer: {
//     flex: 1,
//     backgroundColor: "#E7E5E9",
//   },
//   header: {
//     fontWeight: "100",
//     fontWeight: "bold",
//     fontSize: 35,
//     alignSelf: "center",
//     marginTop: 12,
//     width: 300,
//     marginBottom: 10,
//     letterSpacing: 5,
//   },
//   buttonLg: {
//     backgroundColor: "black",
//     borderRadius: 20,
//     paddingRight: 10,
//     paddingLeft: 17,
//     paddingVertical: 12,
//     marginTop: 3,
//     justifyContent: "center",
//   },
//   Login: {
//     fontWeight: "bold",
//     fontSize: 15,
//     color: "#fff",
//     letterSpacing: 1,
//     width: 75,
//   },
//   imageHeader: {
//     width: 40,
//     height: 40,
//     marginRight: 5,
//     backgroundColor: "#E7E5E9",
//     alignSelf: "center",
//   },
 };
export default ViewOrdersScreen;

//after all commits are finished above(copy paste whole page-without the comments) : commit 7 "ViewOrder Screen done"