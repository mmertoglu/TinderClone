import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 140,
        borderWidth:1,
        borderColor:colors.tinderpink
    },
    image_container: {
      alignItems:'center',
      paddingHorizontal:10,
      backgroundColor:'white',
      paddingVertical:30

    },
    name_text: {
        fontSize: 30,
        color: 'black',
        marginTop:5

    },
    icon_container_top: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 15
    },
    bio_text:{
        fontSize:14,
        color:'gray'
    },
    tinderplus_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        marginTop:40
    },
    tinderplus_text:{
        color:colors.tinderpink,
        fontSize:24,
        fontWeight:'bold'
    },
    getmatches_text:{
        color:'black',
        fontSize:20
    },
    boost_text:{
        alignSelf:'center',
        marginTop:4
    },
    tinderplus_button:{
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:40,
        padding:10,
        borderRadius:20,
        elevation:10,
        width:200,
        alignItems:'center'
    },
    tinderplus_button_text:{
        color:colors.tinderpink,
        fontSize:18,
        fontWeight:'bold'
    }
})