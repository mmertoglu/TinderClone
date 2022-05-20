import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Text, Dimensions, useWindowDimensions } from 'react-native'
import TinderCard from './src/components/TinderCard/TinderCard'
import users from './assets/data/users'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AnimatedStack from './src/components/AnimatedStack';

const onSwipeLeft = (user) => {
  console.log('Swipe Left',user.name)
};
const onSwipeRight = (user) => {
  console.log('Swipe Right',user.name)
}


const App = (props) => {
  return (
    <GestureHandlerRootView style={styles.container} >
     <AnimatedStack
     data={users}
     renderItem = {(({item}) => <TinderCard user={item} />)}
     onSwipeLeft={onSwipeLeft}
     onSwipeRight={onSwipeRight}
     />
    </GestureHandlerRootView>
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