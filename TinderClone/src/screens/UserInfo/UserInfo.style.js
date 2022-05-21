import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
      
    },
    tinder_header_text:{
        color:'#FA3A6E',
        fontSize:30,
        fontWeight:'bold',
        
        
    },
    textinput:{
        borderBottomColor:'#F63A6E',
        borderBottomWidth:1,
        width:'70%',
        height:40,
        marginBottom:20
        
    },
    login_text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    login_button:{
        backgroundColor:'#F63A6E',
        marginTop:40,
        width:'70%',
        alignItems:'center',
        padding:6,
        borderRadius:8
    },
    header_container:{
        flexDirection:'row'
        ,marginTop:20,
        width:200,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:60
    },
    step_text:{
        color:'#F63A6E',
        fontSize:14,
        
    }
})