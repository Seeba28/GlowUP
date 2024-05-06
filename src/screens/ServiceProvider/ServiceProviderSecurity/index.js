import React, { useState } from 'react';
import { View,Text, Image,TextInput,TouchableOpacity } from 'react-native';
import { styles } from '../ServiceSignIn/style';
import BackArrow from '../../../components/BackArrow';
import { images } from '../../../services/utilities/images';
import { colors } from '../../../services/utilities/colors';
import Button from '../../../components/Button';

export default function ServiceProviderSecurity({ navigation }) {
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
            navigation.navigate("ServiceProviderProfile")
        }
    };


    const handleBack = () => {
        navigation.goBack()
    }
return(
    <View>
        <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Secuirty</Text>
            </View>

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

            <View style={styles.buttonView}>
            <Button title={'Save Changes'}
                onPress={handleResetPassword} />
            </View>
    </View>
)
}