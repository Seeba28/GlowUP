import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles} from './styles';
import {images} from '../../services/utilities/images';
import React from 'react'

export default function BackArrow() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image 
      source={images.leftArrow}/>
      
    </TouchableOpacity>
  )
}