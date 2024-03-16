import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../services/utilities/images'
import { styles } from './styles'

export default function Like() {

  const [liked,setLiked] = useState(false)
  const handleLikePress = () => {
    setLiked(!liked)
  }

  return (
    <TouchableOpacity style={styles.container}
    onPress={handleLikePress}>
      <Image source={liked ? images.clickedLike : images.like} />
    </TouchableOpacity>
  )
}