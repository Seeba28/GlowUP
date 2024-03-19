import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';

export default function Cart({ navigation }) {
    const [itemCart, setItemCart] = useState([
        {
            name: 'Lipstick',
            price: 800,
            image: images.lipstick
        },
        

    ])

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const subtotal = itemCart.reduce((total, item) => total + (item.price * quantity), 0);


    const shipping = 100
    const total = subtotal + shipping

    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Cart</Text>
            </View>
            {itemCart.map((item, index) => {
                return (
                    <View style={styles.body}
                        key={index}>
                        <View
                            style={styles.textFeildContainer}>
                            <Image style={styles.productImage}
                                source={item.image}
                            />
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

                )
            })}
            <View style={styles.feildContainer}>
                <View style={styles.feildRow1}>
                    <Text style={styles.fieldTxt}>SUBTOTAL</Text>
                    <Text style={styles.fieldTxt}>Rs. {subtotal}</Text>
                </View>
                <View style={styles.feildRow1}>
                    <Text style={styles.fieldTxt}>SHIPPING</Text>
                    <Text style={styles.fieldTxt}>Rs. {shipping}</Text>
                </View>
                <View style={styles.feildRow2}>
                    <Text style={styles.fieldTxt}>TOTAL</Text>
                    <Text style={styles.fieldTxt}>Rs. {total}</Text>
                </View>
            </View>



        </View>
    )

} 