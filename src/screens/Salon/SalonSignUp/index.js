import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';
import { colors } from '../../../services/utilities/colors';
import Button from '../../../components/Button';
import { styles } from './style';
import axios from 'axios';

export default function SalonSignUp({navigation}) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [userNameError, setUserNameError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{11}$/;        
        return phoneRegex.test(phone);
    };

    const handleLogin = async () => {
        const emailValid = email.trim() !== '' && validateEmail(email);
        const passwordValid = password.trim() !== '';
        const phoneNumberValid =
          phone.trim() !== '' && validatePhone(phone);
        const fullNameValid = userName.trim() !== '';
    
        setEmailError(emailValid ? '' : "*Email can't be empty or is invalid");
        setPasswordError(passwordValid ? '' : "*Password can't be empty");
        setPhoneError(
          phoneNumberValid ? '' : "*Phone number can't be empty or is invalid",
        );
        setUserNameError(fullNameValid ? '' : "*Full Name can't be empty");
    
        if (emailValid && passwordValid && phoneNumberValid && fullNameValid) {
          try {
            const response = await axios.post(
              'http://172.16.175.193:5000/api/auth/signup',
              {
                fullName: userName,
                email: email,
                phoneNumber: phone,
                password: password,
              },
            );
    
            if (response.data && response.data.success) {
              if (response.data.data && response.data.data._id) {
                navigation.navigate('SalonProfilePicture');
              } else {
                console.error('User ID not found in response data');
              }
            } else {
              console.error('Account creation failed:', response.data.message);
            }
          } catch (error) {
            console.error('Error occurred during sign up:', error);
          }
        }
      };

    // const handleLogin = () => {
    //     const emailValid = email.trim() !== '' && validateEmail(email);
    //     const passwordValid = password.trim() !== '';
    //     const phoneValid = phone.trim() !== '' && validatePhone(phone);
    //     const userNameValid = userName.trim() !== '';

    //     setEmailError(emailValid ? '' : (email.trim() === '' ? "*Email can't be empty" : '*Invalid email format'));
    //     setPasswordError(passwordValid ? '' : "*Password can't be empty");
    //     setPhoneError(phoneValid ? '' : (phone.trim() === '' ? "*Phone No. can't be empty" : "*Invalid phone format"));
    //     setUserNameError(userNameValid ? '' : "*User Name can't be empty");

    //     if (emailValid && passwordValid && phoneValid && userNameValid) {
    //         navigation.navigate("SalonProfilePicture", { userName: userName });
    //     }
    // };

    const feildShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.homeBackgroud}>
            <View style={styles.backArrow}>
                <BackArrow 
                    onPress={handleGoBack}
                />
            </View>
            <Text style={styles.headText}>Sign Up</Text>
            <View style={styles.contianerTwo}>
                <View style={styles.textFeildContainer}>
                    <Image source={images.profile} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Username"
                        placeholderTextColor={colors.gray}
                        onChangeText={setUserName}
                        value={userName}
                    />
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
                        autoCapitalize='none'
                    />
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
                        keyboardType='numeric'
                    />
                </View>
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                <View style={styles.textFeildContainer}>
                    <Image source={images.password} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Password"
                        placeholderTextColor={colors.gray}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={feildShowPassword}>
                        <Image source={showPassword ? images.eyeOpen : images.eyeClosed} />
                    </TouchableOpacity>
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            <View style={styles.containerThree}>
                <Button title={'Sign Up'} onPress={handleLogin} />
                <Text style={styles.continueTxt}>Already have an account?</Text>
                <TouchableOpacity style={styles.otherButton} onPress={() => navigation.navigate("SalonSignIn")}>
                    <Text style={styles.signUpBtnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
