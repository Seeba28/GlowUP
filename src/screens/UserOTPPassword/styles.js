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
        width: sizes.screenWidth * 0.75,
    },
    codeFieldContainer: {
        marginVertical: sizes.screenHeight * 0.1,
    },
    codeFieldRoot: {
        width: sizes.screenWidth * 0.75,
        alignSelf: 'center',
    },
    cell: {
        width: sizes.screenWidth * 0.16,
        height: sizes.screenHeight * 0.08,
        lineHeight: sizes.screenHeight * 0.08,
        fontSize: fontSize.h4,
        borderWidth: sizes.screenWidth * 0.002,
        borderColor: colors.gray,
        textAlign: 'center',
        color: colors.black,
        borderRadius: 10,
    },
    focusCell: {
        width: sizes.screenWidth * 0.16,
        height: sizes.screenHeight * 0.08,
        lineHeight: sizes.screenHeight * 0.08,
        fontSize: fontSize.h4,
        borderWidth: 1,
        borderColor: colors.black,
        textAlign: 'center',
        color: colors.black,
        borderRadius: 10,
    },
    otpTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    containerTwo: {
        flexDirection: 'row',
        alignSelf:'center'
    },
    colortxt: {
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '400',
        textAlign: 'center',
        alignSelf: 'center',
    },
    resendTxt: {
        color: colors.darkPurple,
        fontSize: fontSize.medium,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonContainer:{
        marginTop:sizes.screenHeight* 0.2
    },
    errorText:{
        color:colors.error,
        alignSelf:'center',
        bottom:sizes.screenHeight* 0.05,
      }
})