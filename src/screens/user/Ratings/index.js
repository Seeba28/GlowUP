import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './style';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';
import StarRating from 'react-native-star-rating-widget';
import { colors } from '../../../services/utilities/colors';
import Button from '../../../components/Button';

export default function Ratings({ navigation }) {

    const [userImage, setUserImage] = useState(images.profileLarge)
    const [userName, setUserName] = useState('Seeba')
    const [starCount, setStarCount] = useState(0)
    const [reviewText, setReviewText] = useState('')
    const [permisson, setPermission] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setPermission(starCount >= 1 && reviewText.trim().length >= 1)
    }, [starCount, reviewText])

    const handleBack = () => {
        navigation.goBack()
    }

    const handleProductDetails = () => {
        navigation.navigate('ProductDetails')
        setModalVisible(false)
    }

    const handleSubmit = () => {
        if (!permisson) {
            setErrorMsg('*Please rate the product and provide a review before submitting.');
            return;
        }
        setModalVisible(true);
    };

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Ratings</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <Image
                        style={styles.profile}
                        source={userImage} />
                    <Text
                        style={styles.userName}>{userName}</Text>
                </View>
                <Text style={styles.heading2}>Ratings</Text>
                <StarRating
                    rating={starCount}
                    onChange={setStarCount}
                    emptyColor={colors.mediumPurple}
                />
                <TextInput
                    placeholder='Write a review..'
                    placeholderTextColor={colors.mediumPurple}
                    onChangeText={(text) => setReviewText(text)}
                    value={reviewText}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.reviewTxtField}
                >
                </TextInput>
                {permisson ? null : <Text style={styles.errorText}>{errorMsg}</Text>}

                <View style={styles.button}>
                    <Button title={'Submit'}
                        onPress={handleSubmit}
                    />
                </View>
            </View>

            <Modal animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed')
                    setModalVisible(!modalVisible)
                }}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Image source={images.Checkmark} />
                        <Text style={styles.modalTxt2}>
                            Congrats!
                            <Text style={styles.modalTxt1}> your rating
                                has been submitted</Text>
                        </Text>
                        <TouchableOpacity style={styles.modalButton}
                            onPress={handleProductDetails}
                        >
                            <Text style={styles.modalBtnTxt}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}