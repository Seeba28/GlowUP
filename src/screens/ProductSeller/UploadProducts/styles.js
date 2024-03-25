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
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.03,
        marginBottom: sizes.screenHeight * 0.02,
    },
    body: {
        paddingHorizontal: sizes.screenWidth * 0.06,
        alignItems: 'center',
    },
    txtFeildHeading: {
        alignSelf: 'flex-start',
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
    },
    textFeildContainer: {
        marginTop: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.04,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.9,
        backgroundColor: colors.lightGray,
        borderRadius: sizes.screenWidth * 0.02,
        alignItems: 'center',
        marginBottom: sizes.screenHeight * 0.02,
        color: colors.black,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionTxtField: {
        marginTop: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.04,
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.9,
        backgroundColor: colors.lightGray,
        borderRadius: sizes.screenWidth * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
        color: colors.black,
        flex: 1,
        textAlignVertical: 'top'
    },
    dropDownView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dropDownContainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        paddingVertical: sizes.screenHeight * 0.015,
        marginTop: sizes.screenHeight * 0.66,
        height: sizes.screenHeight * 0.16,
        width: sizes.screenWidth * 0.9,
        backgroundColor: colors.lightGray,
        borderRadius: sizes.screenWidth * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
        color: colors.black,
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderColor: colors.gray,
        borderWidth: sizes.screenWidth * 0.002,
    },
    dropDownTxt: {
        color: colors.black
    },
    downArrow: {
        height: sizes.screenHeight * 0.01,
        width: sizes.screenWidth * 0.04,
    },
    shadesView: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        marginTop: sizes.screenHeight * 0.01,
        height: sizes.screenHeight * 0.25,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    photoContianer: {
        marginTop: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.04,
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.9,
        backgroundColor: colors.lightGray,
        borderRadius: sizes.screenWidth * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
        alignItems: 'center'
    },
    productImg: {
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.02,
    },
    shadeColor: {
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.13,
        borderRadius: sizes.screenWidth * 0.15,

    },
    shadeAfterColor: {
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.13,
        borderRadius: sizes.screenWidth * 0.15,
        borderWidth: sizes.screenWidth * 0.008,
        borderColor: colors.darkPurple,
    },
    shadeTxt: {
        marginTop: sizes.screenHeight * 0.005,
        color: colors.black,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        textAlign: 'center',

    },
    shadeContainer: {
        height: sizes.screenHeight * 0.12,
        width: sizes.screenWidth * 0.2,
        alignItems: 'center',
        marginBottom: sizes.screenHeight * 0.02
    },
    button: {
        marginTop: sizes.screenHeight * 0.03
    },
    errorText: {
        color: colors.error,
        marginStart: sizes.screenWidth * 0.07,
        marginTop: sizes.screenHeight * 0.01
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: colors.modalOverlay,
        justifyContent: 'center',
        alignItems: "center"
    },
    modalContainer: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        width: sizes.screenWidth * 0.6,
        borderRadius: sizes.screenWidth * 0.06,
        alignItems: 'center',
        paddingVertical: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.07,
        alignSelf: 'center',
        height:sizes.screenHeight* 0.3
    },
    modalTxt1: {
        marginTop: sizes.screenHeight * 0.02,
        color: colors.black,
        fontSize: fontSize.medium,
        alignSelf: 'center',
        fontWeight: '500',
        lineHeight:sizes.screenHeight* 0.03,
        textAlign:'center'
    },
    modalTxt2: {
        marginTop: sizes.screenHeight * 0.02,
        color: colors.darkPurple,
        fontSize: fontSize.medium,
        alignSelf: 'center',
        fontWeight:'500',
        lineHeight:sizes.screenHeight* 0.03
    },
    modalButton: {
        marginTop:sizes.screenHeight* 0.04,
        backgroundColor: colors.darkPurple,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.4,
        borderRadius: sizes.screenWidth * 0.04,
        
    },
    modalBtnTxt: {
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: '500'
    },
})