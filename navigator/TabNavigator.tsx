import { View, Text } from 'react-native';
import React from 'react';
import CustomersScreen from '../screens/CustomersScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Customers' component={CustomersScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
