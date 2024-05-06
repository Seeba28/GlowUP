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
    contianerTwo: {
        justifyContent: 'space-evenly',
        marginTop: sizes.screenHeight * 0.2,
        height: sizes.screenHeight * 0.18,
    },
    textFeildContainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBg,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feildText: {
        color: colors.black,
        flex: 1,
        marginStart: sizes.screenWidth * 0.02,
    },
    passwordContainer: {
        flexDirection: 'row'
    },
    errorText: {
        color: colors.error,
        marginStart: sizes.screenWidth * 0.05
    },
    buttonView:{
        marginTop:sizes.screenHeight* 0.26
      }
})