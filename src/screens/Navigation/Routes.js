import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home';
import Chess from '../Information/Chess';
import BasketBall from '../Information/BasketBall';
import Tennies from '../Information/Tennies';
import Vollyball from '../Information/Vollyball';
import Draughts from '../Information/Draughts';
import Go from '../Information/Go';
import Xiangqi from '../Information/Xiangqi';
import Poker from '../Information/Poker';
import Mahjong from '../Information/Mahjong';
import Backgammon from '../Information/Backgammon';
import Football from '../Information/Football';
import Login from '../Auth/Login';
import Golf from '../Information/Golf';
import Cycling from '../Information/Cycling';
import Yoga from '../Information/Yoga';
import Quoridor from '../Information/Quoridor';




const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Football" component={Football} />
        <Stack.Screen name="BasketBall" component={BasketBall} />
        <Stack.Screen name="Tennies" component={Tennies} />
        <Stack.Screen name="Chess" component={Chess} />
        <Stack.Screen name="Vollyball" component={Vollyball} />
        <Stack.Screen name="Draughts" component={Draughts} />
        <Stack.Screen name="Go" component={Go} />
        <Stack.Screen name="Xiangqi" component={Xiangqi} />
        <Stack.Screen name="Poker" component={Poker} />
        <Stack.Screen name="Mahjong" component={Mahjong} />
        <Stack.Screen name="Backgammon" component={Backgammon} />
        <Stack.Screen name="Golf" component={Golf} />
        <Stack.Screen name="Cycling" component={Cycling} />
        <Stack.Screen name="Yoga" component={Yoga} />
        <Stack.Screen name="Quoridor" component={Quoridor} />


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Routes