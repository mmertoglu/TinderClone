import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Text, Dimensions, useWindowDimensions } from 'react-native'
import TinderCard from '../../components/TinderCard/TinderCard'
import users from '../../../assets/data/users'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AnimatedStack from '../../components/AnimatedStack/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const onSwipeLeft = (user) => {
  console.log('Swipe Left', user.name)
};
const onSwipeRight = (user) => {
  console.log('Swipe Right', user.name)
}


const color = '#b5b5b5'

const HomeScreen = (props) => {
  const handleMatchesScreen = () => {
    return(
      props.navigation.navigate('MatchesScreen')
    )
  }
  return (
    <GestureHandlerRootView style={styles.container} >
     <View style={styles.icon_container_top} >
      <Fontisto name='tinder' color={'#F63A6E'} size={30} />
      <MaterialCommunityIcons name='star-four-points' size={30} color={color} />
      <IonIcons name='ios-chatbubbles' size={30} color={color} onPress={handleMatchesScreen} />
      <FontAwesome name='user' color={color} size={30} onPress={()=>props.navigation.navigate('ProfileScreen')} />
      </View>
      <AnimatedStack
        data={users}
        renderItem={(({ item }) => <TinderCard user={item} />)}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.bottom_icon_container} >
      <FontAwesome name='undo' color={'#FBD88B'} size={30} />
      <Entypo name='cross' color={'#F76C6B'} size={30} />
      <FontAwesome name='star' size={30} color={'#3AB4CC'} />
      <FontAwesome name='heart' size={30} color={'#4FCC94'} />
      <IonIcons name='flash' size={30} color={'#A65CD2'} />
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  icon_container_top:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    backgroundColor:'white',
    paddingVertical:15
  },
  bottom_icon_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    backgroundColor:'white',
    padding:10
  },
})
export default HomeScreen