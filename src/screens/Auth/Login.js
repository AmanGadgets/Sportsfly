import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={{fontSize:20}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login