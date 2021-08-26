// import { StyleSheet, Text, View, Alert } from "react-native";
// import { PayHere, AccountType,Customer } from "@payhere/payhere-mobilesdk-reactnative";

// // Put the payment variables here
// var paymentObject = {
//   sandbox: true, // if the account is sandbox or real
//   merchant_id: "1217736", // Replace your Merchant ID
//   return_url: "https://www.google.com/",
//   cancel_url: "http://sample.com/cancel",
//   notify_url: "http://sample.com/notify",
//   order_id: orderId,
//   items: name,
//   amount: amount,
//   currency: "LKR",
//   first_name: "Saman",
//   last_name: "Perera",
//   email: "samanp@gmail.com",
//   phone: "0771234567",
//   address: "No.1, Galle Road",
//   city: "Colombo",
//   country: "Sri Lanka",
//   delivery_address: "No. 46, Galle road, Kalutara South", // optional field
//   delivery_city: "Kalutara", // optional field
//   delivery_country: "Sri Lanka", // optional field
//   custom_1: "", // optional field
//   custom_2: "", // optional field
// };

// PayHere.startPayment(
//   paymentObject,
//   (paymentId) => {
//     console.log("Payment Completed", paymentId);
//   },
//   (errorData) => {
//     Alert.alert("PayHere Error", errorData);
//   },
//   () => {
//     console.log("Payment Dismissed");
//   }
// );
// const PayhereScreen = () => {
//   return (
//     <View>
//       <TextInput></TextInput>
//     </View>
//   );
// };

// export default PayhereScreen;

// const styles = StyleSheet.create({});
