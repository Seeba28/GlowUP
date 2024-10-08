import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { PermissionsAndroid, PermissionsIOS } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import BackArrow from '../../../components/BackArrow';
import Button from '../../../components/Button';

export default function ServiceProviderEditService({ route, navigation }) {

  const { serviceNameHeading, serviceName, serviceAbout: initialServiceAbout, serviceDetail: initialServiceDetail, serviceImages: initialServiceImages } = route.params;

  const [serviceAbout, setServiceAbout] = useState(initialServiceAbout);
  const [serviceDetail, setServiceDetail] = useState(initialServiceDetail);
  const [serviceImage, setServiceImage] = useState(initialServiceImages);
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.warn('Camera permission denied');
    }
  };

  const uploadPhoto = async sourceType => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 800,
      maxHeight: 600,
      includeBase64: false,
      saveToPhotos: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (sourceType === 'library') {
      launchImageLibrary(options, response => {
        console.log('Library Response:', response);
        try {
          const uri = response.assets[0].uri;
          if (uri) {
            setServiceImage(prevState => [...prevState, { image: { uri } }]);
          } else {
            console.warn('No image URI found in response');
          }
        } catch (error) {
          console.error('Error setting image:', error);
        }
      });
    } else if (sourceType === 'camera') {
      await requestCameraPermission();

      launchCamera(options, response => {
        console.log('** Full Camera Response:**', response.assets[0].uri);
        try {
          const uri = response.assets[0].uri;
          if (!uri) {
            const cameraResponseUri = response.path || response.uri;
            if (cameraResponseUri) {
              console.log('Using alternative camera URI:', cameraResponseUri);
              setImgUri(cameraResponseUri);
            } else {
              console.log('No image URI found in camera response');
            }
          } else {
            setImgUri(uri);
          }
        } catch (error) {
          console.error('Error setting imgUri:', error);
        }
      });
    }
  };
  const deleteImage = index => {
    setServiceImage(prevState => prevState.filter((_, i) => i !== index));
  };

  const deleteServiceDetails = index => {
    setServiceDetail(prevState => prevState.filter((_, i) => i !== index));
  };

  const addMoreService = () => {
    setServiceDetail(prevState => [
      ...prevState,
      { name: '', price: '' }
    ]);
  };

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

        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.containerBody}>
            <View style={styles.serviceContainer}>
              <Text style={styles.serviceNameText}>{serviceName} Details</Text>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {serviceImage.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.deleteImageContainer}
                      onPress={() => deleteImage(index)}>
                      <Image
                        source={images.crossCircle}
                        style={styles.deleteImage}
                      />
                    </TouchableOpacity>
                    <Image style={styles.imageContainer} source={item.image} />
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.uplaodImageContianer}
                onPress={() => uploadPhoto('library')}>
                <Image source={images.galleryIcon} />
                <Text style={styles.uploadImgText}>Upload Images</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.serviceDetailContainer}>
              <View style={styles.tableHeadingRow}>
                <Text style={styles.tableServiceHeading}>{serviceName}</Text>
                <Text style={styles.tablePriceHeading}>Price</Text>
              </View>
              {serviceDetail.map((item, index) => (
                <View style={styles.serviceContentRow} key={index}>
                  <TouchableOpacity onPress={() => deleteServiceDetails(index)}>
                    <Image source={images.minusPurple} />
                  </TouchableOpacity>
                  <TextInput
                    onChangeText={text => setServiceDetail(prevState => {
                      const updatedDetail = [...prevState];
                      updatedDetail[index].name = text;
                      return updatedDetail;
                    })}
                    value={item.name || ''}
                    style={styles.serviceInputContainer}
                  />
                  <TextInput
                    onChangeText={text => setServiceDetail(prevState => {
                      const updatedDetail = [...prevState];
                      updatedDetail[index].price = text.replace('Rs.', '');
                      return updatedDetail;
                    })}
                    value={`Rs. ${item.price || ''}`}
                    style={styles.priceInputContainer}
                  />
                </View>
              ))}
              {/* {serviceDetail.map((item, index) => (
                <View style={styles.serviceContentRow} key={index}>
                  <TouchableOpacity onPress={() => deleteServiceDetails(index)}>
                    <Image source={images.minusPurple} />
                  </TouchableOpacity>
                  <TextInput
                    onChangeText={text => setServiceDetail(prevState => {
                      const updateServiceDetail = [...prevState]
                      updateServiceDetail[index].name = text.replace('')
                      return updateServiceDetail
                    })}
                    value={item.name}
                    style={styles.serviceInputContainer}></TextInput>
                  <TextInput
                    onChangeText={text => setServiceDetail(prevState => {
                      const updateServiceDetail = [...prevState]
                      updateServiceDetail[index].price = text.replace('Rs.', '')
                      return updateServiceDetail
                    })}
                    value={`Rs. ${item.price}`}
                    style={styles.priceInputContainer}></TextInput>
                </View>
              ))} */}
              <TouchableOpacity
                style={styles.addMoreBtn}
                onPress={addMoreService}>
                <Text style={styles.addMoreBtnText}> + Add More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionContianer}>
              <Text style={styles.descriptionHeadingText}>Description</Text>
              <TextInput
                onChangeText={setServiceAbout}
                value={serviceAbout}
                multiline={true}
                numberOfLines={4}
                style={styles.descriptionTextContainer}
              />
            </View>

          </View>
          <View style={styles.saveChangeBtn}>
            <Button
              title={'Save Changes'}
              onPress={() => {
                navigation.navigate('ServiceProviderServiceDetail', {
                  serviceNameHeading,
                  serviceName,
                  serviceAbout,
                  serviceDetail,
                  serviceImages: serviceImage,
                });
              }}
            />
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
