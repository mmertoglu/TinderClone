import React, { useState } from 'react'
import { View, Text, TextInput ,TouchableOpacity} from 'react-native'
import styles from './UserInfo.style'
import Fontisto from 'react-native-vector-icons/Fontisto'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const UserInfo = (props) => {
    const user = auth().currentUser.email
    const [name,setName] = useState(null);
    const [age,setAge] = useState(null);
    const [gender,setGender] = useState(null);
    const [photo,setPhoto] = useState(null);
    const [bio,setBio] = useState(null);


    const incompleteAllInputs = !name || !age || !gender || !photo || !bio

    const updateProfile = () => {
        firestore().collection('users').doc(user).set({
            name:name,
            age:age,
            gender:gender,
            photourl:photo,
            bio:bio
        }).then(()=>{
            props.navigation.navigate('HomeScreen')
        })
    }
          
 

    return (
        <View style={styles.container} >
            <View style={styles.header_container} >
            <Fontisto name='tinder' color={'#FA3A6E'} size={30} />
            <Text  style={styles.tinder_header_text}>Tinder</Text>
            </View>
            <Text style={styles.step_text} >Step 1 : The Name</Text>
            <TextInput
            style={styles.textinput}
            value={name}
            placeholder='your name...'
            onChangeText={text => setName(text)}
            />
            <Text style={styles.step_text} >Step 2 : The Age</Text>
            <TextInput
            style={styles.textinput}
            value={age}
            placeholder='your age...'
            onChangeText={text => setAge(text)}
            />
            <Text style={styles.step_text} >Step 3 : The Gender</Text>
            <TextInput
            style={styles.textinput}
            value={gender}
            placeholder='your gender...'
            onChangeText={text => setGender(text)}
            />
            <Text style={styles.step_text} >Step 4 : The Profile Photo</Text>
            <TextInput
            style={styles.textinput}
            value={photo}
            placeholder='your photo(url)...'
            onChangeText={text => setPhoto(text)}
            />
            <Text style={styles.step_text} >Step 5 : The Bıo</Text>
            <TextInput
            style={styles.textinput}
            value={bio}
            placeholder='your bio...'
            onChangeText={text => setBio(text)}
            />
            <TouchableOpacity 
            onPress={updateProfile}
            disabled={incompleteAllInputs}
            style={[styles.login_button , incompleteAllInputs==true ? {backgroundColor:'gray'}: styles.login_button.backgroundColor]} >
                <Text style={styles.login_text} >Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
export default UserInfo