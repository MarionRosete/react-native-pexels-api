import { createNativeStackNavigator, DrawerActions } from '@react-navigation/native-stack';
import Profile from '../../screen/home/Favorite'
import { Button } from 'react-native';
import React from 'react';
import Home from '../../screen/home/Home';
import MyDrawer from '../drawer/MyDrawer';

const Stack = createNativeStackNavigator();
const HomeStack = ({navigation}) => {
    return (
          
                <Stack.Navigator >
                    <Stack.Screen 
                        name='Drawer' 
                        component={MyDrawer}
                        options={{headerShown:false}}
                    
                    />
                    <Stack.Screen 
                        name='Favorites' 
                        component={Profile} 
                        options={{ title: 'My Favorites' }}
                    />
                </Stack.Navigator>
          
    )
}

export default HomeStack


