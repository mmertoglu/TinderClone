import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './LoginScreen.style'
import Fontisto from 'react-native-vector-icons/Fontisto'
import auth from '@react-native-firebase/auth'

const LoginScreen = (props) => {
    const [userMail,setUserMail] = useState(null);
    const [password,setPassword] = useState(null);
    const [loading,setLoading] = useState(false)

    const goLogin = async () => {
        try {
        setLoading(true)
        await auth().createUserWithEmailAndPassword(userMail,password)
        setLoading(false)
        props.navigation.navigate('UserInfoScreen')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container} >
            <Fontisto name='tinder' color={'white'} size={140} />
            <Text  style={styles.tinder_header_text}>Tinder</Text>
            <TextInput
            placeholderTextColor={'white'}
            style={styles.textinput}
            value={userMail}
            placeholder='email...'
            onChangeText={text => setUserMail(text)}
            />
            <TextInput
            placeholderTextColor={'white'}
              style={styles.textinput}
            value={password}
            placeholder='password'
            onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity 
            onPress={goLogin}
            style={styles.login_button} >
                <Text style={styles.login_text} >Login</Text>
            </TouchableOpacity>
         
        </View>
    )
}
export default LoginScreen