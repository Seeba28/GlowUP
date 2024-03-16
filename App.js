import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/services/config/navigation';
import UserHome from './src/screens/user/userHome';
import AddToCart from './src/components/AddToCartSmall';
import Like from './src/components/Like';
import Services from './src/screens/user/services';
import Products from './src/screens/user/products';
import AllProducts from './src/screens/user/allProducts';
import ProductDetails from './src/screens/user/productDetails';
import BackArrow from './src/components/BackArrow';
import Button from './src/components/Button';


export default function App() {
  return (
    // <TabNavigation />
    // <UserHome />
     <Navigation/>
  //  <Products/>
  // <AllProducts/>
  // <Services/>
  // <ProductDetails/>
  // <Button/>
  );
}
