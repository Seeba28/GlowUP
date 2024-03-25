import React, { useState } from 'react';
import { Image, Text, View, TextInput } from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { styles } from './style';
import { images } from '../../../services/utilities/images';
import { colors } from '../../../services/utilities/colors';
import Button from '../../../components/Button';

export default function SellerEditProfile({ navigation }) {
    const [profileImage, setProfileImage] = useState(images.profileLarge)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [userNameError, setUserNameError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePhone = (phone) => {
        const phoneRegex = /^\d{11}$/;;
        return phoneRegex.test(phone);
    };
    const handleSaveChanges = () => {
        const emailValid = email.trim() !== '' && validateEmail(email);
        const phoneValidate = phone.trim() !== '' && validatePhone(phone);
        const userNameValidate = userName.trim() !== '';


        setEmailError(emailValid ? '' : (email.trim() === '' ? "*Email can't be empty" : '*Invalid email format'));
        setPhoneError(phoneValidate ? '' : (email.trim() === '' ? "*Phone No. can't be empty" : "*Invalid phone format"))
        setUserNameError(userNameValidate ? '' : "*User Name can't be empty")


        if (emailValid && phoneValidate && userNameValidate) {
            navigation.navigate("SellerHome")
        }
    };


    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Edit Profile</Text>
            </View>
            <Image style={styles.profile}
                source={profileImage} />

            <View style={styles.contianerTwo}>
                <View style={styles.textFeildContainer}>
                    <Image source={images.profile} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Username"
                        placeholderTextColor={colors.gray}
                        onChangeText={setUserName}
                        value={userName}></TextInput>
                </View>
                {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}
                <View style={styles.textFeildContainer}>
                    <Image source={images.email} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Email"
                        placeholderTextColor={colors.gray}
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize='none'></TextInput>
                </View>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <View style={styles.textFeildContainer}>
                    <Image source={images.phone} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Phone"
                        placeholderTextColor={colors.gray}
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType='numeric'></TextInput>
                </View>
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

            </View>
            <View style={styles.buttonView}>
            <Button title={'Save Changes'}
                onPress={handleSaveChanges} />
            </View>
        </View>
    )
}