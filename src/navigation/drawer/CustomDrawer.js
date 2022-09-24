import React,{useEffect,useState}from 'react';
import {  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../style/Styles';
import { View,Text} from 'react-native'
import { Avatar } from 'react-native-elements';
import Image from '../../../assets/image/25619440.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDrawer=({navigation})=> {
    const[user,setUser]=useState('')

    const getUser = async () => {
      const user =  await AsyncStorage.getItem('username')
      setUser(user)
    }
    useEffect(()=>{
        getUser()
      },[]
    )

    const myProfile =()=>{
      console.log('My Profile')
    }
    const myFavorites =()=>{
      navigation.navigate('Favorites')
    }
    const handleLogout =async()=>{
      await AsyncStorage.removeItem('token');
      navigation.reset({routes:[{name:'AuthStack'}]})
    }

   
    return (

      <DrawerContentScrollView >
        <View style={styles.flexRow}>
        <Avatar
          size="large"
          rounded
          source={Image}
        />
        <Text 
          style={styles.text} 
          onPress={myProfile}>
          {user}
        </Text>
        </View>
        <DrawerItem 
          label='My Favorite'
          icon={()=>
            <Icon
            name='star'
            size={20}
            color='#006DFF'
            />
          }
          onPress={myFavorites}
        />
         <DrawerItem 
            label='Logout'
            icon={()=>
              <Icon
              name='user'
              size={24}
              color='#006DFF'
              />
            }
            onPress={handleLogout}
        />
      </DrawerContentScrollView>
   
  
    );
}
export default CustomDrawer