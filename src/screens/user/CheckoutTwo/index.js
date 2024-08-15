import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import BackArrow from "../../../components/BackArrow";
import { styles } from "./style";
import { colors } from "../../../services/utilities/colors";
import { images } from "../../../services/utilities/images";

export default function CheckOutTwo({ navigation }) {
    const route = useRoute();
    const { itemCart = [], totalAmount = '0', quantity } = route.params || {};

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')

    const handleBack = () => {
        navigation.goBack()
    }
    
    // const handleShipping = () => {
    //     navigation.navigate("Shipping")
    // }
    const handleShipping = () => {
        navigation.navigate("ShippingTwo", {
            name,
            phone,
            email,
            address,
            city,
            totalAmount
        });
    };
    

    return (
        <View style={styles.productBakcground}>
            <View style={styles.backArrow}>
                <BackArrow 
                onPress={handleBack}/>
            </View>
            <View style={styles.containerHeading}>
                <Text style={styles.headingOne}>Checkout</Text>
                <Text style={styles.headingTwo}>Please give your details to order.</Text>
                <Text style={styles.headingThree}>Shipping Details</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Name</Text>
                        <TextInput style={styles.textInputContainer}
                            placeholder="Enter Name"
                            placeholderTextColor={colors.gray}
                            onChangeText={setName}
                            value={name}></TextInput>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Phone#</Text>
                        <TextInput style={styles.textInputContainer}
                            placeholder="Enter Number"
                            placeholderTextColor={colors.gray}
                            onChangeText={setPhone}
                            value={phone}
                            keyboardType='numeric'></TextInput>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Email</Text>
                        <TextInput style={styles.textInputContainer}
                            placeholder="Enter Email"
                            placeholderTextColor={colors.gray}
                            onChangeText={setEmail}
                            value={email}></TextInput>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Address</Text>
                        <TextInput style={styles.textInputContainer}
                            placeholder="Enter Address"
                            placeholderTextColor={colors.gray}
                            onChangeText={setAddress}
                            value={address}
                        ></TextInput>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>City</Text>
                        <TextInput style={styles.textInputContainer}
                            placeholder="Enter City"
                            placeholderTextColor={colors.gray}
                            onChangeText={setCity}
                            value={city}
                        ></TextInput>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Payment</Text>
                        <View style={styles.paymentContainer}>
                            <Image source={images.cashDelivery} />
                            <Text style={styles.paymentTxt}>Cash On Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.textFeildContainer}>
                        <Text style={styles.inputFieldTxt}>Products</Text>
                        {itemCart.map((item, index) => {
                            return (
                                <View style={styles.body}
                                    key={index}>
                                    <View
                                        style={styles.textFeildContainerItem}>
                                        <Image style={styles.productImage}
                                            source={item.image}
                                        />
                                        <View style={styles.flexColumn}>
                                            <Text style={styles.itemName}>{item.name}</Text>
                                            <Text style={styles.itemPrice}>Rs. {item.price}</Text>
                                        </View>
                                        <View style={styles.flexRow}>
                                            <Text style={styles.itemPrice}>QTY: {quantity}</Text>
                                        </View>
                                    </View>
                                </View>

                            )
                        })}
                    </View>

                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.headingTwo}>Total Amount</Text>
                    <Text style={styles.headingFour}>Rs. {totalAmount}</Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer}
                onPress={handleShipping}>
                    <Text style={styles.buttonText}>Confirm Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}