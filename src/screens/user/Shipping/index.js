import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { images } from "../../../services/utilities/images";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useRoute } from "@react-navigation/native";

export default function Shipping({ navigation }) {
    const route = useRoute();
    const { name = '', phone = '', email = '', address = '', city = '', totalAmount = '0' } = route.params || {};

    const [shippingDate, setShippingDate] = useState('')
    const [orderId, setOrderId] = useState('')
    const [productImage, setProductImage] = useState(images.shipping)

    useEffect(() => {
        const randomOrderId = Math.floor(Math.random() * 10000) + 1000;
        setOrderId(randomOrderId);

        const today = new Date();
        today.setDate(today.getDate() + 5);
        const options = { month: 'short', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options); 
        setShippingDate(formattedDate);
    }, []);


    const handleShopping = () => {
        navigation.navigate("MyTabs")
    }

    return (
        <View style={styles.productBakcground}>
            <Image
                style={styles.thankuImage}
                source={images.thankyou} />
            <Text style={styles.thankuTxt}>Thank you for shopping with us</Text>
            <Text style={styles.textDesciptionOne}>
                We got your order and happily preparing it. Estimated delivery date is
                <Text style={styles.textDesciptionTwo}> {shippingDate}</Text>
            </Text>
            <View style={styles.textFeildContainer}>
                <View style={styles.detailsCoulmn}>
                    <Text style={styles.headingThree}>Order ID #{orderId}</Text>
                    <View style={styles.marginTop}>
                        <Text style={styles.inputFieldTxt}>Name</Text>
                        <Text style={styles.inputFeildDetailTxt}>{name}</Text>
                    </View>
                    <View style={styles.marginTop}>
                        <Text style={styles.inputFieldTxt}>Phone#</Text>
                        <Text style={styles.inputFeildDetailTxt}>{phone}</Text>
                    </View>
                    <View style={styles.marginTop}>
                        <Text style={styles.inputFieldTxt}>Email</Text>
                        <Text style={styles.inputFeildDetailTxt}>{email}</Text>
                    </View>
                    <View style={styles.marginTop}>
                        <Text style={styles.inputFieldTxt}>Address</Text>
                        <Text style={styles.inputFeildDetailTxt}>{address}</Text>
                    </View>
                    <View style={styles.marginTop}>
                        <Text style={styles.inputFieldTxt}>City</Text>
                        <Text style={styles.inputFeildDetailTxt}>{city}</Text>
                    </View>
                    <View style={styles.totalAmountRow}>
                        <Text style={styles.inputFeildDetailTxt}>Total Amount:</Text>
                        <Text style={styles.headingThree}> Rs.{totalAmount}</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.productImage}
                        source={productImage} />
                </View>

            </View>

            <View style={styles.buttonView}>
                <Button title={'Continue Shopping'}
                onPress={handleShopping}/>
                {/* <TouchableOpacity>
                    <Text style={styles.viewOrderText}>View order history</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}