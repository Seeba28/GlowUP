import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';
import { styles } from './style';


export default function UserHistory({ navigation }) {
    const [itemCart, setItemCart] = useState([
        {
            name: 'Lipstick',
            price: 800,
            image: images.lipstick
        },
    ])

    const handleBack = () => {
        navigation.goBack()
    }
    return(
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>History</Text>
            </View>
            
            <ScrollView style={styles.scrollContainer}>
                <View>
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
                                    
                                </View>
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
        </View>
    )
}