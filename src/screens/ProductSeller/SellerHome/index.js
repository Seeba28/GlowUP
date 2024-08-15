import { Image, Modal, ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import React, { useEffect, useState } from 'react';
import { styles } from "./style";
import NotificationIcon from "../../../components/NotificationIcon";
import { sizes } from "../../../services/utilities/sizes";
import { colors } from "../../../services/utilities/colors";
import { BarChart } from "react-native-gifted-charts";
import { images } from "../../../services/utilities/images";
import StarRating from "react-native-star-rating-widget";

export default function SellerHome({ navigation }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [orderedModal, setOrderModal] = useState(false);
    const [packedModal, setPackedModal] = useState(false);
    const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
    const [selectedPackedIndex, setSelectedPackedIndex] = useState(null);

    const [recentOrder, setRecentOrder] = useState([
        {
            image: images.lipstick,
            name: 'Lipstick / Lipgloss',
            id: 'Product ID: #20'
        },
        {
            image: images.mascara,
            name: 'Mascara',
            id: 'Product ID: #12'
        },
    ]);

    const [packed, setPacked] = useState([
        {
            image: images.foundation,
            name: 'Foundation',
            id: 'Product ID: #30'
        },
    ]);

    const [delivered, setDelivered] = useState([]);

    const [reviews, setReviews] = useState([
        {
            image: images.lipstick,
            name: 'Lipstick / Lipgloss',
            id: 'Product ID: #456-90-lipstick'
        },
        {
            image: images.lipstick,
            name: 'Lipstick / Lipgloss',
            id: 'Product ID: #456-90-lipstick'
        },
    ]);

    const [salonRating, setSalonRating] = useState([
        {
            image: images.profileTop,
            name: 'Victoria',
            ratings: 4,
            reviewText: 'Great'
        },
        {
            image: images.profileTop,
            name: 'Sarah',
            ratings: 4.5,
            reviewText: 'Great service'
        },
    ]);

    const handleSellerNotifcation = () => {
        navigation.navigate("SellerNotification");
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleAddProduct = () => {
        navigation.navigate('SellerProducts');
    };

    const handleProfile = () => {
        navigation.navigate('SellerProfile');
    };

    const handleSendOrderForPacking = () => {
        if (selectedOrderIndex !== null) {
            const orderToPack = recentOrder[selectedOrderIndex];
            setPacked([...packed, orderToPack]);
            setRecentOrder(recentOrder.filter((_, index) => index !== selectedOrderIndex));
            setOrderModal(false);
            setSelectedOrderIndex(null);
        }
    };

    const handleSendPackedForDelivery = () => {
        if (selectedPackedIndex !== null) {
            const packedOrder = packed[selectedPackedIndex];
            setDelivered([...delivered, packedOrder]);
            setPacked(packed.filter((_, index) => index !== selectedPackedIndex));
            setPackedModal(false);
            setSelectedPackedIndex(null);
        }
    };

    useEffect(() => {
        handleOptionSelect('Ordered');
    }, []);

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topRowContainer}>
                <TouchableOpacity style={styles.profileContainer} onPress={handleProfile}>
                    <Image style={styles.profileImg} source={images.profile} />
                </TouchableOpacity>
                <Text style={styles.heading}>Welcome</Text>
                <View style={styles.margin}>
                    {/* <NotificationIcon onPress={handleSellerNotifcation} /> */}
                </View>
            </View>
            {/* <Text style={styles.subHeadingTwo}>Business Analysis</Text> */}
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionSquare} onPress={() => handleOptionSelect('Ordered')}>
                    <Image source={selectedOption === 'Ordered' ? images.orderedAfter : images.oderedBefore} />
                    <Text style={selectedOption === 'Ordered' ? styles.optioneTxtAfter : styles.optioneTxt}>Ordered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare} onPress={() => handleOptionSelect('Packed')}>
                    <Image source={selectedOption === 'Packed' ? images.packedAfter : images.packedBefore} />
                    <Text style={selectedOption === 'Packed' ? styles.optioneTxtAfter : styles.optioneTxt}>Packed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare} onPress={() => handleOptionSelect('Delivered')}>
                    <Image source={selectedOption === 'Delivered' ? images.deliveredAfter : images.deliveredBefore} />
                    <Text style={selectedOption === 'Delivered' ? styles.optioneTxtAfter : styles.optioneTxt}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare} onPress={handleAddProduct}>
                    <Image source={selectedOption === 'Add Product' ? images.addProductAfter : images.addProductBefore} />
                    <Text style={selectedOption === 'Add Product' ? styles.optioneTxtAfter : styles.optioneTxt}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare} onPress={() => handleOptionSelect('Reviews')}>
                    <Image source={selectedOption === 'Reviews' ? images.reviewsAfter : images.reviewBefore} />
                    <Text style={selectedOption === 'Reviews' ? styles.optioneTxtAfter : styles.optioneTxt}>Reviews</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="fade"
                transparent={true}
                visible={orderedModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setOrderModal(!orderedModal);
                }}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Image source={images.orderConfirm} />
                        <Text style={styles.modalTxt2}>Order Confirmation</Text>
                        <Text style={styles.modalTxt1}>Send order for packing</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleSendOrderForPacking}>
                            <Text style={styles.modalBtnTxt}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal animationType="fade"
                transparent={true}
                visible={packedModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setPackedModal(!packedModal);
                }}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Image source={images.packedConfrim} />
                        <Text style={styles.modalTxt2}>Order Packed</Text>
                        <Text style={styles.modalTxt3}>The order is packed and ready for dispatch.</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleSendPackedForDelivery}>
                            <Text style={styles.modalBtnTxt}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {selectedOption === 'Ordered' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Recent Orders</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            {recentOrder.map((order, index) => (
                                <TouchableOpacity style={styles.roleContainer}
                                    key={index}
                                    onPress={() => {
                                        setSelectedOrderIndex(index);
                                        setOrderModal(true);
                                    }}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image style={styles.iconImage} source={order.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{order.name}</Text>
                                            <Text style={styles.headigTwo}>{order.id}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}

            {selectedOption === 'Packed' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Packed</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            {packed.map((pack, index) => (
                                <TouchableOpacity style={styles.roleContainer}
                                    key={index}
                                    onPress={() => {
                                        setSelectedPackedIndex(index);
                                        setPackedModal(true);
                                    }}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image style={styles.iconImage} source={pack.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{pack.name}</Text>
                                            <Text style={styles.headigTwo}>{pack.id}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}

            {selectedOption === 'Delivered' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Delivered</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            {delivered.map((deliver, index) => (
                                <TouchableOpacity style={styles.roleContainer}
                                    key={index}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image style={styles.iconImage} source={deliver.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{deliver.name}</Text>
                                            <Text style={styles.headigTwo}>{deliver.id}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}

            {selectedOption === 'Reviews' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Reviews</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View style={styles.optionBottomContainerThree}>
                            {salonRating.map((review, index) => (
                                <View style={styles.reviewRow}
                                    key={index}>
                                    <View style={styles.profileCircle}>
                                        <Image source={review.image} />
                                    </View>
                                    <View style={styles.reviewCOlumn}>
                                        <Text style={styles.reviewName}>{review.name}</Text>
                                        <StarRating rating={review.ratings}
                                            starSize={sizes.screenHeight * 0.03}
                                            enableSwiping={false}
                                            enableHalfStar={false}
                                            onChange={() => { }}
                                        />
                                        <Text style={styles.reviewTxt}>{review.reviewText}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

