import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";

export const styles = StyleSheet.create({
container:{
    backgroundColor:colors.lightPurple,
    alignItems:'center',
    justifyContent:'center',
    width:sizes.screenWidth * 0.12,
    height:sizes.screenHeight* 0.06,
    borderRadius:sizes.screenWidth *0.3
}
})