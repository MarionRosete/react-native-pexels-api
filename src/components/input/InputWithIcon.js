import React from 'react'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../style/Styles'
const InputWithIcon = (props) => {
    return (
        <Input 
        containerStyle={Styles.input}
        leftIcon={
            <Icon
            name={props.icon}
            size={24}
            color='#006DFF'
            />
        }
        placeholder={props.name} 
        secureTextEntry={props.password} 
        onChangeText={props.onChange}
    />
    )
}

export default InputWithIcon


