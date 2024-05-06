import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './style';
import { colors } from '../../../services/utilities/colors';
import { images } from '../../../services/utilities/images';
import BackArrow from '../../../components/BackArrow';

export default function ServiceForgotPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmail = () => {
        const emailValid = email.trim() !== '' && validateEmail(email);

        setEmailError(emailValid ? '' : (email.trim() === '' ? "*Email can't be empty" : '*Invalid email format'));

        if (emailValid) {
        navigation.navigate("ServiceOTP")
            // Proceed with login
            // Example: call an API to authenticate the user
        }
    };

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.homeBackgroud}>
            <View style={styles.backArrow}>
                <BackArrow
                onPress={handleGoBack} />
            </View>
            <Text style={styles.headText}>Forgot Password?</Text>
            <Text style={styles.subHeading}>We will send a reset link to your email.</Text>
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
            <View style={styles.buttonContainer}>
            <Button 
                onPress={handleEmail}
                title={'Next'} />
            </View>
        </View>
    )
}