// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import React from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DriverLoginPage from "./src/screen/DriverLogin/DriverLoginPage";
// import OtpScreen from "./src/screen/DriverLogin/OtpScreen";
// import PasswordScreen from "./src/screen/DriverLogin/PasswordScreen";
// import CreateAccount from "./src/screen/DriverRegister/CreateAccount";
// import NotRegister from "./src/screen/DriverRegister/NotRegister";
// import PanAadhar from "./src/screen/DriverRegister/PanAadhar";
// import UploadDocument from "./src/screen/DriverRegister/UploadDocument";
// import VehicleDetails from "./src/screen/DriverRegister/VehicleDetails";
// import GenerateBooking from "./src/screen/Generatebooking/GenerateBooking";
// import LocalScreen from "./src/screen/Generatebooking/LocalScreen";
// import OnewayScreen from "./src/screen/Generatebooking/OnewayScreen";
// import OutStationScreen from "./src/screen/Generatebooking/OutStationScreen";
// import InitialScreen from "./src/screen/InitialScreen";
// import MapScreen from "./src/screen/RidePages/MapScreen";
// import CustomDrawerContent from "./src/components/CustomDrawerContent";

// const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="InitialScreen"
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="InitialScreen" component={InitialScreen} />
//           <Stack.Screen name="DriverLoginPage" component={DriverLoginPage} />
//           <Stack.Screen name="OtpScreen" component={OtpScreen} />
//           <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
//           <Stack.Screen name="NotRegister" component={NotRegister} />
//           <Stack.Screen name="CreateAccount" component={CreateAccount} />
//           <Stack.Screen name="UploadDocument" component={UploadDocument} />
//           <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
//           <Stack.Screen name="PanAadhar" component={PanAadhar} />
//           <Stack.Screen name="MapScreen" component={MapScreen} />
//           <Stack.Screen name="GenerateBooking" component={GenerateBooking} />
//           <Stack.Screen name="LocalScreen" component={LocalScreen} />
//           <Stack.Screen name="OnewayScreen" component={OnewayScreen} />

//           <Stack.Screen name="OutStationScreen" component={OutStationScreen} />

//         </Stack.Navigator>
//           <Drawer.Navigator
//             drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer
//           >
//             <Drawer.Screen name="Home" component={MapScreen} />
//             {/* Add other screens here */}
//           </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }


import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "./src/components/CustomDrawerContent";

// Import Stack Screens
import InitialScreen from "./src/screen/InitialScreen";
import DriverLoginPage from "./src/screen/DriverLogin/DriverLoginPage";
import OtpScreen from "./src/screen/DriverLogin/OtpScreen";
import PasswordScreen from "./src/screen/DriverLogin/PasswordScreen";
import NotRegister from "./src/screen/DriverRegister/NotRegister";
import CreateAccount from "./src/screen/DriverRegister/CreateAccount";
import UploadDocument from "./src/screen/DriverRegister/UploadDocument";
import VehicleDetails from "./src/screen/DriverRegister/VehicleDetails";
import PanAadhar from "./src/screen/DriverRegister/PanAadhar";
import MapScreen from "./src/screen/RidePages/MapScreen";
import GenerateBooking from "./src/screen/Generatebooking/GenerateBooking";
import LocalScreen from "./src/screen/Generatebooking/LocalScreen";
import OnewayScreen from "./src/screen/Generatebooking/OnewayScreen";
import OutStationScreen from "./src/screen/Generatebooking/OutStationScreen";
import MessageScreen from "./src/screen/Drawer/MessageScreen";
import BookingScreen from "./src/screen/Drawer/BookingScreen";
import TripDetailsScreen from "./src/screen/Drawer/TripDetailsScreen";
import AccountScreen from "./src/screen/Drawer/AccountScreen";

// Dummy Screens for Drawer Items
const EarningsScreen = () => <View><Text>Earnings</Text></View>;
const HelpScreen = () => <View><Text>Help & Feedback</Text></View>;

// Create Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Authentication & Main Screens
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="InitialScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="InitialScreen" component={InitialScreen} />
    <Stack.Screen name="DriverLoginPage" component={DriverLoginPage} />
    <Stack.Screen name="OtpScreen" component={OtpScreen} />
    <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
    <Stack.Screen name="NotRegister" component={NotRegister} />
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
    <Stack.Screen name="UploadDocument" component={UploadDocument} />
    <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
    <Stack.Screen name="PanAadhar" component={PanAadhar} />
    <Stack.Screen name="GenerateBooking" component={GenerateBooking} />
    <Stack.Screen name="LocalScreen" component={LocalScreen} />
    <Stack.Screen name="OnewayScreen" component={OnewayScreen} />
    <Stack.Screen name="OutStationScreen" component={OutStationScreen} />
    
    {/* Add MapScreen to Stack */}
    <Stack.Screen name="MapScreen" component={MapScreen} />
  </Stack.Navigator>
);

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{ headerShown: false }}
  >
    {/* Home Screen inside Drawer (Wrapped with StackNavigator) */}
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="Messages" component={MessageScreen} />
    <Drawer.Screen name="Earnings" component={EarningsScreen} />
    <Drawer.Screen name="TripDetails" component={TripDetailsScreen} />
    <Drawer.Screen name="Booking" component={BookingScreen} />
    <Drawer.Screen name="Account" component={AccountScreen} />
    <Drawer.Screen name="Help & Feedback" component={HelpScreen} />
  </Drawer.Navigator>
);

// App Component
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
