import { View, Text } from "react-native";
import React, { useState } from 'react';
import { styles } from "./styles";
import BackArrow from "../../../components/BackArrow";
import Button from "../../../components/Button";

export default function AppointmentBookingDetail({ navigation }) {
    const [appoitmentDate, setAppointmentDate] = useState('April 9, 2024')
    const [appoitmentTime, setAppointmentTime] = useState('2:00 PM')
    const [serviceName, setServiceName] = useState('Facials')
    const [serviceTypeName, setServiceTypeName] = useState('Acne Facials')
    const [servicePrice, setServicePrice] = useState('2,000')
    const [quantity, setQuantity] = useState('2')
    const [totalAmount, setTotalAmount] = useState('4,000')

    const handleBack = () => {
        navigation.goBack()
    }
    const handleSalonDetails = () => {
        navigation.navigate("SalonDetails")
    }
    
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
                <Text style={styles.subHeading}>{appoitmentDate}    |   {appoitmentTime}</Text>
                <Text style={styles.bodyHeading}>Services Details</Text>
                <Text style={styles.subHeading2}>{serviceName}</Text>
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>{serviceTypeName}</Text>
                    <Text style={styles.subHeading3}>Rs. {servicePrice}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>Quantity</Text>
                    <Text style={styles.subHeading3}>{quantity}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={styles.bodyHeading2}>Total Amount</Text>
                    <Text style={styles.subHeading3}> Rs. {totalAmount}</Text>
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