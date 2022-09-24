import React from 'react'
import { Button } from 'react-native-elements'
import styles from '../../style/Styles'
const MainButton = (props) => {
    return (
        <Button 
            style={styles.mainbtn} 
            onPress={props.press}
            title={props.name}
        />
    )
}

export default MainButton


