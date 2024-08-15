import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { styles } from './style';
import { images } from '../../../services/utilities/images';
import Button from '../../../components/Button';


export default function CartTwo({ navigation, route }) {
    const { product } = route.params || {};
    const [itemCart, setItemCart] = useState(product ? [product] : []);

    useEffect(() => {
        if (product) {
            setItemCart(prevCart => {
                if (!prevCart.find(item => item.name === product.name)) {
                    return [...prevCart, product];
                }
                return prevCart;
            });
        }
    }, [product]);

    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const subtotal = itemCart.reduce((total, item) => 
        total + (parseFloat(item.price) * quantity), 0);

    const shipping = 100;
    const total = subtotal + shipping;

    const handleBack = () => {
        navigation.goBack();
    };

    const handleCheckOut = () => {
        navigation.navigate("CheckOutTwo", {
            itemCart: itemCart,
            totalAmount: total.toFixed(2), 
            quantity: quantity
        });
    };

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Cart</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View>
                    {itemCart.map((item, index) => {
                        return (
                            <View style={styles.body} key={index}>
                                <View style={styles.textFeildContainer}>
                                    <Image style={styles.productImage} source={item.image} />
                                    <View style={styles.flexColumn}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPrice}>Rs. {item.price}</Text>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <TouchableOpacity onPress={handleSubtract}>
                                            <Image source={images.subtract} />
                                        </TouchableOpacity>
                                        <Text style={styles.itemName}>{quantity}</Text>
                                        <TouchableOpacity onPress={handleAdd}>
                                            <Image source={images.add} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <View style={styles.feildContainer}>
                <View style={styles.feildRow1}>
                    <Text style={styles.fieldTxt}>SUBTOTAL</Text>
                    <Text style={styles.fieldTxt}>Rs. {subtotal.toFixed(2)}</Text>
                </View>
                <View style={styles.feildRow1}>
                    <Text style={styles.fieldTxt}>SHIPPING</Text>
                    <Text style={styles.fieldTxt}>Rs. {shipping.toFixed(2)}</Text>
                </View>
                <View style={styles.feildRow2}>
                    <Text style={styles.fieldTxt}>TOTAL</Text>
                    <Text style={styles.fieldTxt}>Rs. {total.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.buttonTop}>
                <Button title={'Proceed To Checkout'} onPress={handleCheckOut} />
            </View>
        </View>
    );
}

