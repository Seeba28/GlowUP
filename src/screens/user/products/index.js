import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { images } from '../../../services/utilities/images';

import { colors } from '../../../services/utilities/colors';
import { styles } from './styles';

export default function Products({ navigation }) {

  const handleCategorySelect = (category) => {
    navigation.navigate("AllProducts", { category });
  }


  return (
    <View style={styles.productBakcground}>
      <View style={styles.topContainer}>
        {/* <TouchableOpacity>
          <Image source={images.profileTop} />
        </TouchableOpacity> */}
        <Text style={styles.productText}>Products</Text>
      </View>

      <View style={styles.body}>
        {/* <TouchableOpacity 
        onPress={handleProducts}
        >
        </TouchableOpacity> */}
          <ImageBackground
            style={styles.contianerOne}
            source={images.TopMakeup}
            resizeMode='stretch'
          >
            <Text style={styles.headingOne}>Top Makeups</Text>
            <Text style={styles.detailTxt}>Elevate Your Beauty Routine with Our Exclusive Collection</Text>
          </ImageBackground>

        <View style={styles.productCategory}>
          <View>
            <TouchableOpacity style={styles.productContainerOne}
            onPress={() => handleCategorySelect('Eyes')}
            // onPress={handleProducts}
            >
              <Text style={styles.headingTwo}>Eyes Product</Text>
              <Image
                style={styles.picOne}
                source={images.eyeProduct} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productContainerTwo}
            onPress={() => handleCategorySelect('Face')}
            // onPress={handleProducts}
            >
              <Text style={styles.headingTwo}>Face Product</Text>
              <Image
                style={styles.picOne}
                source={images.foundation} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.productContainerThree}
          onPress={() => handleCategorySelect('Lips')}
          // onPress={handleProducts}
          >
            <Image
              style={styles.picTwo}
              source={images.lipProduct} />
            <Text style={styles.headingThree}>Lips Product</Text>
          </TouchableOpacity>

        </View>
      </View>


    </View>
  );
}
