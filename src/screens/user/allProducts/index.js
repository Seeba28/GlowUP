import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { images } from '../../../services/utilities/images';
import { colors } from '../../../services/utilities/colors';
import Like from '../../../components/Like';
import AddToCartSmall from '../../../components/AddToCartSmall';

export default function AllProducts({ navigation }) {
  const [search, setSearch] = useState('');

  const feildSearch = text => {
    setSearch(text);
  };

  const [allProducts, setAllProducts] = useState([
    {
      image: images.lipstick,
      name: 'Lipstick',
      price: 'Rs. 850',
    },
    {
      image: images.foundation,
      name: 'Foundation',
      price: 'Rs. 2000',
    },
    {
      image: images.blush,
      name: 'Blush',
      price: 'Rs. 1500',
    },
    {
      image: images.mascara,
      name: 'Mascara',
      price: 'Rs. 800',
    },

  ]);

  const handleCart = () => {
    navigation.navigate("Cart")
  }

  const handleProductDescription = () => {
    navigation.navigate("ProductDetails")
  }

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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerTwo}>
          {allProducts.map((item,index) => (
          <View style={styles.productRow} key={index}>
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={handleProductDescription}>
              <View style={styles.productImageContainer}>
                <ImageBackground
                  style={styles.productImage}
                  source={item.image}>
                  <TouchableOpacity style={styles.likeContainer}>
                    <Like />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <View style={styles.productsDetailRow}>
              <View>
                <Text style={styles.productsNameText}>{item.name}</Text>
                <Text style={styles.productPriceText}>{item.price}</Text>
              </View>
              <TouchableOpacity>
                <AddToCartSmall onPress={handleCart} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
