import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid, PermissionsIOS } from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import Button from '../../../components/Button';
import { colors } from '../../../services/utilities/colors';

export default function SalonSetup({ navigation }) {
    const [salonName, setSalonName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [imgUri, setImgUri] = useState(null);
    const [salonNameError, setSalonNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [locationError, setLocationError] = useState('');



    const handleNext = () => {
        const salonNameValidate = salonName.trim() !== '';
        const descriptionValidate = description.trim() !== '';
        const timeValidate = time.trim() !== '';
        const locationValidate = location.trim() !== '';


        setSalonNameError(salonNameValidate ? '' : "*Salon name can't be empty");
        setDescriptionError(descriptionValidate ? '' : "*Description can't be empty");
        setTimeError(timeValidate ? '' : "*Time can't be empty");
        setLocationError(locationValidate ? '' : "*Location can't be empty");


        if (salonNameValidate && descriptionValidate && timeValidate && locationValidate) {
            navigation.navigate("SalonTabs")
            // Proceed with login
            // Example: call an API to authenticate the user
        }
    };

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
                    const uri =
                        response.uri || (response.assets && response.assets[0].uri);
                    if (uri) {
                        setImgUri(uri);
                    } else {
                        console.warn('No image URI found in library response');
                    }
                } catch (error) {
                    console.error('Error setting imgUri:', error);
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

    return (
        <View style={styles.container}>
            <View style={styles.backArrow}>
                <BackArrow onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.Forgotpass}>Set-Up Outlet</Text>
            <ScrollView style={styles.scrollContainer}>
                <View>
                    <TouchableOpacity
                        style={styles.uploadImage}
                        onPress={() => uploadPhoto('library')}
                    >
                        {imgUri ? (
                            <Image
                                source={{ uri: imgUri }}
                                style={styles.imagestyle}
                            />
                        ) : (
                            <Image style={styles.addimage} source={images.uploadOutlet} />
                        )}

                    </TouchableOpacity>
                </View>
                <View style={styles.uploadPress}>
                    <Text style={styles.uploadCover}>Upload Cover</Text>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>Salon Name</Text>
                        <TextInput
                            style={styles.textFeildContainer}
                            placeholder="Salon Name"
                            placeholderTextColor={colors.gray}
                            onChangeText={setSalonName}
                            value={salonName}></TextInput>
                    </View>
                {salonNameError ? <Text style={styles.errorText}>{salonNameError}</Text> : null}

                    <View>
                        <Text style={styles.title}>Description</Text>
                        <TextInput
                            style={styles.textFeildDescription}
                            placeholder="Description"
                            placeholderTextColor={colors.gray}
                            onChangeText={setDescription}
                            value={description}
                            multiline={true}
                            numberOfLines={4}></TextInput>
                    </View>
                {descriptionError ? <Text style={styles.errorText}>{descriptionError}</Text> : null}

                    <View>
                        <Text style={styles.title}>Time</Text>
                        <TextInput
                            style={styles.textFeildContainer}
                            placeholder="Time"
                            placeholderTextColor={colors.gray}
                            onChangeText={setTime}
                            value={time}></TextInput>
                    </View>
                {timeError ? <Text style={styles.errorText}>{timeError}</Text> : null}

                    <View>
                        <Text style={styles.title}>Location</Text>
                        <TextInput
                            style={styles.textFeildContainer}
                            placeholder="Location"
                            placeholderTextColor={colors.gray}
                            onChangeText={setLocation}
                            value={location}></TextInput>
                    </View>
                {locationError ? <Text style={styles.errorText}>{locationError}</Text> : null}

                </View>
                <View style={styles.nextBtn}>
                    <Button title={'Next'}
                        onPress={handleNext}

                    // onPress={() => navigation.navigate('SalonTabs')}
                    />
                </View>
            </ScrollView>



        </View>
    );
}
