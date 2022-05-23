import React,{useState} from "react";
import { View, Text, Image, ScrollView,FlatList } from 'react-native'
import styles from './MatchesScreen.style'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParseContent from "../../utils/ParseContent";

const color = '#b5b5b5'

const MatchesScreen = (props) => {
    
    const currentuser = auth().currentUser.email.split('@',1).toString()
    const [data, setData] = useState([])
    React.useEffect(() => {
      database()
          .ref('users/'+currentuser+'/liked/')
          .once('value')
          .then(snapshot => {
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setData(ParsedData)
            console.log(data)
          })
          
  }, [])

const goHomeScreen = () => {
    props.navigation.navigate('HomeScreen')
}
const renderItem = ({item}) => (
    <View style={styles.image_container} >
    <Image source={{ uri: item.photourl }} style={styles.image} />
</View>
)
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
               <FlatList
               horizontal
               data={data}
               renderItem={renderItem}
               />
                    
               
            </View>
        </View>
    )
}
export default MatchesScreen