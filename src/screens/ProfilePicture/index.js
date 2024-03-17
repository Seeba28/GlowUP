import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "./styles";
import { images } from "../../services/utilities/images";


export default function ProfilePicture({ navigation }) {
    return (
        <View style={styles.homeBackgroud}>
            <Text style={styles.headText}>Profile Picture</Text>
            <TouchableOpacity style={styles.picContainer}>
                <Image source={images.profilePic} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takePicBtn}>
                <Image source={images.camera} />
                <Text style={styles.takePicBtnText}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadPicBtn}>
                <Image source={images.gallery} />
                <Text style={styles.uploadPicBtnText}>Upload from Gallery</Text>
            </TouchableOpacity>

        </View>
    )
}