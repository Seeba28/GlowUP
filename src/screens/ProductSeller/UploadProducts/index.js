import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from 'react';
import { styles } from "./styles";
import { images } from "../../../services/utilities/images";
import { colors } from "../../../services/utilities/colors";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from "../../../components/Button";


export default function UploadProducts({ navigation }) {
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState(images.uploadProductImg)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({ label: 'Eyes Products', value: 'Eyes Products' });
    const [selectedShade, setSelectedShade] = useState(null)
    const [error, setError] = useState('');
    const [modalVisible2, setModalVisible2] = useState(false)
    const [category, setCategory] = useState([
        { label: 'Eyes Products' },
        { label: 'Face Products' },
        { label: 'Lips Products' },
    ]
    );
    const [shades, setShades] = useState([
        {
            color: images.FairSkin,
            title: 'Fair Skin',
            selected: false
        },
        {
            color: images.lightSkin,
            title: 'Light Skin',
            selected: false
        },
        {
            color: images.mediumSkin,
            title: 'Medium Skin',
            selected: false
        },
        {
            color: images.OliveSkin,
            title: 'Olive Skin',
            selected: false
        },
        {
            color: images.tanSkin,
            title: 'Tan Skin',
            selected: false
        },
        {
            color: images.deepTanSkin,
            title: 'Deep Tan Skin',
            selected: false
        },
        {
            color: images.darkSkin,
            title: 'Dark Skin',
            selected: false
        },
        {
            color: images.veryDarkSkin,
            title: 'Very Dark Skin',
            selected: false
        },
    ])

    const imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                Alert(res.customButton);
            } else {
                console.log(res.assets[0]);
                const img = res.assets[0];
                setProductImage(img);
            }
        });
    };

    const cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, res => {
            // console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                Alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                console.log('response--->', res.assets[0]);
                const img = res.assets[0];
                setProductImage(img);
            }
        });
    };

    const selectShade = (index) => {
        const updatedShades = shades.map((shade, i) => {
            if (i === index) {
                return { ...shade, selected: true }
            } else {
                return { ...shade, selected: false }
            }
        })
        setShades(updatedShades)
        setSelectedShade(updatedShades[index].title)
    }

    const validateFields = () => {
        if (!productName || !productId || !productDescription || !productImage) {
            setError('*Please fill required fields')
            return false
        }
        else {
            setModalVisible2(true)
            return true
        }

    }

    const handlePress = () => {
        navigation.navigate('SellerHome')
    }


    return (
        <View style={styles.productBakcground}>
            <Text style={styles.heading}>Upload Products</Text>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.body}>
                    <Text style={styles.txtFeildHeading}>Product Name</Text>
                    <TextInput style={styles.textFeildContainer}
                        placeholder="Product Name"
                        placeholderTextColor={colors.gray}
                        onChangeText={setProductName}
                        value={productName}>
                    </TextInput>
                    <Text style={styles.txtFeildHeading}>Product ID</Text>
                    <TextInput style={styles.textFeildContainer}
                        placeholder="Product ID"
                        placeholderTextColor={colors.gray}
                        onChangeText={setProductId}
                        value={productId}>
                    </TextInput>
                    <Text style={styles.txtFeildHeading}>Description</Text>
                    <TextInput style={styles.descriptionTxtField}
                        placeholder="Description"
                        placeholderTextColor={colors.gray}
                        onChangeText={setProductDescription}
                        value={productDescription}
                        multiline={true}
                        numberOfLines={3}>
                    </TextInput>
                    <Text style={styles.txtFeildHeading}>Category</Text>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={styles.textFeildContainer}>
                        <Text style={styles.dropDownTxt}>{selectedCategory.label}</Text>
                        <Image
                            style={styles.downArrow}
                            source={images.dropDown} />
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.dropDownContainer}>
                            {category.map(option => (
                                <TouchableOpacity
                                    key={option.label}
                                    onPress={() => {
                                        setSelectedCategory(option);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.dropDownTxt}>{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Modal>
                    <Text style={styles.txtFeildHeading}>Product Images</Text>
                    <TouchableOpacity style={styles.photoContianer}
                        onPress={() => {
                            Alert.alert(
                                'Choose Image Source',
                                'Select the Image Source',
                                [
                                    {
                                        text: 'Gallery',
                                        onPress: () => imageGalleryLaunch()
                                    },
                                    {
                                        text: 'Camera',
                                        onPress: () => cameraLaunch(),
                                    },
                                    {
                                        text: 'Cancel',
                                        style: 'cancel'
                                    },
                                    { cancelable: true }
                                ]
                            )
                        }}>
                        <Image
                            style={styles.productImg}
                            source={
                                productImage && productImage.uri ? { uri: productImage.uri }
                                    : images.uploadProductImg} />
                    </TouchableOpacity>
                    <Text style={styles.txtFeildHeading}>Shades</Text>
                    <View style={styles.shadesView}>
                        {shades.map((shade, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.shadeContainer}
                                onPress={() => selectShade(index)}>
                                <Image
                                    style={[styles.shadeColor,
                                    shade.selected ? styles.shadeAfterColor : null]}
                                    source={shade.color} />
                                <Text style={styles.shadeTxt}>{shade.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Modal animationType="fade"
                        transparent={true}
                        visible={modalVisible2}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed')
                            setModalVisible2(!modalVisible2)
                        }}>
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContainer}>
                                <Image source={images.Checkmark} />
                                    <Text style={styles.modalTxt1}>Product added successfully</Text>
                                <TouchableOpacity style={styles.modalButton}
                                    onPress={handlePress}>
                                    <Text style={styles.modalBtnTxt}>Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    {error !== "" && <Text style={styles.errorText}>{error}</Text>}
                    <View style={styles.button}>
                        <Button title={'Upload Product'} onPress={validateFields} />
                    </View>



                </View>
            </ScrollView>
        </View>
    )
}