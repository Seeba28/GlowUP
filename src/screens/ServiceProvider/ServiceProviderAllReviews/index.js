import { Text, TouchableOpacity, View,Image } from "react-native";
import React, { useState } from 'react';
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { images } from "../../../services/utilities/images";
import BackArrow from "../../../components/BackArrow";
import { styles } from "./style";
import { sizes } from "../../../services/utilities/sizes";
export default function ServiceProviderAllReviews({ navigation }) {
    const [salonRating, setSalonRating] = useState([
        {
            image: images.profileTop,
            name: 'Victoria',
            ratings: 4,
            reviewText: 'Great service'
        },
        {
            image: images.profileTop,
            name: 'Sarah',
            ratings: 4.5,
            reviewText: 'Great service'
        },
        {
            image: images.profileTop,
            name: 'Victoria',
            ratings: 4,
            reviewText: 'Great service'
        }
    ])

    const handleBack = () => {
        navigation.goBack()
    }


    return (
        <View>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Reviews</Text>
            </View>

            <View style={styles.optionBottomContainerThree}>
                {salonRating.map((review, index) => (
                    <View style={styles.reviewRow}
                        key={index}>
                        <View style={styles.profileCircle}>
                            <Image source={review.image} />
                        </View>
                        <View style={styles.reviewCOlumn}>
                            <Text style={styles.reviewName}>{review.name}</Text>
                            <StarRatingDisplay rating={review.ratings}
                                starSize={sizes.screenHeight * 0.03}
                            />
                            <Text style={styles.reviewTxt}>{review.reviewText}</Text>

                        </View>
                    </View>
                ))}
                <TouchableOpacity>
                    <Text style={styles.seeAllBtn}>See All</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}