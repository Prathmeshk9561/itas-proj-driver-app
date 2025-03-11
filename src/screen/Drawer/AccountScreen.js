import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Icon } from "react-native-elements";

// Screen 1: Account Info
const AccountInfoScreen = () => (
  <View style={styles.container}>
    <Image
      source={require("../../../assets/images/profile_icon.png")}
      style={styles.profileImage}
    />
    <Text style={styles.header}>Account Info</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>Uraj Jadhav</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.value}>0123456789</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>abc@gmail.com</Text>
    </View>
  </View>
);

// Screen 2: Vehicle Info
const VehicleInfoScreen = () => (
    <View style={styles.container}>
    <Image
      source={require("../../../assets/images/car_icon.png")}
      style={styles.vehicleImage}
    />
    <Text style={styles.header}>Vehicle Info</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Vehicle Type</Text>
      <Text style={styles.value}>Sedan, SUV</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Vehicle Number</Text>
      <Text style={styles.value}>MH42BH9110</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Vehicle Model</Text>
      <Text style={styles.value}>White Suzuki S-Presso LXI</Text>
    </View>
  </View>
);

// Tab Navigation Setup
const renderScene = SceneMap({
  account: AccountInfoScreen,
  vehicle: VehicleInfoScreen,
});

const AccountScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "account", title: "Account Info" },
    { key: "vehicle", title: "Vehicle Info" },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 40 }}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "black" }}
            style={{ backgroundColor: "white" }}
            activeColor="black"
            inactiveColor="gray"
          />
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    left: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  vehicleImage: {
    width: 189,
    height: 159,
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
    color: "#808080",
  },
  value: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
});

export default AccountScreen;
