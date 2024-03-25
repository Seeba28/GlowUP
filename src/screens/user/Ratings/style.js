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
        width: sizes.screenWidth * 0.6,
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
    heading2: {
        marginTop: sizes.screenHeight * 0.04,
        color: colors.black,
        fontSize: fontSize.medium,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: sizes.screenHeight * 0.01
    },
    body: {
        marginTop: sizes.screenHeight * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: sizes.screenWidth * 0.05
    },
    profile: {
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.27,
        borderRadius: sizes.screenWidth * 0.3,
        resizeMode: 'contain'
    },
    userName: {
        marginTop: sizes.screenHeight * 0.02,
        color: colors.darkPurple,
        alignSelf: 'center',
        fontSize: fontSize.extraLarge,
        fontWeight: 'bold'
    },
    reviewTxtField: {
        marginTop: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.04,
        height: sizes.screenHeight * 0.2,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.04,
        color: colors.black,
        textAlignVertical: 'top',
        borderWidth:sizes.screenWidth* 0.003,
        borderColor:colors.mediumPurple
    },
    button:{
        marginTop:sizes.screenHeight* 0.17
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
    errorText: {
        color: colors.error,
        marginStart: sizes.screenWidth * 0.07,
        marginTop: sizes.screenHeight * 0.01,
        textAlign:'center',
        lineHeight:sizes.screenHeight* 0.03
    }
})