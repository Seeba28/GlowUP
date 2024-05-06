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
    profile: {
        marginTop:sizes.screenHeight* 0.04,
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.27,
        borderRadius: sizes.screenWidth * 0.3,
        resizeMode: 'contain',
        alignSelf:'center'
    },
    contianerTwo: {
        justifyContent: 'space-evenly',
        marginTop: sizes.screenHeight * 0.05,
        height: sizes.screenHeight * 0.32,

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
    containerThree: {
        marginTop: sizes.screenHeight * 0.1,
        height:sizes.screenHeight* 0.3,
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    continueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueTxt: {
        color: colors.black,
        alignSelf:'center',
        fontWeight:'500'
    },
    line:{
        color:colors.darkPurple,
        width:sizes.screenWidth* 0.3,
        // height:sizes.screenHeight * 0.01,
    },
    otherButton:{
        backgroundColor: colors.background,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent:'center',
        alignItems:'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius:sizes.screenWidth * 0.035,
        borderColor:colors.black,
        borderWidth:sizes.screenWidth*0.003,
        flexDirection:'row'
    },
      signUpBtnText:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500'
      },
      googleBtnText:{
        marginStart:sizes.screenWidth* 0.02,
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'bold'
      },
      googleBtn:{
        flexDirection:'row'
      },
      errorText:{
        color:colors.error,
        marginStart:sizes.screenWidth*0.05
      },
      buttonView:{
        marginTop:sizes.screenHeight* 0.26
      }

})