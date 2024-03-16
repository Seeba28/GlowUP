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
import {styles} from './styles';
import {images} from '../../../services/utilities/images';
import {colors} from '../../../services/utilities/colors';

export default function Services({navigation}) {
  const [search, setSearch] = useState('');

  const feildSearch = text => {
    setSearch(text);
  };

  const [allServices, setAllServices] = useState([
    {
      image: images.facials,
      name: 'Facials',
    },
    {
      image: images.nailTreatment,
      name: 'Nail Treatment',
    },
    {
      image: images.HairService,
      name: 'Hair Service',
    },
    {
      image: images.Henna,
      name: 'Henna',
    },
  ]);

  return (
    <View style={styles.serviceBackgroud}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <Image source={images.profileTop} />
        </TouchableOpacity>
        <Text style={styles.serviceText}>Services</Text>
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
          <View style={styles.allServices}>
            {allServices.map((service, index) => {
              return (
                <TouchableOpacity key={index}>
                  <ImageBackground
                    style={styles.servicesContainer}
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
