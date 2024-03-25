import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { images } from "../../services/utilities/images";
import { useState } from "react";
import Button from "../../components/Button";

export default function SelectRole({ navigation }) {

    const [selectedRole, setSelectedRole] = useState(null)
    const [error, setError] = useState('')
    const handleRoleSelection = (role) => {
        setSelectedRole(role)
        setError('')
    }

    const handleNext = () => {
        if (selectedRole === 'customer') {
            navigation.navigate('SignUp');
        } else if (selectedRole === 'ProductSeller') {
            navigation.navigate('SellerSignUp');
        } else {
            setError('*Please select a role');
        }
    };

    
    return (
        <View style={styles.homeBackgroud}>
            <Text style={styles.subHeading}>Let's Personalize Your Experience: Select Your Role!</Text>
            <View style={styles.body}>
                <TouchableOpacity
                    style={[styles.roleContainer, selectedRole === 'customer' && styles.selectedRoleContainer]}
                    onPress={() => handleRoleSelection('customer')}>
                    <View style={styles.row}>
                        <View style={selectedRole === 'customer' ? styles.iconSquareAfter : styles.iconSquareBefore}>
                            <Image
                                style={styles.iconImage}
                                source={selectedRole === 'customer' ? images.userAfter : images.userBefore} />
                        </View>
                        <View style={styles.marginStart}>
                            <Text style={styles.headingOne}>Customer</Text>
                            <Text style={styles.headigTwo}>Access beauty services, buy products.</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.roleContainer, selectedRole === 'Beautician' && styles.selectedRoleContainer]}
                    onPress={() => handleRoleSelection('Beautician')}>
                    <View style={styles.row}>
                        <View style={selectedRole === 'Beautician' ? styles.iconSquareAfter : styles.iconSquareBefore}>
                            <Image
                                style={styles.iconImage}
                                source={selectedRole === 'Beautician' ? images.beauticianAfter : images.beauticianBefore} />
                        </View>
                        <View style={styles.marginStart}>
                            <Text style={styles.headingOne}>Individual Beautician</Text>
                            <Text style={styles.headigTwo}>Provide beauty services at home.</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.roleContainer, selectedRole === 'Salon' && styles.selectedRoleContainer]}
                    onPress={() => handleRoleSelection('Salon')}>
                    <View style={styles.row}>
                        <View style={selectedRole === 'Salon' ? styles.iconSquareAfter : styles.iconSquareBefore}>
                            <Image
                                style={styles.iconImage}
                                source={selectedRole === 'Salon' ? images.salonAfter : images.salonBefore} />
                        </View>
                        <View style={styles.marginStart}>
                            <Text style={styles.headingOne}>Beauty Salon</Text>
                            <Text style={styles.headigTwo}>Arrange pre-salon appointments.</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.roleContainer, selectedRole === 'ProductSeller' && styles.selectedRoleContainer]}
                    onPress={() => handleRoleSelection('ProductSeller')}>
                    <View style={styles.row}>
                        <View style={selectedRole === 'ProductSeller' ? styles.iconSquareAfter : styles.iconSquareBefore}>
                            <Image
                                style={styles.iconImage}
                                source={selectedRole === 'ProductSeller' ? images.productSellerAfter : images.productSellerBefore} />
                        </View>
                        <View style={styles.marginStart}>
                            <Text style={styles.headingOne}>Product Seller</Text>
                            <Text style={styles.headigTwo}>Supply personalized beauty products.</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
            {error !== "" && <Text style={styles.errorText}>{error}</Text>}
            <View style={styles.button}>
                <Button title={'Next'} 
                onPress={handleNext}/>
            </View>

        </View>
    )
}

