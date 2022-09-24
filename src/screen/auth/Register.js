import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState} from 'react'
import { Text, View,} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Styles from '../../style/Styles'
import MainButton from '../../components/button/MainButton';
import ClearButton from '../../components/button/ClearButton';
import InputWithIcon from '../../components/input/InputWithIcon';
const Register = ({navigation}) => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
  
    const handleRegister=async()=>{
        try{
            await AsyncStorage.setItem('username',username)
            await AsyncStorage.setItem('password',password)
            
        }catch(e){
            console.log(e);
        }
    
    }
    const handleLogin=()=>{
        navigation.navigate('Login')
    }
    return (
        <SafeAreaProvider>
            <View style={Styles.container}>
                <Text style={Styles.headingText}>
                    Register
                </Text>
                <InputWithIcon
                    name='Username'
                    icon='user' 
                    onChange={(e)=>setUsername(e)}
                />
                <InputWithIcon
                    name='Password'
                    icon='lock'
                    password={true}
                    onChange={(e)=>setPassword(e)}
                />
                <MainButton
                    name='Register'
                    press={handleRegister}
                />
                <ClearButton
                    name='Login'
                    press={handleLogin}
                />
            </View>
        </SafeAreaProvider>
    )
}

export default Register


