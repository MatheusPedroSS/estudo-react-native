import React from 'react'
import { Text } from 'react-native'

export default ({min, max}) => {
    const numeroGerado = Math.round((min + Math.random() * (max - min + 1)));
    return(
        <Text>O número gerado foi: {numeroGerado}</Text>
    )
}