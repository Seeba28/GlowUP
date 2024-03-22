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
    containerOne: {
        marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.04,
        backgroundColor: colors.textFeildBG3,
        width: sizes.screenWidth * 0.88,
        height: sizes.screenHeight * 0.1,
        borderRadius: sizes.screenWidth * 0.04,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    starImage: {
        height: sizes.screenHeight * 0.05,
        width: sizes.screenWidth * 0.07
    },
    headingOne: {
        fontSize: fontSize.large,
        color: colors.black,
        fontWeight: '600',
        alignSelf: 'flex-start'
    },
    headigTwo: {
        fontSize: fontSize.smallM,
        color: colors.gray,
        fontWeight: '400'
    },
    marginStart: {
        marginStart: sizes.screenWidth * 0.02
    },
    buttonContainer: {
        backgroundColor: colors.redemPurple,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes.screenWidth * 0.04,
    },
    buttonText: {
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerTwo: {
        marginHorizontal: sizes.screenWidth * 0.07,
        marginTop: sizes.screenHeight * 0.05,
        alignItems: 'center'
    },
    rewardsRow: {
        marginTop: sizes.screenHeight * 0.015,
        width: sizes.screenWidth * 0.86,
        height: sizes.screenHeight * 0.08,
        borderRadius: sizes.screenWidth * 0.02,
        backgroundColor: colors.textFeildBG3,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.02,
        flexDirection: 'row'
    },
    rewardDetail: {
        fontSize: fontSize.smallM,
        color: colors.black,
        fontWeight: '400',
        marginStart: sizes.screenWidth * 0.01
    },
    rewardButton: {
        color: colors.rewardTxtBtn,
        fontSize: fontSize.smallM
    },
    scrollContainer: {
        marginBottom: sizes.screenHeight * 0.02,
    },
    modalContainer: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        width: sizes.screenWidth,
        borderTopRightRadius: sizes.screenWidth * 0.06,
        borderTopLeftRadius: sizes.screenWidth * 0.06,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        paddingVertical: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.07
    },
    modalImage: {
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.14,
    },
    modalHeadingOne: {
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.large,
        alignSelf: 'flex-start',
        fontWeight: '400'
    },
    modalHeadingTwo: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.gray,
        fontSize: fontSize.smallM,
        alignSelf: 'flex-start',
        fontWeight: '600',
    },
    modalButton: {
        marginTop:sizes.screenHeight* 0.04,
        backgroundColor: colors.darkPurple,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.76,
        borderRadius: sizes.screenWidth * 0.04,
    },
    modalBtnTxt: {
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: '500'
    },
    availableTxt:{
        marginTop: sizes.screenHeight * 0.02,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: 'bold',
        textAlign:'center'
    },
    modalOverlay:{
        flex:1,
        backgroundColor: colors.modalOverlay,
        justifyContent:'center',
        alignItems:"center"
    }

})