import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';
import { images } from '../../../services/utilities/images';
import BackArrow from '../../../components/BackArrow';
import { styles } from './style';
import { sizes } from '../../../services/utilities/sizes';
import Button from '../../../components/Button';
import { colors } from '../../../services/utilities/colors';

export default function AppointmentBookingTwo({ navigation }) {
    const route = useRoute();
    const { selectedService } = route.params;

    const [selectTime, setSelectTime] = useState('')
    const handleTimePress = (time) => {
        setSelectTime(time)
    }
    const [selectedDate, setSelectedDate] = useState('')
    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const markedDates = {};
    markedDates[selectedDate] = { selected: true, selectedColor: colors.selectedPurple };

    const [itemCart, setItemCart] = useState([
        {
            name: 'Acne Facial',
            price: 2000,
            image: images.acneIcon
        },
    ])

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleBack = () => {
        navigation.goBack()
    }
    

    const [availbleTime, setAvailableTime] = useState([
        { time: '10:00 AM' },
        { time: '11:00 AM' },
        { time: '12:00 PM' },
        { time: '01:00 PM' },
        { time: '02:00 PM' },
        { time: '03:00 PM' },
        { time: '04:00 PM' },
        { time: '05:00 PM' },
        { time: '06:00 PM' },
        { time: '07:00 PM' },
        { time: '08:00 PM' },
        { time: '09:00 PM' },

    ])

    const handleAppointmentBookingDetial = () => {
        const priceString = selectedService?.price; 
        const price = parseFloat(priceString.replace(/,/g, '')); 
        const totalAmount = price * quantity;

        navigation.navigate("AppointmentBookingDetail", {
            selectedService: selectedService,
            appointmentDate: selectedDate,
            appointmentTime: selectTime,
            quantity: quantity,
            totalAmount: totalAmount
        });
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
            <ScrollView style={styles.scrollContainer}>
                <View>
                    <View style={styles.body}>
                        <View style={styles.textFeildContainer}>
                            <View style={styles.productImageContainer}>
                                <Image style={styles.productImage} source={selectedService?.image || images.defaultImage} />
                            </View>
                            <View style={styles.flexColumn}>
                                <Text style={styles.itemName}>{selectedService?.name || 'Service Name'}</Text>
                                <Text style={styles.itemPrice}>Rs. {selectedService?.price || '0'}</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <TouchableOpacity onPress={handleSubtract}>
                                    <Image source={images.subtract} />
                                </TouchableOpacity>
                                <Text style={styles.itemName}>{quantity}</Text>
                                <TouchableOpacity onPress={handleAdd}>
                                    <Image source={images.add} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* {itemCart.map((item, index) => {
                        return (
                            <View style={styles.body}
                                key={index}>
                                <View
                                    style={styles.textFeildContainer}>
                                    <View style={styles.productImageContainer}>
                                        <Image
                                            style={styles.productImage}
                                            source={item.image}
                                        />
                                    </View>

                                    <View style={styles.flexColumn}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPrice}>Rs. {item.price}</Text>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <TouchableOpacity onPress={handleSubtract}>
                                            <Image source={images.subtract} />
                                        </TouchableOpacity>
                                        <Text style={styles.itemName}>{quantity}</Text>
                                        <TouchableOpacity onPress={handleAdd}>
                                            <Image source={images.add} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })} */}
                </View>
                <Text style={styles.grayHeading1}>Select Date and Time for your appointment </Text>
                <Calendar
                    onDayPress={handleDayPress}
                    markedDates={markedDates}
                    style={{
                        marginHorizontal: sizes.screenWidth * 0.05,
                        marginTop: sizes.screenHeight * 0.01
                    }}
                    theme={{
                        calendarBackground: colors.calenderBg,
                        selectedDayBackgroundColor: colors.selectedPurple,
                        todayTextColor: colors.darkPurple,
                        selectedDayTextColor: colors.black,
                        arrowColor: colors.darkPurple
                    }}

                />
                <Text style={styles.availableTimeHeading}>Available Time</Text>
                <View style={styles.timingView}>
                    {availbleTime.map((item, index) => (
                        <View style={styles.timingViewRow} key={index}>
                            <TouchableOpacity style={[styles.timingNotSelected, selectTime === item.time && styles.timingSelected]}
                                onPress={() => handleTimePress(item.time)}>
                                <Text style={styles.timingTextColor}>{item.time}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>

                <View style={styles.buttonTop}>
                    <Button title={'Proceed To Payment'}
                        onPress={handleAppointmentBookingDetial}

                    />
                </View>
            </ScrollView>


        </View>
    )
}