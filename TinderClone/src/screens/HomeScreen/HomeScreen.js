import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Text, Dimensions, useWindowDimensions } from 'react-native'
import TinderCard from '../../components/TinderCard/TinderCard'
import users from '../../../assets/data/users'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AnimatedStack from '../../components/AnimatedStack/index';

const onSwipeLeft = (user) => {
  console.log('Swipe Left',user.name)
};
const onSwipeRight = (user) => {
  console.log('Swipe Right',user.name)
}


const HomeScreen = (props) => {
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
    width:'100%'
  },
})
export default HomeScreen