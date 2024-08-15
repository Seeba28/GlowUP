import { View, Text } from "react-native";
import React, { useState } from 'react';
import { useRoute } from "@react-navigation/native";
import Button from "../../../components/Button";
import { styles } from "./style";
import BackArrow from "../../../components/BackArrow";

export default function AppointmentBookingDetailTwo({ navigation }) {
    const route = useRoute();
    const { selectedService, appointmentDate, appointmentTime, quantity, totalAmount } = route.params;

    const handleBack = () => {
        navigation.goBack()
    }
    const handleSalonDetails = () => {
        navigation.navigate("MyTabs")
    }
    
    const formatNumber = (number) => {
        return number.toLocaleString(); 
    };
    return (
        <View style={styles.productBakcground}>
            <View style={styles.topContainer}>
                <View style={styles.backArrow}>
                    <BackArrow
                        onPress={handleBack} />
                </View>
                <Text style={styles.heading}>Appointment Booking</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyHeading}>Date & Time</Text>
                <Text style={styles.subHeading}>{appointmentDate}    |   {appointmentTime}</Text>
                <Text style={styles.bodyHeading}>Services Details</Text>
                <Text style={styles.subHeading2}>{selectedService?.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>{selectedService?.name}</Text>
                    <Text style={styles.subHeading3}>Rs. {selectedService?.price}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>Quantity</Text>
                    <Text style={styles.subHeading3}>{quantity}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>Total Amount</Text>
                    <Text style={styles.subHeading3}> Rs. {formatNumber(totalAmount)}</Text>
                </View>
                <View style={styles.buttonTop}>
                    <Button title={'Proceed To Checkout'}
                    onPress={handleSalonDetails}
                    />
                </View>

            </View>
        </View>
    )
}