import {StyleSheet} from "react-native";
import { Text, View } from '../Themed';
import Colors from '../../constants/Colors';

const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        
        position: 'absolute',
        bottom: 49,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth:2,
        borderColor: 'black'
        
        
    },
    progress:{
        height:3,
        
        backgroundColor: '#bcbcbcbc'
    },
    row:{
        flexDirection: 'row',
    },
    image:{
        width:75,
        height:75,
        marginRight: 10
    },
    rightContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer:{
        flexDirection:'row',
        alignItems: 'center',
    },
    iconsContainer:{
        flexDirection:'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    title:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        margin: 7
    
    },
    artist:{
        color:'lightgray',
        fontSize:17,
    }
    
})

export default styles;