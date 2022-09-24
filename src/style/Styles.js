import { transform } from '@babel/core'
import { StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
     },
     flexRow:{
         flexDirection:'row',
         alignItems: 'center',
     },
    input:{
        width: 300,
        height: 44,
        marginBottom: 15,
        
    },
    headingText:{
        fontWeight:'bold',
        fontSize:30,
        padding:30,
    },
    text:{
        fontWeight:'500',
        padding:5,
        color:'#006DFF'
    },
    error:{
        color:'red'
    },
    image:{
            width: '100%',
            height: 400,
            resizeMode: 'cover',
    },
    mainbtn:{
            width:300
    }
  

   
})
export default styles