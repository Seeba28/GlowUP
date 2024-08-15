import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Modal,
  } from 'react-native';
  import React, {useState} from 'react';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import BackArrow from '../../../components/BackArrow';
  
  export default function ServiceProviderServiceDetail({route, navigation}) {

    const { serviceNameHeading, serviceName, serviceAbout, serviceDetail, serviceImages } = route.params;  
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.arrowTop}>
                        <BackArrow onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{serviceNameHeading}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                    >
                        <Image source={images.threeDots} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.ScrollViewContainer}>
                    <View style={styles.containerBody}>
                        <View style={styles.aboutContainer}>
                            <Text style={styles.aboutHeading}>About</Text>
                            <Text style={styles.aboutDescription}>{serviceAbout}</Text>
                        </View>
                        <View style={styles.serviceDetailContainer}>
                            <View style={styles.tableHeadingRow}>
                                <Text style={styles.tableServiceHeading}>{serviceName}</Text>
                                <Text style={styles.tablePriceHeading}>Price</Text>
                            </View>
                            {serviceDetail.map((item, index) => (
                                <View style={styles.serviceContentRow} key={index}>
                                    <Text style={styles.serviceNameText}>{item.name}</Text>
                                    <Text style={styles.priceText}>Rs. {item.price}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.imageView}>
                        <Text style={styles.imageHeading}>Images</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            {serviceImages.map((item, index) => (
                                <View key={index}>
                                    <Image style={styles.imageContainer} source={item.image} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalView}>
                        <TouchableOpacity
                        style={styles.modalRow}
                            onPress={() => {
                                navigation.navigate('ServiceProviderEditService', {
                                    serviceNameHeading,
                                    serviceName,
                                    serviceAbout,
                                    serviceDetail,
                                    serviceImages,
                                });
                            }}
                        >
                            <Image source={images.editProfile} />
                            <Text style={styles.modalText}>Edit</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
  }
  