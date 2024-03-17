import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackArrow from '../../../components/BackArrow';
import {images} from '../../../services/utilities/images';
import Swiper from 'react-native-swiper';
import AddToCart from '../../../components/AddToCartSmall';
import AddToCartBig from '../../../components/AddToCartBig';
import Button from '../../../components/Button';

export default function ProductDetails({navigation}) {
  const [productName, setProductName] = useState('Lipstick / Lipgloss');
  const [productPrice, setProductPrice] = useState('Rs. 850');
  const [productDetails, setProductDetail] = useState(
    'Indulge in the ultimate lip-enhancing experience with our Lip Gloss. Formulated with a nourishing blend of hydrating oils and vitamin E, this lip gloss delivers a luscious, high-shine finish.',
  );
  const [rating, setRating] = useState('3.5/5');
  const [imageSwipe, setImageSwipe] = useState([

    {image: images.lipstick},
    {image: images.lipstick},
    {image: images.lipstick},
  ]);
  const [colorSelection, setColorSelection] = useState([
    {image: images.color1Before},
    {image: images.color2Before},
    {image: images.color3Before},
  ]);

  
  const handleColorSelection = index => {
    setColorSelection(prevColorSelection => {
      const newColorSelection = prevColorSelection.map((color, i) => {
        if (i === index) {
          return {
            ...color,
            image:
              color.image === images.color1Before
                ? images.color1After
                : color.image === images.color1After
                ? images.color1Before
                : color.image === images.color2Before
                ? images.color2After
                : color.image === images.color2After
                ? images.color2Before
                : color.image === images.color3Before
                ? images.color3After
                : images.color3Before,
          };
        } else {
          return {
            ...color,
            image:
              color.image === images.color1After
                ? images.color1Before
                : color.image === images.color2After
                ? images.color2Before
                : color.image === images.color3After
                ? images.color3Before
                : color.image,
          };
        }
      });
      return newColorSelection;
    });
  };

  return (
    <View style={styles.productBakcground}>
      <View style={styles.topContainer}>
        <View style={styles.backArrow}>
          <BackArrow />
        </View>
        <Swiper style={styles.wrapper} paginationStyle={styles.sliderCircle}>
          {imageSwipe.map((swipeImage, index) => {
            return (
              <View key={index} style={styles.productImage}>
                <Image
                  style={styles.productImageContainer}
                  source={swipeImage.image}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
      <TouchableOpacity style={styles.containerTwo}>
        <AddToCartBig />
      </TouchableOpacity>
      <View style={styles.containerProductDetails}>
        <View style={styles.productRow}>
          <Text style={styles.productName}>{productName}</Text>
          <View style={styles.ratingsContainer}>
            <TouchableOpacity>
              <Image source={images.star} />
            </TouchableOpacity>
            <Text style={styles.ratingTxt}>{rating}</Text>
          </View>
        </View>
        <Text style={styles.productPrice}>{productPrice}</Text>
        <Text style={styles.productDetailsTxt}>{productDetails}</Text>
        <Text style={styles.colorTxt}>Color</Text>
        <View style={styles.colorRow}>
          {colorSelection.map((color, index) => (
            <TouchableOpacity 
              key={index}
              onPress={() => handleColorSelection(index)}
              >
              <Image source={color.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.button}>
        <Button title={'Buy Now'} />
      </View>
    </View>
  );
}
