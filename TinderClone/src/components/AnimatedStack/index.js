import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Text, Dimensions, useWindowDimensions } from 'react-native'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  interpolate,
  runOnJS
} from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'
import Like from '../../../assets/images/LIKE.png'
import Nope from '../../../assets/images/nope.png'


const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const AnimatedStack = (props) => {

const {data,renderItem,onSwipeRight,onSwipeLeft} = props;
    
  const [currentindex, setCurrentIndex] = useState(0)
  const [nextCardNumber, setNextCardNumber] = useState(currentindex + 1)
  const nextProfile = data[nextCardNumber]
  const currentUser = data[currentindex]
  const { width: screenWidth } = useWindowDimensions();
  const hiddenTranslationX = 2 * screenWidth;
  const translateX = useSharedValue(0)
  const rotation = useDerivedValue(() => interpolate(
    translateX.value,
    [0, hiddenTranslationX],
    [0, 45],
  ) + 'deg');
  const cardStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: translateX.value
    },
    {
      rotate: rotation.value
    }

    ]
  }));
  const next_cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslationX, 0, hiddenTranslationX],
          [1, 0.8,1],
        )
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslationX, 0, hiddenTranslationX],
      [1, 0.6, 1],
    )
  }));
  const like_Style = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [ 0, hiddenTranslationX/6],
      [ 0, 1],
    )
  }));

  const nope_style = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [ 0, -hiddenTranslationX/5],
      [ 0, 1],
    )
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0)
        return;
      } 
      translateX.value = withSpring(hiddenTranslationX * Math.sign( event.velocityX) )
     runOnJS(setCurrentIndex)(currentindex +1)
     const Swipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft
     runOnJS(Swipe)(currentUser)
    }
  })
  React.useEffect(()=>{
    translateX.value = 0;
    setNextCardNumber(currentindex +1)
  },[currentindex])
  return (
    <GestureHandlerRootView style={styles.container} >
     {nextProfile &&(
      <View style={styles.next_card} >
        <Animated.View style={[styles.card_style, next_cardStyle]} >
          {renderItem({item : nextProfile })}
        </Animated.View>
      </View> )
      }
      <PanGestureHandler onGestureEvent={gestureHandler} >
        <Animated.View style={[styles.card_style, cardStyle]} >
          <Animated.Image source={Like} style={[styles.like,{left:20},like_Style]} resizeMode='contain' />
          <Animated.Image source={Nope} style={[styles.like,{right:10},nope_style]}  />
          {renderItem({item : currentUser })}
        </Animated.View>
      </PanGestureHandler>
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
  card_style: {
    width: '100%',
    height:'70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next_card: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  
   
  },
  like:{
    width:150,
    height:150,
    position:'absolute',
    top:10,
    zIndex:1
  }
})
export default AnimatedStack