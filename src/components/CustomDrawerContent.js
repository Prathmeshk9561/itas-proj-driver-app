import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1, marginTop: 50, paddingHorizontal: 20 }}>
      {/* User Info */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
          paddingBottom: 20, // Adds spacing inside before the border
          borderBottomWidth: 1, // Border thickness
          borderBottomColor: "#ccc", // Light gray border color
        }}
      >
        <Image
          source={require("../../assets/images/profile_icon.png")}
          style={{ width: 40, height: 40, borderRadius: 40 }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>Welcome Back,</Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>John Doe</Text>
        </View>
      </View>

      {/* Drawer Items */}
      {props.state.routes.map((route, index) => (
        <TouchableOpacity
          key={route.key}
          style={{ flexDirection: "row", alignItems: "center", padding: 15 }}
          onPress={() => props.navigation.navigate(route.name)}
        >
          <FeatherIcons name={getIconName(route.name)} size={20} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{route.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <View
        style={{
          padding: 20,
          marginTop: "auto",
          borderTopWidth: 1, // Border thickness
          borderTopColor: "#ccc", // Light gray border color
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => console.log("Logout pressed")} // Replace with logout logic
        >
          <FeatherIcons name="log-out" size={24} color="#FE0F00" />
          <Text style={{ marginLeft: 10, fontSize: 16, color: "#FE0F00" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Function to get icons for each menu item
const getIconName = (routeName) => {
  switch (routeName) {
    case "Home":
      return "home";
    case "Messages":
      return "clock";
    case "Earnings":
      return "star";
    case "TripDetails":
      return "bell";
    case "Account":
      return "user";
    case "Booking":
      return "calendar";
    case "Help":
      return "help-circle";
    default:
      return "help-circle";
  }
};

export default CustomDrawerContent;
