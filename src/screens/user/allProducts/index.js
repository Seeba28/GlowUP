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
import React, {useState} from 'react';
import {styles} from './styles';
import {images} from '../../../services/utilities/images';
import {colors} from '../../../services/utilities/colors';
import Like from '../../../components/Like';
import AddToCartSmall from '../../../components/AddToCartSmall';

export default function AllProducts() {
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
        <FlatList
          data={allProducts}
          numColumns={2}
          columnWrapperStyle={{justifyContent:'space-between'}}
          renderItem={({item}) => (
            <View style={styles.productRow}>
              <View style={styles.productContainer}>
                <TouchableOpacity>
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
                    <AddToCartSmall />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* <View style={styles.allProduts}>
            {allProducts.map((products, index) => {
              return (
                <View key={index} style={styles.productRow}>
                  <View style={styles.productContainer}>
                    <TouchableOpacity>
                      <View style={styles.productImageContainer}>
                        <ImageBackground
                          style={styles.productImage}
                          source={products.image}>
                          <TouchableOpacity style={styles.likeContainer}>
                            <Like />
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.productsDetailRow}>
                      <View>
                        <Text style={styles.productsNameText}>{products.name}</Text>
                        <Text style={styles.productPriceText}>{products.price}</Text>
                      </View>
                      <TouchableOpacity>
                        <AddToCartSmall/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                </View>
              );
            })}
          </View> */}
      </View>
    </View>
  );
}
