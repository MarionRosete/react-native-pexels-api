import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState} from 'react'
import {   Text,  View } from 'react-native'
import Styles from '../../style/Styles'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainButton from '../../components/button/MainButton';
import ClearButton from '../../components/button/ClearButton';
import InputWithIcon from '../../components/input/InputWithIcon';

const Login = ({navigation}) => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')

    const handleRegister=()=>{
        navigation.navigate('Register')
    }
    
    const handleLogin=async()=>{
        const storageUsername = await AsyncStorage.getItem('username')
        const storagePassword = await AsyncStorage.getItem('password')
        if(username===storageUsername&&password===storagePassword){
            await AsyncStorage.setItem('token', 'auth');
            navigation.navigate('HomeStack',{name:username})
            
        }else{
            setError('Whoops Invalid Credentials');
            setTimeout(()=>{
                setError('')
            },2000)
        }
    }
    return (
        <SafeAreaProvider>
            <View style={Styles.container}>
                <Text style={Styles.headingText}>
                    Login Page
                </Text>
                <Text style={Styles.error}>
                    {error}
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
                    name='login'
                    press={handleLogin}
                />
                <ClearButton
                    name='register'
                    press={handleRegister}
                />
            </View>
        </SafeAreaProvider>
    )
}

export default Login


