import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../services/utilities/images';

import {colors} from '../../../services/utilities/colors';
import {styles} from './styles';

export default function Products({navigation}) {
  const [search, setSearch] = useState('');

  const feildSearch = text => {
    setSearch(text);
  };

  const [allProducts, setAllProducts] = useState([
    {
      image: images.facials,
      name: 'Skin Products',
    },
    {
      image: images.nailTreatment,
      name: 'Nail Products',
    },
    {
      image: images.HairService,
      name: 'Lip Products',
    },
    {
      image: images.Henna,
      name: 'Eye Products',
    },
  ]);

  return (
    <View style={styles.productBakcground}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <Image source={images.profileTop} />
        </TouchableOpacity>
        <Text style={styles.productText}>Products</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image source={images.search} />

        <TextInput
          style={styles.searchTextInput}
          placeholder="Search..."
          placeholderTextColor={colors.darkPurple}
          onChangeText={feildSearch}
          value={search}></TextInput>
      </View>
      <View style={styles.containerTwo}>
          <View style={styles.allProducts}>
            {allProducts.map((service, index) => {
              return (
                <TouchableOpacity key={index}>
                  <ImageBackground
                    style={styles.productContainer}
                    source={service.image}>
                    <Text style={styles.servicesNameText}>{service.name}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
    </View>
  );
}
