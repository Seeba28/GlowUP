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
        width: sizes.screenWidth * 0.7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backArrow: {
        paddingStart: sizes.screenWidth * 0.05,
    },
    heading: {
        marginStart: sizes.screenWidth * 0.13,
        color: colors.black,
        fontSize: fontSize.large,
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
    productImageContainer: {
        width: sizes.screenWidth * 0.3,
        height: sizes.screenHeight * 0.11,
        backgroundColor: colors.puprleOpacity,
        borderRadius: sizes.screenWidth * 0.03,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productImage: {
        width: sizes.screenWidth * 0.2,
        height: sizes.screenHeight * 0.07,
        resizeMode: 'contain',
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


    buttonTop: {
        marginBottom: sizes.screenHeight * 0.03
    },
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
    },
    body: {
        paddingVertical: sizes.screenHeight * 0.01,
    },
    grayHeading1: {
        color: colors.gray,
        fontWeight: '500',
        marginHorizontal: sizes.screenWidth * 0.05,
        marginTop: sizes.screenHeight * 0.02,
    },
    timingView: {
        marginHorizontal: sizes.screenWidth * 0.05,
        marginTop: sizes.screenHeight * 0.01,
        marginBottom: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    availableTimeHeading: {
        color: colors.gray,
        fontWeight: '500',
        paddingHorizontal: sizes.screenWidth * 0.05,
        marginTop:sizes.screenHeight* 0.02
    },
    timingViewRow: {
        flexDirection: 'row',
        marginTop: sizes.screenHeight * 0.01,
        justifyContent: 'space-between',

    },
    timingNotSelected: {
        backgroundColor:colors.textFeildBG3,
        paddingHorizontal: sizes.screenWidth * 0.055,
        paddingVertical: sizes.screenHeight * 0.015,
        borderRadius: sizes.screenWidth * 0.06
    },
    timingSelected: {
        backgroundColor: colors.selectedPurple,
        paddingHorizontal: sizes.screenWidth * 0.055,
        paddingVertical: sizes.screenHeight * 0.015,
        borderRadius: sizes.screenWidth * 0.06

    },
    timingTextColor: {
        color: colors.black
    }

})