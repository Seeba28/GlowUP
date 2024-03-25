import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../../services/utilities/colors';
import { images } from '../../../services/utilities/images';
import { useRoute } from '@react-navigation/native';
import Like from '../../../components/Like';
import AddToCartBig from '../../../components/AddToCartBig';
import AddToCartSmall from '../../../components/AddToCartSmall';
import NotificationIcon from '../../../components/NotificationIcon';

export default function UserHome({ navigation, route }) {
  const navigateProductDetails = () => {
    navigation.navigate("ProductDetails")
  }
  // const { userName } = route.params
  // const { profileImageUri } = route.params


  const [userName, setUserName] = useState('seeba')
  // const { profileImageUri } = route.params

  const [search, setSearch] = useState('');

  const feildSearch = text => {
    setSearch(text);
  };

  const [popularServices, setPopularServices] = useState([
    {
      image: images.salonImage,
      name: 'Glow Haven Salon',
      location: 'Street 11 Block 19',
      ratings: '4.8 Ratings',
    },
    {
      image: images.salonImg2,
      name: 'Rose Salon',
      location: 'Street 12 Block 3',
      ratings: '4.5 Ratings',
    },
    {
      image: images.salonImg3,
      name: 'Beauty Salon',
      location: 'Street 15 Block 4',
      ratings: '4.5 Ratings',
    },
    {
      image: images.salonImg4,
      name: 'GlowUP Salon',
      location: 'Street 6 Block 19',
      ratings: '4.3 Ratings',
    },
  ]);

  const [popularProducts, setPopularProducts] = useState([
    {
      image: images.lipstick,
      name: 'Lipstick',
      price: 'Rs. 850',
    },
    {
      image: images.foundation,
      name: 'Foundation',
      price: 'Rs. 2000',
    }
  ]);
  const [productSelected, setProductSelected] = useState('')

  const handleViewAll = () => {
    navigation.navigate("AllProducts")
  }

  const handleCart = () => {
    navigation.navigate("Cart")
  }

  const handleSalonDetails = () => {
    navigation.navigate('SalonDetails')
  }

  const handleUserNotification = () => {
    navigation.navigate('UserNotification')
  }
  return (
    <View style={styles.homeBackgroud}>
      <View style={styles.topContainer}>
        <View style={styles.topProfileRow}>
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              style={styles.profileImg}
              // source={{ uri: profileImageUri }}
              source={images.profileTop}
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>Hi, {userName}</Text>
        </View>
        <View style={styles.topIconsContainer}>
          <NotificationIcon onPress={handleUserNotification}/>
          <AddToCartBig
            onPress={handleCart} />
        </View>

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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerTwo}>
          <Text style={styles.subContainerHeading}>Popular Services</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.serviceSlider}>
              {popularServices.map((service, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.serviceContainer}
                  onPress={handleSalonDetails}>
                    <ImageBackground
                      style={styles.salonImage}
                      source={service.image}
                    >
                      <View style={styles.serviceContainerMain}>
                        <View>
                          <Text style={styles.salonName}>{service.name}</Text>
                          <View style={styles.insideServiceContainer}>
                            <Image source={images.location} />
                            <Text style={styles.serviceDetailsText}>
                              {service.location}
                            </Text>
                          </View>
                          <View style={styles.insideServiceContainer}>
                            <Image source={images.ratings} />
                            <Text style={styles.serviceDetailsText}>
                              {service.ratings}
                            </Text>
                          </View>
                        </View>
                        <Image source={images.rightArrow} />
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.containerThree}>
          <View style={styles.contianerThreeRow}>
            <Text style={styles.subContainerHeading}>Popular Products</Text>
            <TouchableOpacity
              onPress={handleViewAll}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.allProduts}>
            {popularProducts.map((products, index) => {
              return (
                <View key={index} style={styles.productRow}>
                  <View style={styles.productContainer}>
                    <TouchableOpacity onPress={navigateProductDetails}>
                      <View style={styles.productImageContianer}>
                        <View style={styles.productImage}>
                          <ImageBackground
                            style={styles.productImage}
                            source={products.image}>
                            <TouchableOpacity style={styles.likeContainer}>
                              <Like />
                            </TouchableOpacity>
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.productsDetailRow}>
                      <View>
                        <Text style={styles.productsNameText}>
                          {products.name}
                        </Text>
                        <Text style={styles.productPriceText}>
                          {products.price}
                        </Text>
                      </View>
                      <TouchableOpacity>
                        <AddToCartSmall onPress={handleCart} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
