import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const InvoiceDashboard = ({navigation}) => {
  return (
    <View>
                      <TouchableOpacity onPress={() => navigation.navigate('dashboard count')}>
      <Text>InvoiceDashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InvoiceDashboard