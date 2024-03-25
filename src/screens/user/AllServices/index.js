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
            price: 'Rs. 850',
        },
        {
            name: 'Facial',
            image: images.FacialPic,
            ratings: '4.0',
            price: 'Rs. 2000',
        },
        {
            name: 'Henna',
            image: images.hennaPic,
            ratings: '4.1',
            price: 'Rs. 200',
        },
        {
            name: 'Nail Art',
            image: images.nailPaintPic,
            ratings: '4.3',
            price: 'Rs. 1000',
        },

    ]);

    const [allSalon, setAllSalon] = useState([
        {
            image: images.salonImage,
            name: 'Glow Haven Salon',
            location: 'Street 11 Block 19',
            ratings: '4.8 Ratings',
        },
        {
            image: images.salonImg2,
            name: 'Rose Salon',
            location: 'Street 12 Block 3',
            ratings: '4.5 Ratings',
        },
        {
            image: images.salonImg3,
            name: 'Beauty Salon',
            location: 'Street 15 Block 4',
            ratings: '4.5 Ratings',
        },
        {
            image: images.salonImg4,
            name: 'GlowUP Salon',
            location: 'Street 6 Block 19',
            ratings: '4.3 Ratings',
        },
    ]);


    const feildSearch = text => {
        setSearch(text);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View>
            <View style={styles.topContainer}>
                <TouchableOpacity>
                    <Image source={images.profileTop} />
                </TouchableOpacity>
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
                    {selectedOption === 'salon' ? (
                        allSalon.map((salons, index) => (
                            <View style={styles.serviceRow}
                                key={index}>
                                <View style={styles.serviceContainer}>
                                    <TouchableOpacity>
                                        <View style={styles.serviceImageContainer}>
                                            <Image source={salons.image}
                                                style={styles.serviceImage} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.salonName}>{salons.name}</Text>
                                    <View style={styles.insideServiceContainer}>
                                        <Image source={images.location} />
                                        <Text style={styles.servicePriceText}>
                                            {salons.location}
                                        </Text>
                                    </View>
                                    <View style={styles.insideServiceContainer}>
                                        <Image source={images.ratings} />
                                        <Text style={styles.servicePriceText}>
                                            {salons.ratings}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    ) :
                        allServices.map((service, index) => (
                            <View style={styles.serviceRow}
                                key={index}>
                                <View style={styles.serviceContainer}>
                                    <TouchableOpacity>
                                        <View style={styles.serviceImageContainer}>
                                            <Image source={service.image}
                                                style={styles.serviceImage} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.salonName}>{service.name}</Text>
                                    <Text style={styles.servicePriceText}>{service.price}</Text>
                                    <View style={styles.insideServiceContainer}>
                                        <Image source={images.ratings} />
                                        <Text style={styles.serviceDetailsText}>
                                            {service.ratings}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }




                </View>
            </ScrollView>
        </View>
    )
}

