import React from "react";
import {View,Text,Image,ScrollView} from 'react-native'
import styles from './MatchesScreen.style'
import users from "../../../assets/data/users";


const MatchesScreen = () => {
    return(
        <View style={styles.container} >
            <Text style={styles.matches_text} >New Matches</Text>
            <View style={styles.users_container} >
            {users.map(user => (
                <View style={styles.image_container} key={user.id} >
                <Image source={{uri:user.image}} style={styles.image} />
                </View>
            ))}
            </View>
        </View>
    )
}
export default MatchesScreen