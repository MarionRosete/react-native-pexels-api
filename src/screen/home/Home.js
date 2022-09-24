import React,{useEffect,useState} from 'react'
import { Image, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import pexelsAPI from '../../library/api/PexelsApi'
import styles from '../../style/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';






const Home = () => {
    
    const [images ,setImages]=useState('')

    const getImages=async()=>{
        const images = await pexelsAPI()
        setImages(images)
    }

    useEffect(()=>{
        getImages()
    },[])

    const addPhoto=()=>{
        AsyncStorage.setItem('favorite',url)
    }

    const confirmAddPhoto = (url) =>
    Alert.alert(
    "Add to Favorites?",
    "",
    [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        { 
            text: "Add Photo", 
            onPress: () =>  addPhoto
        }
    ]
    );
  
   
    
    if(!images) {
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.heading}>
                        Loading...
                    </Text>
                </View>
            </View>
        )    
    }
  
    return (
        <View >
            <FlatList
                data={images}
                renderItem={({item, index})=>{
                return(
                    <TouchableOpacity onPress={()=>{confirmAddPhoto(item.src.portrait)}}>
                    <View style={styles.conatiner} >
                        <View style={styles.form}>
                            <Image 
                                style={styles.image}  
                                source={{uri:item.src.portrait}}
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

export default Home



