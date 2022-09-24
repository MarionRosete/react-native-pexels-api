import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/auth/Login'
import Register from '../../screen/auth/Register'
import React from 'react';


const Stack = createNativeStackNavigator();
const AuthStack=()=>{
    return(
        
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                    name='Login' 
                    component={Login} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name='Register' 
                    component={Register}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
        
    );
}

export default AuthStack;