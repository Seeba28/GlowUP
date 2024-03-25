import { colors } from "../../../services/utilities/colors"
import { fontSize } from "../../../services/utilities/fonts"
import { sizes } from "../../../services/utilities/sizes"

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    topContainer: {
        marginTop: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        width: sizes.screenWidth * 0.61,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backArrow: {
        paddingStart: sizes.screenWidth * 0.05,
    },
    heading: {
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
    },
    scrollContainer:{
        marginTop:sizes.screenHeight* 0.02,
        marginBottom:sizes.screenHeight* 0.02,
    },
    body: {
        paddingVertical: sizes.screenHeight * 0.01,
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
        // justifyContent: 'space-between'
    },
    productImage: {
        width: sizes.screenWidth * 0.3,
        height: sizes.screenHeight * 0.11,
        backgroundColor: colors.darkPurple,
        borderRadius: sizes.screenWidth * 0.03,
    },
    flexColumn: {
        flexDirection: 'column',
        height: sizes.screenHeight * 0.09,
        justifyContent: 'space-between',
        width: sizes.screenWidth * 0.25,
        marginStart:sizes.screenWidth* 0.03
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
})