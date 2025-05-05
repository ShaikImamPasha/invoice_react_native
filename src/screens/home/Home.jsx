import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  return (
  <SafeAreaProvider>
      <View >
              <TouchableOpacity onPress={() => navigation.navigate('invoice home')}>
    <Text
    >
        
       home
    </Text>
    </TouchableOpacity>
    </View>
  </SafeAreaProvider>
  )
}

export default Home