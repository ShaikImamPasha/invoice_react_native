import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Bottomtab from '../BottomTab/Bottomtab';
import Home from '../../screens/home/Home';

const ScreensStack = createNativeStackNavigator();
const Stacks = () => {
  return (
    <ScreensStack.Navigator>
      <ScreensStack.Screen
        name="main"
        options={{
          headerShown: false,
        }}
        component={Bottomtab}></ScreensStack.Screen>
      <ScreensStack.Screen
        name="invoice home"
        // options={{
        //   headerShown: false,
        // }}
        component={Home}></ScreensStack.Screen>

    </ScreensStack.Navigator>
  );
};

export default Stacks;
