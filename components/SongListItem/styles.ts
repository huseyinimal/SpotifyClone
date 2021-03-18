import {StyleSheet} from "react-native";
import { Text, View } from '../Themed';

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 15,
    },
    image:{
        width:75,
        height:75,
    },
    rightContainer:{
        justifyContent:'space-around',
        marginLeft: 15,
    },
    title:{
        color: 'white',
        fontSize: 20,
    
    },
    artist:{
        color:'lightgray',
        fontSize:16,
    }
    
})

export default styles;