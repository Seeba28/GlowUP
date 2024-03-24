import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.white,
        height: sizes.screenHeight
    },
    heading: {
        color: colors.black,
        fontSize: fontSize.h4,
        fontWeight: '600',
    },
    topRowContainer: {
        paddingHorizontal: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.01,
        marginBottom: sizes.screenHeight * 0.02,
    },
    subHeadingOne: {
        marginTop: sizes.screenHeight * 0.05,
        marginStart: sizes.screenWidth * 0.06,
        alignSelf: 'flex-start',
        color: colors.gray,
        fontSize: fontSize.medium,
        fontWeight: '400',
    },
    subHeadingTwo: {
        marginTop: sizes.screenHeight * 0.02,
        marginStart: sizes.screenWidth * 0.06,
        alignSelf: 'flex-start',
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '400',
    },
    subHeadingThree: {
        marginStart: sizes.screenWidth * 0.06,
        alignSelf: 'flex-start',
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: 'bold',
    },
    optionView: {
        // marginBottom:sizes.screenHeight* 0.1,
        marginTop: sizes.screenHeight * 0.01,
        height: sizes.screenHeight * 0.1,
        width: sizes.screenWidth * 0.9,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    optionSquare: {
        height: sizes.screenHeight * 0.12,
        width: sizes.screenWidth * 0.16,
        alignItems: 'center',

    },
    optioneTxt: {
        marginTop: sizes.screenHeight * 0.005,
        color: colors.black,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        textAlign: 'center',
    },
    optioneTxtAfter: {
        marginTop: sizes.screenHeight * 0.005,
        color: colors.darkPurple,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        textAlign: 'center',
    },
    navigateContainer: {
        marginTop: sizes.screenHeight * 0.03,
        height: sizes.screenHeight * 0.32,
    },
    roleContainer: {
        marginTop: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.03,
        backgroundColor: colors.textFeildBg2,
        width: sizes.screenWidth * 0.88,
        height: sizes.screenHeight * 0.12,
        borderRadius: sizes.screenWidth * 0.04,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconSquareBefore: {
        width: sizes.screenWidth * 0.21,
        height: sizes.screenHeight * 0.09,
        backgroundColor: colors.puprleOpacity,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.screenWidth * 0.02
    },
    iconImage: {
        width: sizes.screenWidth * 0.21,
        height: sizes.screenHeight * 0.09
    },
    marginStart: {
        marginStart: sizes.screenWidth * 0.02
    },
    headingOne: {
        fontSize: fontSize.medium,
        color: colors.black,
        fontWeight: '600',
        alignSelf: 'flex-start'
    },
    headigTwo: {
        fontSize: fontSize.smallM,
        color: colors.gray,
        fontWeight: '400'
    }

})