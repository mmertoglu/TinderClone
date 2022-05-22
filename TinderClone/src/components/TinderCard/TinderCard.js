import React from "react";
import {View,Text,ImageBackground} from 'react-native'
import styles from './TinderCard.style'


const TinderCard = ({user}) => {
   
    return(
        <View style={styles.card_container} >
        <ImageBackground
        resizeMode='cover'
        style={styles.image}
        source={{uri:user.photourl}} >
          <Text style={styles.user_text} >{user.name}</Text>
          <Text style={styles.bio_text} >{user.bio}</Text>
        </ImageBackground>
        </View>
    )
}
export default TinderCard