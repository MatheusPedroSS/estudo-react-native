import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {
    const numeroGerado = parseInt((min + Math.random() * (max - min + 1)));
    return(
        <Text style={Estilo.txtG}>O número gerado foi: {numeroGerado}</Text>
    )
}