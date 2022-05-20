import { StyleSheet } from "react-native";

export default StyleSheet.create({
    matches_text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#F63A6E'
    },
    container:{
        flex:1,
        padding:10,
        width:'100%'
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:50,
       
    },
    image_container:{
        width:100,
        height:100,
        margin:10,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#F63A6E',
        padding:2
        
    },
    users_container:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
})