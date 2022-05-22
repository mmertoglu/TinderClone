import React, { useEffect, useState } from "react";
import { View, Text, Image } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import styles from './ProfileScreen.style'
import database from '@react-native-firebase/database'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from "react-native-gesture-handler";
import ParseContent from "../../utils/ParseContent";


const color = '#b5b5b5'
const ProfileScreen = (props) => {
    const currentuser = auth().currentUser.email.split('@',1).toString()
    const [data, setData] = useState([])
    React.useEffect(() => {
      database()
          .ref('users/'+currentuser)
          .once('value')
          .then(snapshot => {
            setData(snapshot.val())
          })
          
  }, [])


    return (
        <View style={styles.container} >
            <View style={styles.icon_container_top} >
                <Fontisto name='tinder' color={color} size={30} onPress={()=> props.navigation.navigate('HomeScreen')} />
                <MaterialCommunityIcons name='star-four-points' size={30} color={color} />
                <IonIcons name='ios-chatbubbles' size={30} color={color} onPress={()=> props.navigation.navigate('MatchesScreen')} />
                <FontAwesome name='user' color={'#F63A6E'} size={30} onPress={() => props.navigation.navigate('ProfileScreen')} />
            </View>
            <View style={styles.image_container} >
                <Image style={styles.image} source={{ uri: data.photourl }} />
                <Text style={styles.name_text} >{data.name}, {data.age}</Text>
                <Text style={styles.bio_text}>{data.bio}</Text>
                <View style={styles.tinderplus_container} >
                    <Text style={styles.tinderplus_text} >Tinder Plus</Text>
                    <Text style={styles.tinderplus_text} >Settings</Text>
                </View>
            </View>
            <View style={[styles.tinderplus_container,{justifyContent:'center',alignItems:'center'}]} >
                <IonIcons name='flash' size={40} color={'#A65CD2'} />
                <Text style={styles.getmatches_text} >Get Matches Faster</Text>
            </View>
            <Text style={styles.boost_text} >Boost your profile once per month</Text>
            <TouchableOpacity style={styles.tinderplus_button} >
                <Text style={styles.tinderplus_button_text} >Get Tinder Plus</Text>
            </TouchableOpacity>

        </View>
    )
}
export default ProfileScreen