import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "./styles";
import { images } from "../../services/utilities/images";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from "../../components/Button";


export default function UserProfilePicture({ navigation }) {

    const [profileImage, setProfileImage] = useState(
        images.profilePic
    );

    const imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                Alert(res.customButton);
            } else {
                console.log(res.assets[0]);
                const img = res.assets[0];
                setProfileImage(img);
            }
        });
    };

    const cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, res => {
            // console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                Alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                console.log('response--->', res.assets[0]);
                const img = res.assets[0];
                setProfileImage(img);
            }
        });
    };

    const handlePress = () => {
        navigation.navigate("MyTabs",
        {profileImageUri: profileImage.uri})

    }

    return (
        <View style={styles.homeBackgroud}>
            <Text style={styles.headText}>Profile Picture</Text>
            <TouchableOpacity
                style={styles.picContainer}>
                <Image
                    style={styles.profileImage}
                    source={
                        profileImage && profileImage.uri ? { uri: profileImage.uri }
                            : images.profilePic} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takePicBtn}
                onPress={() => {
                    Alert.alert(
                        'Choose Image Source',
                        'Select the Image Source',
                        [
                            {
                                text: 'Gallery',
                                onPress: () => imageGalleryLaunch()
                            },
                            {
                                text: 'Camera',
                                onPress: () => cameraLaunch(),
                            },
                            {
                                text: 'Cancel',
                                style: 'cancel'
                            },
                            { cancelable: true }
                        ]
                    )
                }}
            >
                <Image
                    source={images.camera} />
                <Text style={styles.takePicBtnText}>Choose Image</Text>
            </TouchableOpacity>
            <View style={styles.uploadPicBtn}>
                <Button title={"Next"}
                onPress={handlePress}/>
            </View>

        </View>
    )
}