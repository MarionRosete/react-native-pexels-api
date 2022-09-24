import React from 'react'
import { Button } from 'react-native-elements'


const ClearButton = (props) => {
    return (
        <Button
            type='clear'
            onPress={props.press}
            title={props.name}
        />
    )
}

export default ClearButton


