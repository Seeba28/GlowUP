import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import { colors } from '../../../services/utilities/colors';

export default function ServiceProviderCatalogue({ navigation }) {
    const [search, setSearch] = useState('');
    const feildSearch = text => {
        setSearch(text);
    };
    const [servicesData, setserviceData] = useState([
        {
            serviceImage: images.HairCutService,
            serviceName: 'Haircuts',
            serviceStyles: '5',
        },
        {
            serviceImage: images.FacialService,
            serviceName: 'Facial',
            serviceStyles: '5',
        },
        {
            serviceImage: images.HeenaService,
            serviceName: 'Heena',
            serviceStyles: '5',
        },
        {
            serviceImage: images.NailService,
            serviceName: 'Nails',
            serviceStyles: '5',
        },
        
    ]);


    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <TouchableOpacity>
                    <Image source={images.profileTop} />
                </TouchableOpacity>
                <Text style={styles.productText}>Services</Text>
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

            <View style={styles.containerBody}>
                
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <View style={styles.serviceContainer}>
                            {servicesData.map((item, index) => (
                                <TouchableOpacity
                                    style={styles.serviceBox}
                                    key={index}
                                    onPress={() => navigation.navigate('ServiceProviderServiceDetail', { serviceNameHeading: item.serviceName, serviceName: item.serviceName })}
                                    >
                                    <Image
                                        source={item.serviceImage}
                                        style={styles.serviceImage}
                                    />
                                    <Text style={styles.serviceName}>{item.serviceName}</Text>
                                    <Text style={styles.serviceStyle}>
                                        {item.serviceStyles} Styles
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                 onPress={() => navigation.navigate('ServiceProviderAddService')}
                 >

                    <Image style={styles.addService} source={images.purplePlus} />
                </TouchableOpacity>

            </View>


        </View>
    );
}
