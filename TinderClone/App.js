import React from 'react'
import {Image,StyleSheet,View,ImageBackground,Text} from 'react-native'

const App = () => {
  return(
   <View style={styles.container} > 
   <View style={styles.card_container} >
    <ImageBackground
    resizeMode='cover'
    style={styles.image}
    source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG'}} >
      <Text style={styles.user_text} >Vadim Savin</Text>
      <Text style={styles.bio_text} >I will be the semicolons to your code</Text>
    </ImageBackground>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    height:'100%',
    width:'100%',
    borderRadius:10,
    overflow:'hidden',
    justifyContent:'flex-end'
    
  },
  card_container:{
    width:'90%',
    backgroundColor:'red',
    height:'70%',
    borderRadius:10,
    elevation:20,
    

  },
  user_text:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginHorizontal:10,

  },
  bio_text:{
    color:'white',
    lineHeight:24,
    fontSize:18,
    marginHorizontal:10,
    marginBottom:10
  }
})
export default App