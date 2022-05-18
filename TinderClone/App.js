import React from 'react'
import {Image,StyleSheet,View,ImageBackground,Text} from 'react-native'
import TinderCard from './src/components/TinderCard/TinderCard'
import users from './assets/data/users'

const App = () => {
  return(
   <View style={styles.container} > 
  <TinderCard user={users[2]} />
  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})
export default App