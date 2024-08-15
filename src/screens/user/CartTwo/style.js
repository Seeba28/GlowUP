import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    topContainer: {
        marginTop: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        width: sizes.screenWidth * 0.56,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backArrow: {
        paddingStart: sizes.screenWidth * 0.05,
    },
    body: {
        paddingVertical: sizes.screenHeight * 0.01,
    },
    heading: {
        color: colors.darkPurple,
        fontSize: fontSize.h5,
        fontWeight: '500',
        textAlign: 'center',
    },
    textFeildContainer: {
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.01,
        // height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.lightPurple,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexColumn: {
        flexDirection: 'column',
        height: sizes.screenHeight * 0.09,
        justifyContent: 'space-between',
        width: sizes.screenWidth * 0.25,
    },
    flexRow: {
        flexDirection: 'row',
        width: sizes.screenWidth * 0.25,
        height: sizes.screenHeight * 0.05,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginEnd: sizes.screenWidth * 0.01,
        marginTop: sizes.screenHeight * 0.05
    },
    productImage: {
        width: sizes.screenWidth * 0.3,
        height: sizes.screenHeight * 0.11,
        backgroundColor: colors.darkPurple,
        borderRadius: sizes.screenWidth * 0.03,
    },
    itemName: {
        fontSize: fontSize.large,
        color: colors.textColor,
        fontWeight: '500',
    },
    itemPrice: {
        fontSize: fontSize.medium,
        color: colors.textColor,
        fontWeight: '500'
    },
    feildContainer: {
        paddingHorizontal: sizes.screenWidth * 0.02,
        height: sizes.screenHeight * 0.215,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBg,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.04,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom:sizes.screenHeight* 0.02
        
    },
    feildRow1: {
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.91,
        paddingHorizontal: sizes.screenWidth * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: sizes.screenWidth * 0.001,
        borderBottomColor: colors.lineOpacity,
    },
    feildRow2: {
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.91,
        paddingHorizontal: sizes.screenWidth * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    fieldTxt: {
        fontSize: fontSize.large,
        color: colors.text,
        fontWeight: '500'
    },
    buttonTop:{
        marginBottom:sizes.screenHeight* 0.03
    },
    scrollContainer:{
        marginTop:sizes.screenHeight* 0.02,
        marginBottom:sizes.screenHeight* 0.02,
    }

    

})