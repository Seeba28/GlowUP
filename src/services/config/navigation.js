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
import AllProducts from "../../screens/user/allProducts";
import CheckOut from "../../screens/user/CheckOut";
import Shipping from "../../screens/user/Shipping";
import UserProfile from "../../screens/user/UserProfile";
import Rewards from "../../screens/user/Rewards";
import SellerProducts from "../../screens/ProductSeller/SellerProducts";
import UploadProducts from "../../screens/ProductSeller/UploadProducts";
import SelectRole from "../../screens/SelectRole";
import SellerHome from "../../screens/ProductSeller/SellerHome";
import AllServices from "../../screens/user/AllServices";
import Ratings from "../../screens/user/Ratings";
import SalonDetails from "../../screens/user/SalonDetails";
import UserReview from "../../screens/user/UserReview";
import AppointmentBooking from "../../screens/user/AppointmentBooking";
import EditProfile from "../../screens/user/EditProfile";
import UserSecurity from "../../screens/user/UserSecurity";
import UserNotification from "../../screens/user/UserNotification";
import UserHistory from "../../screens/user/UserHistory";
import SellerNotification from "../../screens/ProductSeller/SellerNotification";
import SellerProfile from "../../screens/ProductSeller/SellerProfile";
import SellerEditProfile from "../../screens/ProductSeller/SellerEditProfile";
import SellerSecurity from "../../screens/ProductSeller/SellerSecurity";
import navigationService from "./navigationService";
import SellerSignIn from "../../screens/ProductSeller/SellerSignIn";
import SellerSignUp from "../../screens/ProductSeller/SellerSignUp";
import SellerResetPassword from "../../screens/ProductSeller/SellerResetPassword";
import SellerForgotPassword from "../../screens/ProductSeller/SellerForgotPassword";
import SellerProfilePicture from "../../screens/ProductSeller/SellerProfilePicture";
import SellerOTP from "../../screens/ProductSeller/SellerOTP";
import AppointmentBookingDetail from "../../screens/user/AppointmentBookingDetail";
import SalonSignIn from "../../screens/Salon/SalonSignIn";
import ServiceSignIn from "../../screens/ServiceProvider/ServiceSignIn";
import ServiceSignUp from "../../screens/ServiceProvider/ServiceSignUp";
import SalonSignUp from "../../screens/Salon/SalonSignUp";
import SalonForgotPassword from "../../screens/Salon/SalonForgotPassword";
import ServiceForgotPassword from "../../screens/ServiceProvider/ServiceForgotPassword";
import SalonOTP from "../../screens/Salon/SalonOTP";
import ServiceOTP from "../../screens/ServiceProvider/ServiceOTP";
import ServiceProfilePicture from "../../screens/ServiceProvider/ServiceProfilePicture";
import SalonProfilePicture from "../../screens/Salon/SalonProfilePicture";
import ServiceResetPassword from "../../screens/ServiceProvider/ServiceResetPassword";
import SalonResetPassword from "../../screens/Salon/SalonResetPassword";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer
        ref={ref => navigationService.setTopLevelNavigator(ref)}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="UserStack" component={UserStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SelectRole" component={SelectRole} />
            <Stack.Screen name="SellerProfilePicture" component={SellerProfilePicture} />
            <Stack.Screen name="SellerSignUp" component={SellerSignUp} />
            <Stack.Screen name="SellerSignIn" component={SellerSignIn} />
            <Stack.Screen name="SellerOTP" component={SellerOTP} />
            <Stack.Screen name="SellerForgotPassword" component={SellerForgotPassword} />
            <Stack.Screen name="SellerResetPassword" component={SellerResetPassword} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OTPPassword" component={OTPPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="UserHome" component={UserHome} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            <Stack.Screen name="Shipping" component={Shipping} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="Rewards" component={Rewards} />
            <Stack.Screen name="AllServices" component={AllServices} />
            <Stack.Screen name="Ratings" component={Ratings}/>
            <Stack.Screen name="SalonDetails" component={SalonDetails}/>
            <Stack.Screen name="UserReview" component={UserReview}/>
            <Stack.Screen name="AppointmentBooking" component={AppointmentBooking}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="UserSecurity" component={UserSecurity}/>
            <Stack.Screen name="UserNotification" component={UserNotification}/>
            <Stack.Screen name="UserHistory" component={UserHistory}/>
            <Stack.Screen name="SellerHome" component={SellerHome} />
            <Stack.Screen name="UploadProducts" component={UploadProducts} />
            <Stack.Screen name="SellerProducts" component={SellerProducts} />
            <Stack.Screen name="SellerNotification" component={SellerNotification} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="SellerEditProfile" component={SellerEditProfile} />
            <Stack.Screen name="SellerSecurity" component={SellerSecurity} />
            <Stack.Screen name="AppointmentBookingDetail" component={AppointmentBookingDetail} />
            <Stack.Screen name="SalonSignIn" component={SalonSignIn} />
            <Stack.Screen name="ServiceSignIn" component={ServiceSignIn} />
            <Stack.Screen name="ServiceSignUp" component={ServiceSignUp} />
            <Stack.Screen name="SalonSignUp" component={SalonSignUp} />
            <Stack.Screen name="SalonForgotPassword" component={SalonForgotPassword} />
            <Stack.Screen name="ServiceForgotPassword" component={ServiceForgotPassword} />
            <Stack.Screen name="SalonOTP" component={SalonOTP} />
            <Stack.Screen name="ServiceOTP" component={ServiceOTP} />
            <Stack.Screen name="ServiceProfilePicture" component={ServiceProfilePicture} />
            <Stack.Screen name="SalonProfilePicture" component={SalonProfilePicture} />
            <Stack.Screen name="ServiceResetPassword" component={ServiceResetPassword} />
            <Stack.Screen name="SalonResetPassword" component={SalonResetPassword} />



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

