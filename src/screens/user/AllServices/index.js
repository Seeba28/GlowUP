import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from "react-native";
import React, { useState } from 'react';
import { styles } from "./style";
import { images } from "../../../services/utilities/images";
import { colors } from "../../../services/utilities/colors";

export default function AllServices({ navigation }) {
    const [search, setSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('salon')

    const [allServices, setAllServices] = useState([
        {
            name: 'Hair Cutiing',
            image: images.haircutPic,
            ratings: '4.8',
            price: '850',
            location: 'At Home Service',
            timing: '~ Monday - Thursday',
            about: 'Specialized in precision haircuts and styling. Offering a personalized hair cutting experience that enhances your look and suits your style. Expert in the latest hair trends and techniques.',
            portfolio: [
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.hairCuttingIcon,
                    name: 'Hair Cutting',
                    type: 'Hair Service',
                    price: '850'
                },
                {
                    image: images.hairColoringIcon,
                    name: 'Hair Color',
                    type: 'Hair Service',
                    price: '2,000'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Sara',
                    ratings: 4,
                    reviewText: 'Great service'
                },
            ]
        },
        {
            name: 'Facial',
            image: images.FacialPic,
            ratings: '4.0',
            price: '2000',
            location: 'At Home Service',
            timing: '~ Monday - Friday',
            about: 'Expert in providing rejuvenating facials that cleanse and refresh your skin. Utilizing premium products and techniques to ensure your skin feels revitalized and glowing.',
            portfolio: [
                { image: images.face1 },
                { image: images.haircutPic },
            ],
            services: [
                {
                    image: images.acneIcon,
                    name: 'Acne Cleansing',
                    type: 'Facial',
                    price: '2,000'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Amna',
                    ratings: 4.1,
                    reviewText: 'Great service'
                },
                
            ]
        },
        {
            name: 'Henna',
            image: images.hennaPic,
            ratings: '4.1',
            price: '200',
            location: 'At Home Service',
            timing: '~ Monday - Friday',
            about: 'Specializing in intricate henna designs for all occasions. Offering a wide range of traditional and contemporary patterns to enhance your special moments with beautiful henna artistry.',
            portfolio: [
                { image: images.FacialPic },
                { image: images.haircutPic },
                { image: images.nailPaint1 },
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.nailTreatmentIcon,
                    name: 'Henna',
                    type: 'Henna Service',
                    price: '500'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Amna',
                    ratings: 4,
                    reviewText: 'Nice work'
                },
            ]
        },
        {
            name: 'Nail Art',
            image: images.nailPaintPic,
            ratings: '4.3',
            price: '1000',
            location: 'At Home Service',
            timing: '~ Monday - Thursday',
            about: 'Offering creative and stylish nail art designs tailored to your preferences. From elegant to extravagant, experience high-quality nail art that complements your style and enhances your look.',
            portfolio: [
                { image: images.face1 },
                { image: images.hairCut1 },
                { image: images.nailPaint1 },
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.nailTreatmentIcon,
                    name: 'Nail Paint',
                    type: 'Nail Service',
                    price: '1,800'
                },
            ],
            reviews: [
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
                    reviewText: 'Amazing experience'
                },
            ]
        },

    ]);

    const [allSalon, setAllSalon] = useState([
        {
            image: images.salonImage,
            name: 'Glow Haven Salon',
            location: 'Street 11 Block 19',
            ratings: '4.8 Ratings',
            about: 'Glow Haven is your go-to beauty salon brand on our convenient beauty service app. Experience luxury treatments from skilled professionals in the comfort of your own space.',
            timing: '~ Open Monday - Thursday',
            portfolio: [
                { image: images.face1 },
                { image: images.hairCut1 },
                { image: images.nailPaint1 },
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.acneIcon,
                    name: 'Acne Cleansing',
                    type: 'Facial',
                    price: '2,000'
                },
                {
                    image: images.hairCuttingIcon,
                    name: 'Hair Cutting',
                    type: 'Hair Service',
                    price: '850'
                }
            ],
            reviews: [
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
                    reviewText: 'Amazing experience'
                },
            ]
        },
        {
            image: images.salonImg2,
            name: 'Rose Salon',
            location: 'Street 12 Block 3',
            ratings: '4.5 Ratings',
            about: 'Rose Salon offers a unique blend of traditional and modern beauty treatments, ensuring you feel pampered and rejuvenated.',
            timing: '~ Open Monday - Thursday',
            portfolio: [
                { image: images.face1 },
                { image: images.haircutPic },
            ],
            services: [
                {
                    image: images.hairColoringIcon,
                    name: 'Hair Color',
                    type: 'Hair Service',
                    price: '1,000'
                },
                {
                    image: images.nailTreatmentIcon,
                    name: 'Nail Paint',
                    type: 'Nail Service',
                    price: '1,800'
                },
                {
                    image: images.acneIcon,
                    name: 'Acne Cleansing',
                    type: 'Facial',
                    price: '2,000'
                },
                {
                    image: images.hairCuttingIcon,
                    name: 'Hair Cutting',
                    type: 'Hair Service',
                    price: '850'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Amna',
                    ratings: 4,
                    reviewText: 'Great service'
                },
                {
                    image: images.profileTop,
                    name: 'Sarah',
                    ratings: 4.2,
                    reviewText: 'Nice!!!'
                },
            ]
        },
        {
            image: images.salonImg3,
            name: 'Beauty Salon',
            location: 'Street 15 Block 4',
            ratings: '4.5 Ratings',
            about: 'Beauty Salon specializes in personalized beauty treatments that bring out the best in you, offering a wide range of services for all your beauty needs.',
            timing: '~ Open Monday - Firday',
            portfolio: [
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.hairColoringIcon,
                    name: 'Hair Color',
                    type: 'Hair Service',
                    price: '2,000'
                },
                {
                    image: images.acneIcon,
                    name: 'Acne Cleansing',
                    type: 'Facial',
                    price: '2,000'
                },
                {
                    image: images.hairCuttingIcon,
                    name: 'Hair Cutting',
                    type: 'Hair Service',
                    price: '850'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Amna',
                    ratings: 4,
                    reviewText: 'Great service'
                },
            ]
        },
        {
            image: images.salonImg4,
            name: 'GlowUP Salon',
            location: 'Street 6 Block 19',
            ratings: '4.3 Ratings',
            about: 'At GlowUP Salon, we provide top-notch beauty services tailored to enhance your natural glow. Book now and enjoy a luxurious beauty experience.',
            timing: '~ Open Monday - Thursday',
            portfolio: [
                { image: images.FacialPic },
                { image: images.haircutPic },
                { image: images.nailPaint1 },
                { image: images.hennaPic },
            ],
            services: [
                {
                    image: images.nailTreatmentIcon,
                    name: 'Nail Paint',
                    type: 'Nail Service',
                    price: '1,800'
                },
                {
                    image: images.hairCuttingIcon,
                    name: 'Hair Cutting',
                    type: 'Hair Service',
                    price: '850'
                },
            ],
            reviews: [
                {
                    image: images.profileTop,
                    name: 'Amna',
                    ratings: 4,
                    reviewText: 'Good'
                },
            ]
        },
    ]);

    const filterData = () => {
        if (selectedOption === 'salon') {
            return allSalon.filter(salon =>
                salon.name.toLowerCase().includes(search.toLowerCase())
            );
        } else {
            return allServices.filter(service =>
                service.name.toLowerCase().includes(search.toLowerCase())
            );
        }
    };


    const feildSearch = text => {
        setSearch(text);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSalonDetails = (service) => {
        navigation.navigate('SalonDetailsTwo', { serviceDetails: service });
    };


    return (
        <View>
            <View style={styles.topContainer}>
                {/* <TouchableOpacity>
                    <Image source={images.profileTop} />
                </TouchableOpacity> */}
                <Text style={styles.serviceText}>Services</Text>
            </View>
            <View style={styles.searchContainer}>
                <Image source={images.search} />
                <TextInput
                    style={styles.searchTextInput}
                    placeholder="Search..."
                    placeholderTextColor={colors.darkPurple}
                    onChangeText={feildSearch}
                    value={search}></TextInput>
            </View>
            <View style={styles.chooseOption}>
                <TouchableOpacity
                    style={selectedOption === 'salon' && styles.selectedChooseOption}
                    onPress={() => handleOptionSelect('salon')}
                >
                    <Text style={styles.chooseTxt}>Salons</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedOption === 'services' && styles.selectedChooseOption}
                    onPress={() => handleOptionSelect('services')}>
                    <Text style={styles.chooseTxt}>Services</Text>
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.containerTwo}>
                    {filterData().map((item, index) => (
                        <View style={styles.serviceRow} key={index}>
                            <View style={styles.serviceContainer}>
                                <TouchableOpacity onPress={() => handleSalonDetails(item)}>
                                    <View style={styles.serviceImageContainer}>
                                        <Image source={item.image} style={styles.serviceImage} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.salonName}>{item.name}</Text>
                                {selectedOption === 'salon' ? (
                                    <>
                                        <View style={styles.insideServiceContainer}>
                                            <Image source={images.location} />
                                            <Text style={styles.servicePriceText}>
                                                {item.location}
                                            </Text>
                                        </View>
                                        <View style={styles.insideServiceContainer}>
                                            <Image source={images.ratings} />
                                            <Text style={styles.servicePriceText}>
                                                {item.ratings}
                                            </Text>
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        <Text style={styles.servicePriceText}>Rs. {item.price}</Text>
                                        <View style={styles.insideServiceContainer}>
                                            <Image source={images.ratings} />
                                            <Text style={styles.serviceDetailsText}>
                                                {item.ratings}
                                            </Text>
                                        </View>
                                    </>
                                )}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

