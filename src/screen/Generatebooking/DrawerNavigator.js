import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../RidePages/MapScreen';
import GenerateBooking from './GenerateBooking';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MapScreen">
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name="GenerateBooking" component={GenerateBooking} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
