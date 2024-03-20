import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    backArrow: {
        marginTop: sizes.screenHeight * 0.03,
        paddingStart: sizes.screenWidth * 0.05,
    },
    containerHeading: {
        marginTop: sizes.screenHeight * 0.02,
        paddingStart: sizes.screenWidth * 0.05,
    },
    headingOne: {
        color: colors.darkPurple,
        fontWeight: '500',
        fontSize: fontSize.h5
    },
    headingTwo: {
        color: colors.black,
        fontSize: fontSize.medium,
    },
    headingThree: {
        color: colors.darkPurple,
        fontWeight: '500',
        fontSize: fontSize.medium,
        marginTop: sizes.screenHeight * 0.02
    },
    headingFour: {
        marginTop:sizes.screenHeight* 0.01,
        color: colors.textColor,
        fontSize: fontSize.extraLarge,
        fontWeight: '600'
    },
    inputFieldTxt: {
        color: colors.darkPurple,
        fontWeight: '500',
        fontSize: fontSize.smallM
    },
    textFeildContainer: {
        marginTop: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.01,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBg,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.04,
        justifyContent: 'space-between'
    },
    textInputContainer: {
        marginTop: sizes.screenHeight * 0.01,
        height: sizes.screenHeight * 0.05,
        color: colors.black,
    },
    paymentContainer: {
        marginTop: sizes.screenHeight * 0.01,
        flexDirection: 'row',
        alignItems: 'center'
    },
    paymentTxt: {
        color: colors.black,
        fontSize: fontSize.medium,
        marginStart: sizes.screenWidth * 0.02,
        fontWeight: '500'
    },
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
    },
    body: {
        paddingVertical: sizes.screenHeight * 0.01,
    },
    textFeildContainerItem: {
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.01,
        // height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.91,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productImage: {
        width: sizes.screenWidth * 0.24,
        height: sizes.screenHeight * 0.11,
        backgroundColor: colors.darkPurple,
        borderRadius: sizes.screenWidth * 0.03,
    },
    flexColumn: {
        flexDirection: 'column',
        height: sizes.screenHeight * 0.09,
        justifyContent: 'space-between',
        width: sizes.screenWidth * 0.25,
        marginStart: sizes.screenWidth * 0.02
    },
    itemName: {
        fontSize: fontSize.large,
        color: colors.textColor,
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: fontSize.medium,
        color: colors.textColor,
        fontWeight: '500'
    },
    flexRow: {
        flexDirection: 'row',
        width: sizes.screenWidth * 0.25,
        height: sizes.screenHeight * 0.05,
        alignItems: 'center',
        marginStart: sizes.screenWidth * 0.2,
        marginTop: sizes.screenHeight * 0.06
    },
    bottomContainer: {
        height: sizes.screenHeight * 0.13,
        backgroundColor: colors.mediumPurple,
        alignItems: 'center',
        paddingHorizontal: sizes.screenWidth * 0.08,
        flexDirection: 'row'
    },
    buttonContainer: {
        backgroundColor: colors.darkPurple,
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes.screenWidth * 0.035,
        marginStart:sizes.screenWidth * 0.18
    },
    buttonText: {
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: '500'
    }



})