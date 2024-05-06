import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    serviceBackgroud: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    topContainer: {
        marginTop: sizes.screenHeight * 0.05,
        alignItems: 'center',
    },
    serviceText: {
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
    },
    contianerTwo: {
        marginTop: sizes.screenHeight * 0.07,
        flexDirection: 'row',
        paddingHorizontal: sizes.screenWidth * 0.06,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileDetailRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameTxt: {
        fontWeight: 'bold',
        color: colors.black,
        fontSize: fontSize.medium
    },
    emailTxt: {
        fontWeight: '400',
        color: colors.gray,
        fontSize: fontSize.smallM
    },
    marginStart: {
        marginStart: sizes.screenWidth * 0.02
    },
    signOutContianer: {
        alignSelf: 'flex-end',
        height: sizes.screenHeight * 0.05,
        width: sizes.screenWidth * 0.08,
        resizeMode: 'center'
    },
    containerThree: {
        marginTop: sizes.screenHeight * 0.07,
        alignItems: 'center',
        paddingHorizontal: sizes.screenWidth * 0.06,
    },
    feildsContianer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:sizes.screenWidth* 0.85,
        marginBottom:sizes.screenHeight* 0.04,
    },
    feilds: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    feildsName: {
        fontSize: fontSize.medium,
        marginStart: sizes.screenWidth * 0.03,
        color: colors.black,
        fontWeight: '400'
    },
    next:{
        height: sizes.screenHeight * 0.015,
        width: sizes.screenWidth * 0.03,
        resizeMode: 'contain',
    }


})