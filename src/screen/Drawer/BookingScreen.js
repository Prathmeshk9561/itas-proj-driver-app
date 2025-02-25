import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const bookings = [
  // For Pending
  {
    id: "1",
    date: "14/11/2024",
    type: "Outstation",
    status: "Pending",
    from: "Dange Chowk",
    fromDetails: "SagarComplex, Near Maiwadewale",
    to: "Bandra",
    toDetails: "Bandra East, Mumbai",
    statusColor: "#CFE8FF",
    statusTextColor: "#4285F4",
  },
  // For Completed
  {
    id: "2",
    date: "14/11/2024",
    type: "One way",
    status: "Completed",
    from: "Dange Chowk",
    fromDetails: "SagarComplex, Near Maiwadewale",
    to: "Bandra",
    toDetails: "Bandra East, Mumbai",
    statusColor: "#DEFFEB",
    statusTextColor: "#3ABF24",
  },

  // For Cancelled
  {
    id: "3",
    date: "14/11/2024",
    type: "Ride",
    status: "Cancelled",
    from: "Dange Chowk",
    fromDetails: "SagarComplex, Near Maiwadewale",
    to: "Bandra",
    toDetails: "Bandra East, Mumbai",
    statusColor: "#FFCFCF",
    statusTextColor: "#F44242",
  },
];

const BookingScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Booking Header */}
      <View style={styles.bookingHeader}>
        <Image
          source={require("../../../assets/images/car_icon.png")} // Replace with actual car icon
          style={styles.carIcon}
        />
        <Text style={styles.bookingTitle}>
          {item.date} | {item.type}
        </Text>
        <View
          style={[styles.statusBadge, { backgroundColor: item.statusColor }]}
        >
          <Text style={[styles.statusText, { color: item.statusTextColor }]}>
            {item.status}
          </Text>
        </View>
      </View>

      {/* Booking Details */}
      <View style={styles.bookingDetails}>
        {/* From Location */}
        <View style={styles.locationRow}>
          <Icon name="location-sharp" size={16} color="blue" />
          <View>
            <Text style={styles.locationTitle}>{item.from}</Text>
            <Text style={styles.locationDetails}>{item.fromDetails}</Text>
          </View>
        </View>

        {/* Dotted Line */}
        <View style={styles.dottedLine} />

        {/* To Location */}
        <View style={styles.locationRow}>
          <Icon name="location-sharp" size={16} color="red" />
          <View>
            <Text style={styles.locationTitle}>{item.to}</Text>
            <Text style={styles.locationDetails}>{item.toDetails}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Header with Back Button & Title */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking</Text>
      </View>

      {/* Booking List */}
      <FlatList
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    left: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  bookingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carIcon: {
    width: 50,
    height: 30,
    // marginRight: 10,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  statusBadge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  bookingDetails: {
    marginTop: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
  locationDetails: {
    fontSize: 12,
    color: "#979797",
    marginLeft: 8,
  },
  dottedLine: {
    width: 1,
    height: 20,
    marginLeft: 6,
    backgroundColor: "gray",
    borderStyle: "dashed ",
  },
});

export default BookingScreen;
