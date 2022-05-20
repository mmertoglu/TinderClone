import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MatchesScreen from './src/screens/Matches/MatchesScreen';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
const onSwipeLeft = (user) => {
  console.log('Swipe Left', user.name)
};
const onSwipeRight = (user) => {
  console.log('Swipe Right', user.name)
}

const Stack = createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name='MatchesScreen' component={MatchesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default App