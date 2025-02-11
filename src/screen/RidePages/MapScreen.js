import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator, TextInput, TouchableOpacity, FlatList, Platform, ProgressBarAndroid } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const GOOGLE_API_KEY = 'AIzaSyBSG_uXmkJdh83JiQJraSJGlmD8DcdahRA'; // Replace with your Google API Key

const MapScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [routeCoords, setRouteCoords] = useState([]);
  const [isOnline, setIsOnline] = useState(false); // New state for online/offline status


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Location permissions are required to use this feature.');
          setLoading(false);
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.005, // Smaller delta for closer zoom
          longitudeDelta: 0.005,
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Unable to fetch location. Please try again.');
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  const fetchSuggestions = async (query, setSuggestions) => {
    if (query.length < 2) return setSuggestions([]);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
        {
          params: {
            input: query,
            key: GOOGLE_API_KEY,
            location: `${location.latitude},${location.longitude}`,
            radius: 50000,
          },
        }
      );

      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const fetchRoute = async (origin, destination) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json`,
        {
          params: {
            origin,
            destination,
            key: GOOGLE_API_KEY,
          },
        }
      );

      if (response.data.routes.length) {
        const points = response.data.routes[0].overview_polyline.points;
        const coordinates = decodePolyline(points);
        setRouteCoords(coordinates);
      } else {
        Alert.alert('Error', 'No route found between the locations.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to fetch the route.');
    }
  };

  const decodePolyline = (t, e = 5) => {
    let coordinates = [];
    let index = 0, lat = 0, lng = 0;

    while (index < t.length) {
      let b, shift = 0, result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1) ? ~(result >> 1) : (result >> 1);
      lat += dlat;

      shift = result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1) ? ~(result >> 1) : (result >> 1);
      lng += dlng;

      coordinates.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return coordinates;
  };

  const handleSearch = () => {
    if (from && to) {
      fetchRoute(from, to);
    } else {
      Alert.alert('Error', 'Please enter both locations.');
    }
  };

  const renderSuggestion = ({ item }, setInput, setSuggestions) => (
    <TouchableOpacity
      style={styles.suggestion}
      onPress={() => {
        setInput(item.description);
        setSuggestions([]);
      }}
    >
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location} region={location}>
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Your Location"
        />
        {routeCoords.length > 0 && (
          <Polyline coordinates={routeCoords} strokeColor="#87CEEB" strokeWidth={4} />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Open drawer
      >
        <Ionicons name="menu" size={28} color="#000000" />
      </TouchableOpacity>

      {/* <View style={styles.content}> */}
      {/* {isOnline && (<TouchableOpacity style={styles.generateBookingButton} onPress={() => navigation.navigate('GenerateBooking')}>
          <Text style={styles.generateBookingText}>Generate Booking</Text>
        </TouchableOpacity>)}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            {isOnline ? 'You are online' : 'You are offline'}
          </Text>
          {isOnline ? (
            <Text style={styles.onlineText}>Online.......</Text>
          ) : (
            <TouchableOpacity
              style={styles.goOnlineButton}
              onPress={() => setIsOnline(true)}
            >
              <Text style={styles.goOnlineText}>Go Online</Text>
            </TouchableOpacity>
          )}
        </View> */}
      {/* </View> */}

      <View style={styles.content}>
        <View style={styles.userInfoRow}>
          <Text style={styles.text}>Outstation |₹400.3</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="person-circle" size={30} color="#000" />
            <Ionicons name="star" size={16} color="gold" style={styles.starIcon} />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.rideDetails}>Ride details and estimated time...</Text>
        </View>

        {/* Separator Line */}
        <View style={styles.separator} />

        <View style={styles.paymentRow}>
          <Text style={styles.paymentText}>Cash Payment</Text>
          <Text style={styles.viewDetails}>View Details</Text>
        </View>

      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 0.6,
  },
  content: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f9fa',
    height: 50,
  },
  generateBookingButton: {
    width: 262,
    height: 62,
    position: 'absolute',
    top: 10,
    marginTop: 40,
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 24,
  },
  generateBookingText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  statusText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  goOnlineButton: {
    backgroundColor: '#4285F4',
    height: 47,
    width: 152,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  goOnlineText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  onlineText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestion: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },

  userInfoRow: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  starIcon: {
    marginHorizontal: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  infoContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    marginBottom: 10,
  },
  rideDetails: {
    fontSize: 14,
    color: '#333',
  },
  separator: {
    height: 2,
    backgroundColor: '#e9ecef',
    marginVertical: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewDetails: {
    fontSize: 16,
    color: '#4285F4',
    fontWeight: 'bold',
  },
  buttonRow: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  declineButton: {
    backgroundColor: 'red',
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  acceptButton: {
    backgroundColor: 'green',
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;