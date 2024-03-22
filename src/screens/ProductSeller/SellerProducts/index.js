import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { images } from '../../../services/utilities/images';

export default function SellerProducts({ navigation }) {
    return (
        <View style={styles.productBakcground}>
            <Text style={styles.heading}>Products</Text>
            <View style={styles.containerOne}>
                <View style={styles.productRow}>
                    <TouchableOpacity style={styles.productBox}>
                        <Image source={images.eyeProductBlack} />
                        <Text style={styles.prouctTxt}>Eyes Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productBox}>
                        <Image source={images.lipProductBlack} />
                        <Text style={styles.prouctTxt}>Lips Products</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.productBox}>
                        <Image source={images.faceProduct} />
                        <Text style={styles.prouctTxt}>Face Products</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
