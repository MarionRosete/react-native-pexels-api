import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import RedirectAuthStack from './RedirectaAuthStack';
import MyDrawer from '../drawer/MyDrawer';

const Stack = createNativeStackNavigator();

const MainStack = () => {

    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen 
                        name='RedirectAuthStack'
                        component={RedirectAuthStack} 
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='HomeStack' 
                        component={HomeStack}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='AuthStack'
                        component={AuthStack} 
                        options={{
                            headerShown:false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default MainStack;