import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { useRoute } from "@react-navigation/native";
import { images } from "../../../services/utilities/images";
import { styles } from "./style";
import BackArrow from "../../../components/BackArrow";
import { sizes } from "../../../services/utilities/sizes";
import Button from "../../../components/Button";

export default function SalonDetailsTwo({ navigation }) {
    const route = useRoute();
    const { serviceDetails } = route.params;
    const [salonName, setSalonName] = useState(serviceDetails.name);
    const [salonLocation, setSalonLocation] = useState(serviceDetails.location);
    const [salonRatings, setSalonRatings] = useState(serviceDetails.ratings);
    const [salonImage, setSalonImage] = useState([{ image: serviceDetails.image }]);
    const [salonTiming, setSalonTiming] = useState(serviceDetails.timing);
    const [salonAbout, setSalonAbout] = useState(serviceDetails.about);
    const [portfolioImage, setPortfolioImage] = useState(serviceDetails.portfolio);
    const [salonService, setSalonService] = useState(serviceDetails.services);
    const [salonRating, setSalonRating] = useState(serviceDetails.reviews);
  
    const [selectOption, setSelectOption] = useState('About')
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
        navigation.navigate("AppointmentBookingTwo", { selectedService: salonService[selectedServiceIndex] });
    };
    
    

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

                                    <Text style={styles.priceTxt}>Rs. {service.price}</Text>
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
                            <StarRatingDisplay rating={review.ratings}
                            starSize={sizes.screenHeight* 0.03}
                            />
                            <Text style={styles.reviewTxt}>{review.reviewText}</Text>

                        </View>
                    </View>
                    ))}
                    {/* <TouchableOpacity onPress={handleViewReview}>
                        <Text style={styles.seeAllBtn}>See All</Text>
                    </TouchableOpacity> */}
                    
                </View>
            )}


        </View>
    )
}