import React, { useState } from 'react';
import { View,Text, ScrollView,TouchableOpacity} from 'react-native';
import { styles } from './style';
import BackArrow from '../../../components/BackArrow';


export default function SalonNotification({ navigation }) {

    const [notification, setNotification] = useState([
        {
            title:'Amna booked an appointment'
        },
        {
            title:'Sara booked an appointment'
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