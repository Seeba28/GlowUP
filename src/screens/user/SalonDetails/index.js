import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "./style";
import BackArrow from "../../../components/BackArrow";
import { images } from "../../../services/utilities/images";
import Button from "../../../components/Button";
import StarRating from "react-native-star-rating-widget";
import { sizes } from "../../../services/utilities/sizes";
export default function SalonDetails({ navigation }) {

    const [salonName, setSalonName] = useState('Glow Haven')
    const [salonLocation, setSalonLocation] = useState('Karachi')
    const [salonRatings, setSalonRatings] = useState('3.5/5')
    const [salonTiming, setSalonTiming] = useState('~ Open Monday - Thursday')
    const [selectOption, setSelectOption] = useState('About')
    const [salonAbout, setSalonAbout] = useState('Glow Haven is your go-to beauty salon brand on our convenient beauty service app. Experience luxury treatments from skilled professionals in the comfort of your own space. Book effortlessly, indulge in pampering, and emerge glowing with confidence.')

    const [selectedServiceIndex, setSelectedServiceIndex] = useState(-1);

    const handleServiceSelect = (index) => {
        setSelectedServiceIndex(index);
    };

    const handleOptionSelect = (option) => {
        setSelectOption(option);
    };

    const handleBack = () => {
        navigation.goBack()
    }
    const handleViewReview = () => {
        navigation.navigate("UserReview")
    }

    const handleRatings = () => {
        navigation.navigate("Ratings")
    }

    const handleAppointmentBook = () => {
        navigation.navigate("AppointmentBooking")
    }

    const [salonImage, setSalonImage] = useState([
        { image: images.salonImage },
        { image: images.haircutPic },
        { image: images.hennaPic },
        { image: images.FacialPic },
        { image: images.nailPaintPic }
    ])

    const [portfolioImage, setPortfolioImage] = useState([
        { image: images.face1 },
        { image: images.hairCut1 },
        { image: images.nailPaint1 },
        { image: images.hennaPic },
    ])

    const [salonService, setSalonService] = useState([
        {
            image: images.acneIcon,
            name: 'Acne Cleansing',
            type: 'Facial',
            price: 'Rs. 2,000'
        },
        {
            image: images.hairCuttingIcon,
            name: 'Hair Cutting',
            type: 'Hair Service',
            price: 'Rs. 850'

        },
        {
            image: images.hairColoringIcon,
            name: 'Hair Coloting',
            type: 'Hair Service',
            price: 'Rs. 1,000'

        },
        {
            image: images.nailTreatmentIcon,
            name: 'Nail Treatment',
            type: 'Nails',
            price: 'Rs. 1,500'

        },
        {
            image: images.makeoverIcon,
            name: 'Makeover',
            type: 'Faical',
            price: 'Rs. 3,000'
        },

    ])

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

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>{salonName}</Text>
            </View>
            <View style={styles.containerTwo}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {salonImage.map((salonImg, index) => (
                        <View style={styles.imageSlider}
                            key={index}>
                            <Image
                                style={styles.salonImage}
                                source={salonImg.image} />
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.salonNameTxt}>{salonName}</Text>
                <View style={styles.locationRow}>
                    <Image source={images.location} style={styles.locationImage} />
                    <Text style={styles.locationTxt}>{salonLocation}</Text>
                    <Text style={styles.timingTxt}>{salonTiming}</Text>
                </View>
                <TouchableOpacity style={styles.locationRow}
                    onPress={handleRatings}>
                    <Image source={images.ratings} style={styles.starImage} />
                    <Text style={styles.locationTxt}>{salonRatings}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.salonOptions}>
                <View style={styles.optionRow}>
                    <View style={styles.selectedText}></View>
                    <TouchableOpacity onPress={() => handleOptionSelect('About')}>
                        <Text style={[
                            styles.optionTxt,
                            selectOption === 'About' && styles.selectedText]
                        }>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect('Services')}>
                        <Text style={[styles.optionTxt, selectOption === 'Services' && styles.selectedText]}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect('Reviews')}>
                        <Text style={[styles.optionTxt, selectOption === 'Reviews' && styles.selectedText]}>Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {selectOption === 'About' && (
                <View style={styles.optionsBottomContainer}>
                    <Text style={styles.aboutTxt}>{salonAbout}</Text>
                    <View style={styles.containerTwo}>
                        <Text style={styles.portfolioTxt}>Portfolio</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            {portfolioImage.map((portfolio, index) => (
                                <View style={styles.imageSlider2}
                                    key={index}>
                                    <Image
                                        style={styles.portfolioImage}
                                        source={portfolio.image} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            )}

            {selectOption === 'Services' && (
                <View>
                    <View style={styles.optionBottomContainerTwo}>
                        <Text style={styles.portfolioTxt}>Top Services</Text>
                        <ScrollView style={styles.scrollContainer}>
                            {salonService.map((service, index) => (
                                <TouchableOpacity style={[styles.serviceRow, selectedServiceIndex === index && styles.serviceRowAfter]}
                                    onPress={() => handleServiceSelect(index)}
                                    key={index}>
                                    <View style={styles.rowStartService}>
                                        <Image source={service.image}
                                            style={styles.serviceIcon} />
                                        <View style={styles.innerColumn}>
                                            <Text style={styles.topServiceTxt}>{service.name}</Text>
                                            <Text style={styles.serviceTypeTxt}>{service.type}</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.priceTxt}>{service.price}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Make Appointment'}
                        onPress={handleAppointmentBook} />
                    </View>
                </View>


            )
            }

            {selectOption === 'Reviews' && (
                <View style={styles.optionBottomContainerThree}>
                    {salonRating.map((review, index) =>(
                        <View style={styles.reviewRow}
                        key={index}>
                        <View style={styles.profileCircle}>
                            <Image source={review.image} />
                        </View>
                        <View style={styles.reviewCOlumn}>
                            <Text style={styles.reviewName}>{review.name}</Text>
                            <StarRating rating={review.ratings}
                            starSize={sizes.screenHeight* 0.03}
                            />
                            <Text style={styles.reviewTxt}>{review.reviewText}</Text>

                        </View>
                    </View>
                    ))}
                    <TouchableOpacity onPress={handleViewReview}>
                        <Text style={styles.seeAllBtn}>See All</Text>
                    </TouchableOpacity>
                    
                </View>
            )}


        </View>
    )
}