import { Image, Text, View, TouchableOpacity, ScrollView, Modal, Alert } from "react-native";
import React, { useState } from 'react';
import { styles } from "./style";
import BackArrow from "../../../components/BackArrow";
import { images } from "../../../services/utilities/images";

export default function Rewards({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [pointsAvailable, setPointsAvailable] = useState('365')
    const [redemPoints, setRedemPoints] = useState('100')
    const [rewards, setRewards] = useState([
        {
            image: images.gift,
            name: 'Free Haircut at Glow Haven Salon',
            button: 'REDEEMED'
        },
        {
            image: images.gift,
            name: 'Free Haircut at Glow Haven Salon',
            button: 'REDEEM'
        },
        {
            image: images.gift,
            name: 'Free Haircut at Glow Haven Salon',
            button: 'EXPIRED'
        },


    ])

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
                <Text style={styles.heading}>Rewards</Text>
            </View>
            <View style={styles.containerOne}>
                <View style={styles.row}>
                    <Image
                        style={styles.starImage}
                        source={images.ranking} />
                    <View style={styles.marginStart}>
                        <Text style={styles.headingOne}>{pointsAvailable}</Text>
                        <Text style={styles.headigTwo}>Available Points</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Redeem Rewards</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Text style={styles.headingOne}>All Rewards</Text>
                <ScrollView style={styles.scrollContainer}>
                    {rewards.map((allRewards, index) => {
                        return (
                            <TouchableOpacity style={styles.rewardsRow}
                                key={index}
                                onPress={() => setModalVisible(true)}>
                                <View style={styles.row}>
                                    <Image source={allRewards.image} />
                                    <Text style={styles.rewardDetail}>{allRewards.name}</Text>
                                </View>
                                <Text style={styles.rewardButton}>{allRewards.button}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <Modal animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed')
                        setModalVisible(!modalVisible)
                    }}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <Image
                                style={styles.modalImage}
                                source={images.giftBig} />
                            <Text style={styles.modalHeadingOne}>Free Haircut at Glow Haven Salon</Text>
                            <Text style={styles.modalHeadingTwo}>Get 1 free haircut from any branch of Glow Haven Salon</Text>
                            <TouchableOpacity style={styles.modalButton}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalBtnTxt}>Redeem For {redemPoints} Points</Text>
                            </TouchableOpacity>
                            <Text style={styles.availableTxt}>Available Points: {pointsAvailable}</Text>
                        </View>
                    </View>


                </Modal>

            </View>
        </View>
    )
}