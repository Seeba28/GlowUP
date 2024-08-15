// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     TextInput,
//     ScrollView,
// } from 'react-native';
// import React, { useState } from 'react';
// import { images } from '../../../services/utilities/images';
// import { styles } from './style';
// import { colors } from '../../../services/utilities/colors';

// export default function SalonCatalogue({ navigation }) {
//     const [search, setSearch] = useState('');
//     const feildSearch = (text) => {
//         setSearch(text);
//     };

//     const [servicesData] = useState([
//         {
//             serviceImage: images.HairCutService,
//             serviceName: 'Haircuts',
//         },
//         {
//             serviceImage: images.FacialService,
//             serviceName: 'Facial',
//         },
//         {
//             serviceImage: images.HeenaService,
//             serviceName: 'Heena',
//         },
//         {
//             serviceImage: images.NailService,
//             serviceName: 'Nails',
//         },
//     ]);

//     // Filtered services based on the search query
//     const filteredServices = servicesData.filter((item) =>
//         item.serviceName.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <View style={styles.productBakcground}>
//             <View style={styles.topContainer}>
//                 {/* <TouchableOpacity>
//                     <Image source={images.profileTop} />
//                 </TouchableOpacity> */}
//                 <Text style={styles.productText}>Services</Text>
//             </View>
//             <View style={styles.searchContainer}>
//                 <Image source={images.search} />
//                 <TextInput
//                     style={styles.searchTextInput}
//                     placeholder="Search..."
//                     placeholderTextColor={colors.darkPurple}
//                     onChangeText={feildSearch}
//                     value={search}
//                 />
//             </View>

//             <View style={styles.containerBody}>
//                 <ScrollView style={styles.scrollContainer}>
//                     <View>
//                         <View style={styles.serviceContainer}>
//                             {filteredServices.map((item, index) => (
//                                 <TouchableOpacity
//                                     style={styles.serviceBox}
//                                     key={index}
//                                     onPress={() =>
//                                         navigation.navigate('SalonServiceDetail', {
//                                             serviceNameHeading: item.serviceName,
//                                             serviceName: item.serviceName,
//                                         })
//                                     }
//                                 >
//                                     <Image
//                                         source={item.serviceImage}
//                                         style={styles.serviceImage}
//                                     />
//                                     <Text style={styles.serviceName}>{item.serviceName}</Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </View>
//                     </View>
//                 </ScrollView>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('SalonAddService')}
//                 >
//                     <Image style={styles.addService} source={images.purplePlus} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }


import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import { colors } from '../../../services/utilities/colors';

export default function SalonCatalogue({ navigation }) {
    const [search, setSearch] = useState('');
    const feildSearch = (text) => {
        setSearch(text);
    }; 

    const [servicesData] = useState([
        {
            serviceImage: images.HairCutService,
            serviceName: 'Haircuts',
            serviceAbout: 'Haircuts that suit your style and personality.',
            serviceDetail: [
                { name: 'Feather Cut', price: '1000' },
                { name: 'Bangs', price: '1000' },
                { name: 'Crew Cut', price: '1200' },
                { name: 'Traditional Cut', price: '850' },
            ],
            serviceImages: [
                { image: images.haircutPic },
                { image: images.hairCut1 },
                { image: images.HairService},
            ],
        },
        {
            serviceImage: images.FacialService,
            serviceName: 'Facial',
            serviceAbout: 'Facials that rejuvenate your skin.',
            serviceDetail: [
                { name: 'Basic Facial', price: '1200' },
                { name: 'Advanced Facial', price: '1800' },
            ],
            serviceImages: [
                { image: images.face1 },
                { image: images.FacialPic },
                { image: images.facials },
            ],
        },
        {
            serviceImage: images.HeenaService,
            serviceName: 'Heena',
            serviceAbout: 'Traditional Heena designs for your special occasions.',
            serviceDetail: [
                { name: 'Simple Heena', price: '500' },
                { name: 'Designer Heena', price: '1500' },
            ],
            serviceImages: [
                { image: images.hennaPic },
            ],
        },
        {
            serviceImage: images.NailService,
            serviceName: 'Nails',
            serviceAbout: 'Nail art and care services.',
            serviceDetail: [
                { name: 'Basic Nail Art', price: '800' },
                { name: 'Advanced Nail Art', price: '1500' },
            ],
            serviceImages: [
                { image: images.nailPaint1 },
                { image: images.nailPaintPic },
                { image: images.nailTreatment },


            ],
        },
    ]);

    const filteredServices = servicesData.filter((item) =>
        item.serviceName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <Text style={styles.productText}>Services</Text>
            </View>
            <View style={styles.searchContainer}>
                <Image source={images.search} />
                <TextInput
                    style={styles.searchTextInput}
                    placeholder="Search..."
                    placeholderTextColor={colors.darkPurple}
                    onChangeText={feildSearch}
                    value={search}
                />
            </View>

            <View style={styles.containerBody}>
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <View style={styles.serviceContainer}>
                            {filteredServices.map((item, index) => (
                                <TouchableOpacity
                                    style={styles.serviceBox}
                                    key={index}
                                    onPress={() =>
                                        navigation.navigate('SalonServiceDetail', {
                                            serviceNameHeading: item.serviceName,
                                            serviceName: item.serviceName,
                                            serviceAbout: item.serviceAbout,
                                            serviceDetail: item.serviceDetail,
                                            serviceImages: item.serviceImages,
                                        })
                                    }
                                >
                                    <Image
                                        source={item.serviceImage}
                                        style={styles.serviceImage}
                                    />
                                    <Text style={styles.serviceName}>{item.serviceName}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


