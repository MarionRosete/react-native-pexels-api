import  React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'

const RedirectAuthStack = ({ navigation }) => {

    const getUser = async () => {
        const token =  await AsyncStorage.getItem('token')
        console.log({token:token})
          if(token==='auth'){
            navigation.navigate('HomeStack')
          }else{
            navigation.navigate('AuthStack')
          } 
    }

    useEffect(() => {
        getUser();
      }, [])
    return(
        <View></View>
    )
}

export default RedirectAuthStack

