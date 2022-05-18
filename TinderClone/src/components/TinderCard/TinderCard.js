import React from "react";
import {View,Text,ImageBackground} from 'react-native'
import styles from './TinderCard.style'


const TinderCard = (props) => {
    const {name,image,bio} = props.user;
    return(
        <View style={styles.card_container} >
        <ImageBackground
        resizeMode='cover'
        style={styles.image}
        source={{uri:image}} >
          <Text style={styles.user_text} >{name}</Text>
          <Text style={styles.bio_text} >{bio}</Text>
        </ImageBackground>
        </View>
    )
}
export default TinderCard