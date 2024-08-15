import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from 'react';
import StarRating from "react-native-star-rating-widget";
// import { images } from "../../../services/utilities/images";
// import { styles } from "./style";
// import NotificationIcon from "../../../components/NotificationIcon";
// import { sizes } from "../../../services/utilities/sizes";
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { images } from "../../../services/utilities/images";
import { styles } from "./style";
import NotificationIcon from "../../../components/NotificationIcon";
import { sizes } from "../../../services/utilities/sizes";
export default function ServiceProviderHome({ navigation }) {
    const [userProfile, setUserProfile] = useState(images.profileTop)
    const [userName, setUseName] = useState('Sana Malik')


    const handleSellerNotifcation = () => {
        navigation.navigate("ServiceProviderNotification")
    }


    const handleProfile = () => {
        navigation.navigate('ServiceProviderProfile')
    }
    const [lastServices, setLastServices] = useState([
        {
            serviceName: 'Haircut',
            price: '850',
            date: 'Oct 30',
            time: '10:00 AM',
            status: 'Done',
        },
        {
            serviceName: 'Haircut',
            price: '1000',
            date: 'Oct 30',
            time: '10:00 AM',
            status: 'Done',
        },
        {
            serviceName: 'Facial',
            price: '500',
            date: 'Oct 30',
            time: '10:00 AM',
            status: 'Cancelled',
        },
        {
            serviceName: 'Facial',
            price: '800',
            date: 'Oct 30',
            time: '10:00 AM',
            status: 'Cancelled',
        },
    ]);

    [salonRating, setSalonRating] = useState([
        {
            image: images.profileTop,
            name: 'Amna',
            ratings: 4,
            reviewText: 'Great service'
        },
        {
            image: images.profileTop,
            name: 'Sarah',
            ratings: 3.5,
            reviewText: 'Nice'
        },
        {
            image: images.profileTop,
            name: 'Umaima',
            ratings: 4,
            reviewText: 'Great '
        }
    ])
 

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topRowContainer}>
                {/* <TouchableOpacity style={styles.profileContainer}
                    onPress={handleProfile}>
                    <Image
                        style={styles.profileImg}
                        source={userProfile}
                    />
                </TouchableOpacity> */}
                <Text style={styles.heading}>Welcome</Text>
                {/* <View style={styles.margin}>
                    <NotificationIcon onPress={handleSellerNotifcation} />
                </View> */}
            </View>
            <ScrollView style={styles.ScrollViewContainer}>
                <View style={styles.containerBody}>
                    <Text style={styles.headingSummary}>Last Services</Text>
                    <View style={styles.lastServicesContainer}>
                        <View style={styles.rowThree}>
                            <Text style={styles.serviceHeading}>Service</Text>
                            <Text style={styles.priceHeading}>Price</Text>
                            <Text style={styles.dateHeading}>Date & Time</Text>
                            <Text style={styles.statusHeading}>Status</Text>
                        </View>
                        <ScrollView>
                            {lastServices.map((item, index) => (
                                <View key={index} style={styles.serviceDetailRow}>
                                    <Text style={styles.serviceHeading}>
                                        {item.serviceName}
                                    </Text>
                                    <Text style={styles.priceHeadingTwo}>Rs.{item.price}</Text>
                                    <View>
                                        <Text style={styles.dateHeadingTwo}>{item.date}</Text>
                                        <Text style={styles.timeHeading}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.statusHeadingTwo}>{item.status}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.rowFour}>
                        <Text style={styles.reviewHeading}>Reviews</Text>
                        <TouchableOpacity
                            style={styles.viewAllBtn}
                            onPress={() => navigation.navigate('ServiceProviderAllReviews')}>
                            <Text style={styles.viewAllText}>View All</Text>
                            <Image
                                style={styles.arrowImage}
                                source={images.rightArrowRed}
                            />
                        </TouchableOpacity>
                    </View>
                    {salonRating.map((review, index) =>(
                        <View style={styles.reviewRow}
                        key={index}>
                        <View style={styles.profileCircle}>
                            <Image source={review.image} />
                        </View>
                        <View style={styles.reviewCOlumn}>
                            <Text style={styles.reviewName}>{review.name}</Text>
                            <StarRatingDisplay
                            rating={review.ratings}
                            starSize={sizes.screenHeight* 0.03}
                            />
                            <Text style={styles.reviewTxt}>{review.reviewText}</Text>

                        </View>
                    </View>
                    ))}

                </View>
            </ScrollView>



        </View>
    )
}
