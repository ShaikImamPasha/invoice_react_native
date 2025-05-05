import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InvoiceDashboard from '../../../../screens/invoice/InvoiceDashboard'
import Dashboard from '../../../../screens/home/Dashboard'
import withProtectedRoute from '../../../ProtectedRoute'
const Homestacksnavigations=createNativeStackNavigator()

const Invoicestacks = () => {
  return (
    <Homestacksnavigations.Navigator>
        <Homestacksnavigations.Screen
        component={InvoiceDashboard}
        name="invoice dashboard"
        // options={{
        //     headerShown:false
        // }}
        >

        </Homestacksnavigations.Screen>
        <Homestacksnavigations.Screen
        component={withProtectedRoute(Dashboard, false)}
        name="dashboard count"
        >

        </Homestacksnavigations.Screen>
    </Homestacksnavigations.Navigator>
  )
}

export default Invoicestacks