import React from 'react';
import { createDrawerNavigator,  } from '@react-navigation/drawer';
import Home from '../../screen/home/Home';
import CustomDrawer from'./CustomDrawer'
const Drawer = createDrawerNavigator();


  
 

const MyDrawer=()=> {
 

  return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(props)=>
            <CustomDrawer{...props}/>
        }>
          <Drawer.Screen name='Home' component={Home}/>
        </Drawer.Navigator>
  );
}


export default MyDrawer;