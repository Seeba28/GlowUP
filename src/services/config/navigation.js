import { NavigationContainer } from "@react-navigation/native";
import UserHome from "../../screens/user/userHome";
import ProductDetails from "../../screens/user/productDetails";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="UserHome" component={UserHome}/>
                <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

