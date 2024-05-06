import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BackArrow from "../../../components/BackArrow";
import { styles } from "./style";
import Button from "../../../components/Button";

export default function SalonOTP({ navigation }) {
    const [value, setValue] = useState('');
    const [otpError, setOtpError] = useState('');
    const ref = useRef();
    const CELL_COUNT = 4;

    const handleGoBack = () => {
        navigation.goBack()
    }
    const handleOTP = () => {
        if(value.length === 0){
            setOtpError('*Plesse Enter OTP')
        }
        else{
            navigation.navigate("SalonResetPassword")
        }
    }

    return (
        <View style={styles.homeBackgroud}>
            <View style={styles.backArrow}>
                <BackArrow
                onPress={handleGoBack} 
                />
            </View>
            <Text style={styles.headText}>Forgot Password?</Text>
            <Text style={styles.subHeading}>We’ve have send you a verification code on your email to reset your account.</Text>

            <View style={styles.codeFieldContainer}>
                <CodeField
                    ref={ref}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                        >
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
            </View>
            {otpError ? (<Text style={styles.errorText}>{otpError}</Text>) : null}
            <View style={styles.containerTwo}>
                <Text style={styles.colortxt}>
                    Didn't receive the OTP?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.resendTxt}> Resend</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <Button 
            onPress={handleOTP}
                title={'Next'} />
            </View>

        </View>
    )
}
