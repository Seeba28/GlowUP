import React, { useState } from 'react';
import { View,Text, ScrollView,TouchableOpacity} from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { styles } from './style';


export default function SellerNotification({ navigation }) {

    const [notification, setNotification] = useState([
        {
            title:'Add New Products'
        },
        {
            title:'Amna Placed an order'
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
            <Text style={styles.heading}>Notification</Text>
        </View>
        <View style={styles.containerTwo}>
        <ScrollView style={styles.scrollContainer}>
                    {notification.map((notify, index) => {
                        return (
                            <TouchableOpacity style={styles.rewardsRow}
                                key={index}>
                                <View style={styles.row}>
                                    <Text style={styles.rewardDetail}>{notify.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
        </View>
        </View>
     
    )
}