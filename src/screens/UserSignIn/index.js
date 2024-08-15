import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BackArrow from '../../components/BackArrow';
import { images } from '../../services/utilities/images';
import { colors } from '../../services/utilities/colors';
import Button from '../../components/Button';
export default function UserSignIn({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const feildShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = () => {
        const emailValid = email.trim() !== '' && validateEmail(email);
        const passwordValid = password.trim() !== '';

        setEmailError(emailValid ? '' : (email.trim() === '' ? "*Email can't be empty" : '*Invalid email format'));
        setPasswordError(passwordValid ? '' : "*Password can't be empty");

        if (emailValid && passwordValid) {
            navigation.navigate("MyTabs")
        }
    };
    
    const handlePress = () =>{
        navigation.navigate("UserSignUp")
    }
    const handleGoBack = () =>{
        navigation.goBack()
    }
    const handleForgotPass = () => {
        navigation.navigate("UserResetPassword")
    }
    return (
        <View style={styles.homeBackgroud}>
            <View style={styles.backArrow}>
                <BackArrow 
                onPress={handleGoBack}
                />
            </View>
            <Text style={styles.headText}>Sign In</Text>
            <View style={styles.contianerTwo}>
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
                    <Image source={images.password} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Password"
                        placeholderTextColor={colors.gray}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}></TextInput>
                    <TouchableOpacity onPress={feildShowPassword}>
                        <Image source={showPassword ? images.eyeOpen : images.eyeClosed} />
                    </TouchableOpacity>
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>
            <TouchableOpacity
            onPress={handleForgotPass}>
                <Text style={styles.forgotPassTxt}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.containerThree}>
                <Button 
                onPress={handleLogin}
                title={'Sign In'} />
                {/* <Text style={styles.continueTxt}>or continue with</Text>
                <TouchableOpacity style={styles.otherButton}>
                    <Image source={images.google} />
                    <Text style={styles.googleBtnText}>+ Google</Text>
                </TouchableOpacity> */}
                <Text style={styles.continueTxt}>Don’t have an account?</Text>
                <TouchableOpacity style={styles.otherButton}
                onPress={handlePress}>
                    <Text style={styles.signUpBtnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
