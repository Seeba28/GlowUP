import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { styles } from "./style";
import NotificationIcon from "../../../components/NotificationIcon";
import { sizes } from "../../../services/utilities/sizes";
import { colors } from "../../../services/utilities/colors";
import { BarChart } from "react-native-gifted-charts";
import { images } from "../../../services/utilities/images";

export default function SellerHome({ navigation }) {
    const [userName, setUseName] = useState('Sana Malik')
    const [selectedOption, setSelectedOption] = useState('')

    const data = [
        { label: 'Jan', value: 60 },
        { label: 'Feb', value: 30 },
        { label: 'Mar', value: 40 },
        { label: 'Apr', value: 70 },
        { label: 'May', value: 20 },
        { label: 'Jun', value: 50 },
        { label: 'Jul', value: 60 },
        { label: 'Aug', value: 60 },
        { label: 'Sep', value: 40 },
        { label: 'Oct', value: 20 },
        { label: 'Nov', value: 50 },
        { label: 'Dec', value: 30 }
    ];

    const [recentOrder, setRecentOrder] = useState([
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
    ])

    const [packed, setPacked] = useState([
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
    ])

    const [delivered, setDelivered] = useState([
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
    ])

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
    ])

    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    const handleAddProduct = () => {
        navigation.navigate('SellerProducts')
    }

    useEffect(() => {
        handleOptionSelect('Ordered')
    }, [])

    return (
        <View style={styles.productBakcground}>
            <Text style={styles.subHeadingOne}>Welcome</Text>
            <View style={styles.topRowContainer}>
                <Text style={styles.heading}>{userName}</Text>
                <NotificationIcon />
            </View>
            <Text style={styles.subHeadingTwo}>Business Analysis</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <BarChart data={data}
                    barBorderRadius={sizes.screenWidth * 0.02}
                    frontColor={colors.barGray}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    hideYAxisText
                    hideAxesAndRules
                    xAxisLabelTextStyle={{ color: colors.black }}
                />
            </ScrollView>
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionSquare}
                    onPress={() => handleOptionSelect('Ordered')}>
                    <Image source={selectedOption === 'Ordered' ? images.orderedAfter : images.oderedBefore} />
                    <Text style={selectedOption === 'Ordered' ? styles.optioneTxtAfter : styles.optioneTxt}>Ordered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare}
                    onPress={() => handleOptionSelect('Packed')}>
                    <Image source={selectedOption === 'Packed' ? images.packedAfter : images.packedBefore} />
                    <Text style={selectedOption === 'Packed' ? styles.optioneTxtAfter : styles.optioneTxt}>Packed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare}
                    onPress={handleAddProduct}>
                    <Image source={selectedOption === 'Add Product' ? images.addProductAfter : images.addProductBefore} />
                    <Text style={selectedOption === 'Add Product' ? styles.optioneTxtAfter : styles.optioneTxt}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare}
                    onPress={() => handleOptionSelect('Delivered')}>
                    <Image source={selectedOption === 'Delivered' ? images.deliveredAfter : images.deliveredBefore} />
                    <Text style={selectedOption === 'Delivered' ? styles.optioneTxtAfter : styles.optioneTxt}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionSquare}
                    onPress={() => handleOptionSelect('Reviews')}>
                    <Image source={selectedOption === 'Reviews' ? images.reviewsAfter : images.reviewBefore} />
                    <Text style={selectedOption === 'Reviews' ? styles.optioneTxtAfter : styles.optioneTxt}>Reviews</Text>
                </TouchableOpacity>

            </View>
            {selectedOption === 'Ordered' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Recent Orders</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            {recentOrder.map((order, index) => (
                                <View style={styles.roleContainer}
                                    key={index}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image
                                                style={styles.iconImage}
                                                source={order.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{order.name}</Text>
                                            <Text style={styles.headigTwo}>{order.id}</Text>
                                        </View>
                                    </View>

                                </View>
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
                                <View style={styles.roleContainer}
                                    key={index}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image
                                                style={styles.iconImage}
                                                source={pack.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{pack.name}</Text>
                                            <Text style={styles.headigTwo}>{pack.id}</Text>
                                        </View>
                                    </View>

                                </View>
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
                                <View style={styles.roleContainer}
                                    key={index}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image
                                                style={styles.iconImage}
                                                source={deliver.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{deliver.name}</Text>
                                            <Text style={styles.headigTwo}>{deliver.id}</Text>
                                        </View>
                                    </View>

                                </View>
                            ))}

                        </View>

                    </ScrollView>
                </View>
            )}

            {selectedOption === 'Reviews' && (
                <View style={styles.navigateContainer}>
                    <Text style={styles.subHeadingThree}>Reviews</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            {reviews.map((review, index) => (
                                <View style={styles.roleContainer}
                                    key={index}>
                                    <View style={styles.row}>
                                        <View style={styles.iconSquareBefore}>
                                            <Image
                                                style={styles.iconImage}
                                                source={review.image} />
                                        </View>
                                        <View style={styles.marginStart}>
                                            <Text style={styles.headingOne}>{review.name}</Text>
                                            <Text style={styles.headigTwo}>{review.id}</Text>
                                        </View>
                                    </View>

                                </View>
                            ))}

                        </View>

                    </ScrollView>
                </View>
            )}




        </View>
    )
}

