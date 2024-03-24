import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { images } from "../../../services/utilities/images";
import { useState } from "react";
import Button from "../../../components/Button";

export default function Shipping({ navigation }) {
    const [shippingDate, setShippingDate] = useState(' March 24')
    const [orderId, setOrderId] = useState('1532')
    const [name, setName] = useState('Victoria Bennet')
    const [phone, setPhone] = useState('+92 32013208932')
    const [email, setEmail] = useState('victoria12@email.com')
    const [address, setAddress] = useState('79 Streets,ABC Area')
    const [city, setCity] = useState('Karachi')
    const [totalAmount, setTotalAmount] = useState('900')
    const [productImage, setProductImage] = useState(images.shipping)

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
                <Text style={styles.textDesciptionTwo}>{shippingDate}</Text>
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
                <TouchableOpacity>
                    <Text style={styles.viewOrderText}>View order history</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}