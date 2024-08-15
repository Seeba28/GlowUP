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
  const navigateProductDetails = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

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
      about: 'Glow Haven is your go-to beauty salon brand on our convenient beauty service app. Experience luxury treatments from skilled professionals in the comfort of your own space.',
      timing: '~ Open Monday - Thursday',
      portfolio: [
        { image: images.face1 },
        { image: images.hairCut1 },
        { image: images.nailPaint1 },
        { image: images.hennaPic },
      ],
      services: [
        {
          image: images.acneIcon,
          name: 'Acne Cleansing',
          type: 'Facial',
          price: '2,000'
        },
        {
          image: images.hairCuttingIcon,
          name: 'Hair Cutting',
          type: 'Hair Service',
          price: '850'
        }
      ],
      reviews: [
        {
          image: images.profileTop,
          name: 'Victoria',
          ratings: 4,
          reviewText: 'Great service'
        },
        {
          image: images.profileTop,
          name: 'Sarah',
          ratings: 4.5,
          reviewText: 'Amazing experience'
        },
      ]
    },
    {
      image: images.salonImg2,
      name: 'Rose Salon',
      location: 'Street 12 Block 3',
      ratings: '4.5 Ratings',
      about: 'Rose Salon offers a unique blend of traditional and modern beauty treatments, ensuring you feel pampered and rejuvenated.',
      timing: '~ Open Monday - Thursday',
      portfolio: [
        { image: images.face1 },
        { image: images.haircutPic },
      ],
      services: [
        {
          image: images.hairColoringIcon,
          name: 'Hair Color',
          type: 'Hair Service',
          price: '1,000'
        },
        {
          image: images.nailTreatmentIcon,
          name: 'Nail Paint',
          type: 'Nail Service',
          price: '1,800'
        },
        {
          image: images.acneIcon,
          name: 'Acne Cleansing',
          type: 'Facial',
          price: '2,000'
        },
        {
          image: images.hairCuttingIcon,
          name: 'Hair Cutting',
          type: 'Hair Service',
          price: '850'
        },
      ],
      reviews: [
        {
          image: images.profileTop,
          name: 'Amna',
          ratings: 4,
          reviewText: 'Great service'
        },
        {
          image: images.profileTop,
          name: 'Sarah',
          ratings: 4.2,
          reviewText: 'Nice!!!'
        },
      ]
    },
    {
      image: images.salonImg3,
      name: 'Beauty Salon',
      location: 'Street 15 Block 4',
      ratings: '4.5 Ratings',
      about: 'Beauty Salon specializes in personalized beauty treatments that bring out the best in you, offering a wide range of services for all your beauty needs.',
      timing: '~ Open Monday - Firday',
      portfolio: [
        { image: images.hennaPic },
      ],
      services: [
        {
          image: images.hairColoringIcon,
          name: 'Hair Color',
          type: 'Hair Service',
          price: '2,000'
        },
        {
          image: images.acneIcon,
          name: 'Acne Cleansing',
          type: 'Facial',
          price: '2,000'
        },
        {
          image: images.hairCuttingIcon,
          name: 'Hair Cutting',
          type: 'Hair Service',
          price: '850'
        },
      ],
      reviews: [
        {
          image: images.profileTop,
          name: 'Amna',
          ratings: 4,
          reviewText: 'Great service'
        },
      ]
    },
    {
      image: images.salonImg4,
      name: 'GlowUP Salon',
      location: 'Street 6 Block 19',
      ratings: '4.3 Ratings',
      about: 'At GlowUP Salon, we provide top-notch beauty services tailored to enhance your natural glow. Book now and enjoy a luxurious beauty experience.',
      timing: '~ Open Monday - Thursday',
      portfolio: [
        { image: images.FacialPic },
        { image: images.haircutPic },
        { image: images.nailPaint1 },
        { image: images.hennaPic },
      ],
      services: [
        {
          image: images.nailTreatmentIcon,
          name: 'Nail Paint',
          type: 'Nail Service',
          price: '1,800'
        },
        {
          image: images.hairCuttingIcon,
          name: 'Hair Cutting',
          type: 'Hair Service',
          price: '850'
        },
      ],
      reviews: [
        {
          image: images.profileTop,
          name: 'Amna',
          ratings: 4,
          reviewText: 'Good'
        },
      ]
    },
  ]);

  const [popularProducts, setPopularProducts] = useState([
    {
      image: images.lipstick,
      name: 'Lipstick/ Lipgloss',
      price: '850',
      details: 'Indulge in the ultimate lip-enhancing experience with our Lip Gloss. Formulated with a nourishing blend of hydrating oils and vitamin E, this lip gloss delivers a luscious, high-shine finish.',
      rating: '3.5/5'
    },
    {
      image: images.foundation,
      name: 'Foundation',
      price: '2000',
      details: 'Our foundation provides flawless coverage with a lightweight feel, perfect for everyday wear.',
      rating: '4/5'
    }
  ]);
  const [productSelected, setProductSelected] = useState('')

  const handleViewAll = () => {
    navigation.navigate("AllProducts")
  }

  const handleCart = () => {
    navigation.navigate("Cart")
  }
  const handleSalonDetails = (service) => {
    navigation.navigate('SalonDetails', { serviceDetails: service });
  };
  

  const handleUserNotification = () => {
    navigation.navigate('UserNotification')
  }

  const filteredServices = popularServices.filter(service =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProducts = popularProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <View style={styles.homeBackgroud}>
      <View style={styles.topContainer}>
        <View style={styles.topProfileRow}>
          {/* <TouchableOpacity style={styles.profileContainer}>
            <Image
              style={styles.profileImg}
              // source={{ uri: profileImageUri }}
              source={images.profileTop}
            />
          </TouchableOpacity> */}
          <Text style={styles.nameText}>Welcome</Text>
        </View>
        {/* <View style={styles.topIconsContainer}>
          <NotificationIcon onPress={handleUserNotification}/>
          <AddToCartBig
            onPress={handleCart} />
        </View> */}

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
              {filteredServices.map((service, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.serviceContainer}
                    onPress={() => handleSalonDetails(service)}
                  >
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
            {/* <TouchableOpacity
              onPress={handleViewAll}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.allProduts}>
            {filteredProducts.map((product, index) => {
              return (
                <View key={index} style={styles.productRow}>
                  <View style={styles.productContainer}>
                    <TouchableOpacity 
                    onPress={() => navigateProductDetails(product)}>
                      <View style={styles.productImageContianer}>
                        <View style={styles.productImage}>
                          <ImageBackground
                            style={styles.productImage}
                            source={product.image}>
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
                          {product.name}
                        </Text>
                        <Text style={styles.productPriceText}>
                          Rs. {product.price}
                        </Text>
                      </View>
                      {/* <TouchableOpacity>
                        <AddToCartSmall onPress={handleCart} />
                      </TouchableOpacity> */}
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
