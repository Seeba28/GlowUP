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
        fontSize: fontSize.extraLarge,
        fontWeight: '600',
        marginStart: sizes.screenWidth * 0.02
    },
    topRowContainer: {
        marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
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
        fontWeight: '500',
    },
    subHeadingThree: {
        marginStart: sizes.screenWidth * 0.06,
        alignSelf: 'flex-start',
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: 'bold',
    },
    optionView: {
        marginBottom: sizes.screenHeight * 0.02,
        marginTop: sizes.screenHeight * 0.03,
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
        marginTop: sizes.screenHeight * 0.01,
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
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.145,
        height: sizes.screenHeight * 0.07,
        borderRadius: sizes.screenWidth * 0.7,
        borderWidth: sizes.screenWidth * 0.002
    },
    profileImg: {
        width: sizes.screenWidth * 0.05,
        height: sizes.screenHeight * 0.04,
        borderRadius: sizes.screenWidth * 0.7,
        resizeMode:'cover'
    },
    margin: {
        marginStart: sizes.screenWidth * 0.39
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
        marginTop: sizes.screenHeight * 0.01,
        color: colors.gray,
        fontSize: fontSize.medium,
        alignSelf: 'center',
        fontWeight: '500',
        textAlign:'center',
        width:sizes.screenWidth * 0.3,
    },
    modalTxt2: {
        marginTop: sizes.screenHeight * 0.02,
        color: colors.darkPurple,
        fontSize: fontSize.medium,
        alignSelf: 'center',
        fontWeight:'600',
        lineHeight:sizes.screenHeight* 0.03
    },
    modalTxt3: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.gray,
        fontSize: fontSize.medium,
        alignSelf: 'center',
        fontWeight: '500',
        textAlign:'center',
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
    reviewRow:{
        paddingVertical:sizes.screenHeight* 0.01,
        paddingHorizontal:sizes.screenWidth* 0.02,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:sizes.screenWidth* 0.02,
        backgroundColor:colors.puprleOpacity,
        marginBottom:sizes.screenHeight* 0.02
    },
    profileCircle:{
        height:sizes.screenHeight* 0.06,
        width:sizes.screenWidth* 0.12,
        borderRadius:sizes.screenWidth* 0.1,
    },
    reviewName:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500'
    },
    reviewTxt:{
        color:colors.black,
        fontSize:fontSize.smallM,
    },
    reviewCOlumn:{
        marginStart:sizes.screenHeight* 0.02
    },
    optionBottomContainerThree:{
        // marginTop:sizes.screenHeight * 0.04,
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05,
    }

})