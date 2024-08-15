import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { images } from "../../../services/utilities/images";
import { colors } from "../../../services/utilities/colors";
import BackArrow from "../../../components/BackArrow";
import Button from "../../../components/Button";
import { styles } from "./style";


export default function SellerResetPassword({ navigation }) {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfrimPassword] = useState(false)
    const [passwordError, setPasswordError] = useState('');
    const [confrimPasswordError, setConfirmPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');


    const feildShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const feildShowConfirmPassword = () => {
        setShowConfrimPassword(!showConfirmPassword)
    }


    const handleResetPassword = () => {
        const passwordValid = password.trim() !== '';
        const confirmPasswordValid = confirmPassword.trim() !== '';
        const passwordMatch = password === confirmPassword

        setConfirmPasswordError(confirmPasswordValid ? '' : "*Confirm Password can't be empty");
        setPasswordError(passwordValid ? '' : "*Password can't be empty");
        setPasswordMatchError(passwordMatch ? '' : "*Password doesn't match");

        if (confirmPassword && passwordValid && passwordMatch) {
            navigation.navigate("SellerHome")
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
                    onPress={handleGoBack}
                />
            </View>
            <Text style={styles.headText}>Reset Password</Text>
            <Text style={styles.subHeading}>Enter a new password to reset the
                password on your account.</Text>
            <View style={styles.contianerTwo}>
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
                <View style={styles.textFeildContainer}>
                    <Image source={images.password} />
                    <TextInput
                        style={styles.feildText}
                        placeholder="Confirm Password"
                        placeholderTextColor={colors.gray}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry={!showConfirmPassword}></TextInput>
                    <TouchableOpacity onPress={feildShowConfirmPassword}>
                        <Image source={showConfirmPassword ? images.eyeOpen : images.eyeClosed} />
                    </TouchableOpacity>
                </View>
                {confrimPasswordError ? <Text style={styles.errorText}>{confrimPasswordError}</Text> : null}
            {passwordMatchError?<Text style={styles.errorText}>{passwordMatchError}</Text>: null}
            </View>
            <View style={styles.buttonContainer}>
            <Button
                onPress={handleResetPassword}
                title={'Reset Password'} />
            </View>
        </View>
    )
}