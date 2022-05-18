import { StyleSheet } from "react-native";

export default StyleSheet.create({
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