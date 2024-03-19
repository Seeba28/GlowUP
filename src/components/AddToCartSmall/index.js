import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../services/utilities/images';

export default function AddToCartSmall({onPress}) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}>
      <Image source={images.addToCart} />
    </TouchableOpacity>
  );
}
