import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    heading: {
        marginTop: sizes.screenHeight * 0.06,
        paddingStart: sizes.screenWidth * 0.05,
        color: colors.black,
        fontSize: fontSize.h4,
        fontWeight: '600'
    },
    containerOne: {
        paddingHorizontal: sizes.screenWidth * 0.05,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
    },
    productRow: {
        marginTop: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    productBox: {
        height: sizes.screenHeight * 0.22,
        width: sizes.screenWidth * 0.43,
        backgroundColor:colors.lightGray,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:sizes.screenWidth* 0.03,
        marginBottom:sizes.screenHeight* 0.02
    },
    prouctTxt:{
        color:colors.black,
        fontWeight:'500',
        marginTop:sizes.screenHeight* 0.01
    }

})