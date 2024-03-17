import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    homeBackgroud: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    backArrow: {
        marginTop: sizes.screenHeight * 0.04,
        paddingStart: sizes.screenWidth * 0.05,
    },
    headText: {
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.h4,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center'
    },
    subHeading: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.darkGray,
        fontSize: fontSize.medium,
        fontWeight: '400',
        textAlign: 'center',
        alignSelf: 'center',
        width: sizes.screenWidth * 0.55
    },
    textFeildContainer: {
        marginTop: sizes.screenHeight * 0.1,
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
    errorText: {
        color: colors.error,
        marginStart: sizes.screenWidth * 0.05
    },
    buttonContainer:{
        marginTop:sizes.screenHeight* 0.2
    }
})