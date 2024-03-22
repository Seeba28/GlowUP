import { NavigationContainer } from "@react-navigation/native";
import UserHome from "../../screens/user/userHome";
import ProductDetails from "../../screens/user/productDetails";
import Products from "../../screens/user/products";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import ForgotPassword from "../../screens/ForgotPassword";
import OTPPassword from "../../screens/OTPPassword";
import ResetPassword from "../../screens/ResetPassword";
import ProfilePicture from "../../screens/ProfilePicture";
import Cart from "../../screens/user/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../utilities/colors";
import { sizes } from "../utilities/sizes";
import { Screen } from "react-native-screens";
import { Image } from "react-native";
import { images } from "../utilities/images";
import Services from "../../screens/user/services";
import { useEffect, useState } from "react";
import AllProducts from "../../screens/user/allProducts";
import CheckOut from "../../screens/user/CheckOut";
import Shipping from "../../screens/user/Shipping";
import UserProfile from "../../screens/user/UserProfile";
import Rewards from "../../screens/user/Rewards";
import SellerProducts from "../../screens/ProductSeller/SellerProducts";
import UploadProducts from "../../screens/ProductSeller/UploadProducts";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProductSellerStack" component={ProductSellerStack} />
                {/* <Stack.Screen name="UserStack" component={UserStack} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OTPPassword" component={OTPPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
            <Stack.Screen name="UserHome" component={UserHome} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
            <Stack.Screen name="CheckOut" component={CheckOut}/>
            <Stack.Screen name="Shipping" component={Shipping}/>
            <Stack.Screen name="UserProfile" component={UserProfile}/>
            <Stack.Screen name="Rewards" component={Rewards}/>
        </Stack.Navigator>
    )
}

const ProductSellerStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UploadProducts" component={UploadProducts} />
            <Stack.Screen name="SellerProducts" component={SellerProducts} />
        </Stack.Navigator>
    )
}

const MyTabs = () => {
    // const [keyboardOpen, setKeyboardOpen] = useState(false);
    // useEffect(() => {
    //     const keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         () => {
    //             console.log('Keyboard is open');
    //             setKeyboardOpen(true);
    //         },
    //     );

    //     const keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         () => {
    //             console.log('Keyboard is closed');
    //             setKeyboardOpen(false);
    //         },
    //     );
    // }, []);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    height: sizes.screenHeight * 0.09,
                    borderTopLeftRadius: sizes.screenWidth * 0.09,
                    borderTopRightRadius: sizes.screenWidth * 0.09,
                    position: 'absolute',
                    
                },
            }}>
            <Tab.Screen
                name="UserHome"
                component={UserHome}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image source={images.homeTabAfter}
                            />
                        ) : (
                            <Image source={images.homeTab} />
                        )
                }} />

            <Tab.Screen
                name="Services"
                component={Services}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image source={images.serviceTabAfter}
                            />
                        ) : (
                            <Image source={images.servicesTab} />
                        )
                }} />

            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image source={images.productTabAfter}
                            />
                        ) : (
                            <Image source={images.productTab} />
                        )
                }} />

            <Tab.Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image source={images.profileTabAfter}
                            />
                        ) : (
                            <Image source={images.profileTab} />
                        )
                }} />
        </Tab.Navigator>
    )
}

