import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const NavProfile = ({ onChangeNav, currentView }) => {
  return (
    <View style={styles.nav}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={
            currentView === "My Profile"
              ? styles.selectedNav
              : styles.indicatorNav
          }
          onPress={() => onChangeNav("My Profile")}
        >
          <Text
            style={
              currentView === "My Profile"
                ? styles.selectedNavHeader
                : styles.navHeader
            }
          >
            My Profile
          </Text>
        </TouchableOpacity>
        {currentView !== "My Profile" && currentView !== "Edit Profile" && (
          <View style={styles.hr} />
        )}
        <TouchableOpacity
          style={
            currentView === "Edit Profile"
              ? styles.selectedNav
              : styles.indicatorNav
          }
          onPress={() => onChangeNav("Edit Profile")}
        >
          <Text
            style={
              currentView === "Edit Profile"
                ? styles.selectedNavHeader
                : styles.navHeader
            }
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        {currentView !== "Edit Profile" && currentView !== "My Purchases" && (
          <View style={styles.hr} />
        )}
        <TouchableOpacity
          style={
            currentView === "My Purchases"
              ? styles.selectedNav
              : styles.indicatorNav
          }
          onPress={() => onChangeNav("My Purchases")}
        >
          <Text
            style={
              currentView === "My Purchases"
                ? styles.selectedNavHeader
                : styles.navHeader
            }
          >
            My Purchases
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginTop: 30,
  },
  navContainer: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "#FB9F3C",
  },
  navHeader: {
    fontSize: 15,
    letterSpacing: 2,
    color: "#000",
  },
  selectedNavHeader: {
    fontSize: 15,
    letterSpacing: 2,
    color: "#fff",
  },
  hr: {
    borderColor: "#FB9F3C",
    borderRightWidth: 2,
    height: 35,
    marginLeft: 7.5,
  },
  indicatorNav: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  selectedNav: {
    backgroundColor: "#FB9F3C",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
export default NavProfile;
