import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Homestacks from './screens/Home/Homestacks';
import Invoicestacks from './screens/invoice/Invoicestacks';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BottomTab = createBottomTabNavigator();
const Bottomtab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={focused ? '#007aff' : color} />
          ),
        }}
        component={Homestacks}
        
        name="home">
      </BottomTab.Screen>
      <BottomTab.Screen
          options={{
            headerShown: false,
          }}
          component={Invoicestacks}
          name="invoice"></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default Bottomtab;
