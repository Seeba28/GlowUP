import { NavigationContainer } from "@react-navigation/native";
import UserHome from "../../screens/user/userHome";
import ProductDetails from "../../screens/user/productDetails";
import Products from "../../screens/user/products";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import ForgotPassword from "../../screens/ForgotPassword";
import OTPPassword from "../../screens/OTPPassword";
import ResetPassword from "../../screens/ResetPassword";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="OTPPassword" component={OTPPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="UserHome" component={UserHome} />
                <Stack.Screen name="Products" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

