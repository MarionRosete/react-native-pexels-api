import React,{useEffect} from 'react'
import { FlatList, Image, View, TouchableOpacity, Alert} from 'react-native'
import { useState } from 'react/cjs/react.development'
import styles from '../../style/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
    const [images, setImage]=useState('')

    const getImages = async() =>{
        const image =  await AsyncStorage.getItem('favorite')
        setImage(image)
    }

    useEffect(()=>{
        getImages()
    },[images])

    const deletePhoto=()=>{
        AsyncStorage.removeItem('favorite'), setImage('');
    }

    const confirmDeletePhoto = (url) =>
    Alert.alert(
    "Delete from Favorites?",
    "",
    [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        { 
            text: "Delete Photo", 
            onPress: () =>  deletePhoto
        }
    ]
    );
    
  
    return (
        <View >
        <FlatList
            data={images}
            renderItem={()=>{
            return(
                <TouchableOpacity onPress={()=>{confirmDeletePhoto(images)}}>
                <View style={styles.conatiner} >
                    <View style={styles.form}>
                        <Image 
                            style={styles.image}  
                            source={{uri:images}}
                        />
                    </View>
                </View>
                </TouchableOpacity>
            )
            }}
        />
    </View>
    )
}

export default Profile

