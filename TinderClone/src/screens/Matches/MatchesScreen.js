import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './MatchesScreen.style'
import users from "../../../assets/data/users";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const color = '#b5b5b5'

const MatchesScreen = (props) => {
    const goHomeScreen = () => {
        props.navigation.navigate('HomeScreen')
    }
    return (
        <View style={styles.container} >
            <View style={styles.icon_container_top} >
                <Fontisto name='tinder' color={color} size={30} onPress={goHomeScreen} />
                <MaterialCommunityIcons name='star-four-points' size={30} color={color} />
                <IonIcons name='ios-chatbubbles' size={30} color={'#F63A6E'} />
                <FontAwesome name='user' color={color} size={30} />
            </View>
            <Text style={styles.matches_text} >New Matches</Text>
            <View style={styles.users_container} >
                {users.map(user => (
                    <View style={styles.image_container} key={user.id} >
                        <Image source={{ uri: user.image }} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    )
}
export default MatchesScreen