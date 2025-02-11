import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './src/screen/InitialScreen';
import DriverLoginPage from './src/screen/DriverLogin/DriverLoginPage';
import OtpScreen from './src/screen/DriverLogin/OtpScreen';
import PasswordScreen from './src/screen/DriverLogin/PasswordScreen';
import NotRegister from './src/screen/DriverRegister/NotRegister';
import CreateAccount from './src/screen/DriverRegister/CreateAccount';
import UploadDocument from './src/screen/DriverRegister/UploadDocument';
import VehicleDetails from './src/screen/DriverRegister/VehicleDetails';
import PanAadhar from './src/screen/DriverRegister/PanAadhar';
import MapScreen from './src/screen/RidePages/MapScreen';
import GenerateBooking from './src/screen/Generatebooking/GenerateBooking';
import LocalScreen from './src/screen/Generatebooking/LocalScreen';
import OnewayScreen from './src/screen/Generatebooking/OnewayScreen';
import OutStationScreen from './src/screen/Generatebooking/OutStationScreen';
import DrawerNavigator from './src/screen/Generatebooking/DrawerNavigator';

const Stack = createStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="InitialScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="InitialScreen"
                        component={InitialScreen}
                    />
                    <Stack.Screen
                        name="DriverLoginPage"
                        component={DriverLoginPage}
                    />
                    <Stack.Screen
                        name="OtpScreen"
                        component={OtpScreen}
                    />
                    <Stack.Screen
                        name="PasswordScreen"
                        component={PasswordScreen}
                    />
                    <Stack.Screen
                        name="NotRegister"
                        component={NotRegister}
                    />
                    <Stack.Screen
                        name="CreateAccount"
                        component={CreateAccount}
                    />
                    <Stack.Screen
                        name="UploadDocument"
                        component={UploadDocument}
                    />
                    <Stack.Screen
                        name="VehicleDetails"
                        component={VehicleDetails}
                    />
                    <Stack.Screen
                        name="PanAadhar"
                        component={PanAadhar}
                    />
                    <Stack.Screen
                        name="MapScreen"
                        component={MapScreen}
                    />
                    <Stack.Screen
                        name="GenerateBooking"
                        component={GenerateBooking}
                    />
                    <Stack.Screen
                        name="LocalScreen"
                        component={LocalScreen}
                    />
                    <Stack.Screen
                        name="OnewayScreen"
                        component={OnewayScreen}
                    />

                    <Stack.Screen
                        name="OutStationScreen"
                        component={OutStationScreen}
                    />

                   <DrawerNavigator />

                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
