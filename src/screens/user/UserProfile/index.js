import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "./style";
import { images } from "../../../services/utilities/images";

export default function UserProfile({ navigation }) {
    const [profileImage, setProfileImage] = useState(images.profileTop);
    const [userName, setUserName] = useState('Seeba')
    const [userEmail, setUserEmail] = useState('seeba.mubarak.gmail')

    const handleRewards = () => {
        navigation.navigate("Rewards")
    }

    return (
        <View style={styles.serviceBackgroud}>
            <View style={styles.topContainer}>
                <Text style={styles.serviceText}>Profile</Text>
            </View>
            <View style={styles.contianerTwo}>
                <View style={styles.profileDetailRow}>
                    <Image source={profileImage} />
                    <View style={styles.marginStart}>
                        <Text style={styles.nameTxt}>{userName}</Text>
                        <Text style={styles.emailTxt}>{userEmail}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image
                        style={styles.signOutContianer}
                        source={images.signout} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerThree}>
                <TouchableOpacity style={styles.feildsContianer}>
                    <View style={styles.feilds}>
                        <Image source={images.editProfile} />
                        <Text style={styles.feildsName}>Edit Profile</Text>
                    </View>
                    <Image
                        style={styles.next}
                        source={images.nextArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.feildsContianer}>
                    <View style={styles.feilds}>
                        <Image source={images.security} />
                        <Text style={styles.feildsName}>Security</Text>
                    </View>
                    <Image
                        style={styles.next}
                        source={images.nextArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.feildsContianer}
                onPress={handleRewards}>
                    <View style={styles.feilds}>
                        <Image source={images.rewards} />
                        <Text style={styles.feildsName}>Rewards</Text>
                    </View>
                    <Image
                        style={styles.next}
                        source={images.nextArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.feildsContianer}>
                    <View style={styles.feilds}>
                        <Image source={images.history} />
                        <Text style={styles.feildsName}>History</Text>
                    </View>
                    <Image
                        style={styles.next}
                        source={images.nextArrow} />
                </TouchableOpacity>
            </View>
        </View>
    )

}