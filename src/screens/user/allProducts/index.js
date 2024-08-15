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
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { images } from '../../../services/utilities/images';
import { colors } from '../../../services/utilities/colors';
import Like from '../../../components/Like';
import AddToCartSmall from '../../../components/AddToCartSmall';

export default function AllProducts({route, navigation }) {
  const [search, setSearch] = useState('');

  const feildSearch = text => {
    setSearch(text);
  };

  const [allProducts, setAllProducts] = useState([
    {
      image: images.lipstick,
      name: 'Lipstick/Lipgloss',
      price: '850',
      category: 'Lips',
      details: 'Indulge in the ultimate lip-enhancing experience with our Lip Gloss. Formulated with a nourishing blend of hydrating oils and vitamin E, this lip gloss delivers a luscious, high-shine finish.',
      rating: '3.5/5'
    },
    {
      image: images.foundation,
      name: 'Foundation',
      price: '2000',
      category: 'Face',
      details: 'Our foundation provides flawless coverage with a lightweight feel, perfect for everyday wear.',
      rating: '4/5'
    },
    {
      image: images.blush,
      name: 'Blush',
      price: '1500',
      category: 'Face',
      details: 'Add a pop of color to your cheeks with our Blush. Formulated to blend effortlessly for a natural, radiant finish.',
      rating: '4.5/5'
    },
    {
      image: images.mascara,
      name: 'Mascara',
      price: '800',
      category: 'Eyes',
      details: 'Achieve voluminous and defined lashes with our Mascara. Its unique brush delivers intense color and lasting curl.',
      rating: '3.5/5'

    },

  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const { category } = route.params || {};

  useEffect(() => {
    // Filter based on category and search text
    const filtered = allProducts
      .filter(product => 
        (!category || product.category === category) &&
        (search === '' || product.name.toLowerCase().includes(search.toLowerCase()))
      );
    setFilteredProducts(filtered);
  }, [category, search, allProducts]);

  const handleCart = () => {
    navigation.navigate("Cart")
  }

  const handleProductDescription = (product) => {
    navigation.navigate("ProductDetailsTwo", { product })
  }



  return (
    <View style={styles.productBakcground}>
      <View style={styles.topContainer}>
        {/* <TouchableOpacity>
          <Image source={images.profileTop} />
        </TouchableOpacity> */}
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
          {filteredProducts.map((item,index) => (
          <View style={styles.productRow} key={index}>
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductDescription(item)}>
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
                <Text style={styles.productPriceText}>Rs. {item.price}</Text>
              </View>
              {/* <TouchableOpacity>
                <AddToCartSmall onPress={handleCart} />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
