import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Text, Dimensions, useWindowDimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import MatchesScreen from './src/screens/Matches/MatchesScreen';

const onSwipeLeft = (user) => {
  console.log('Swipe Left',user.name)
};
const onSwipeRight = (user) => {
  console.log('Swipe Right',user.name)
}


const App = (props) => {
  return (
    <View style={styles.container} >
    <MatchesScreen/>
    </View>
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