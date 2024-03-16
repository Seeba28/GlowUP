import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Button({onPress,title}) {
  return (
    <TouchableOpacity onPress={onPress}
    style={styles.container}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
    
  )
}