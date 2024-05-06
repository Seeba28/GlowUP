import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    homeBackgroud: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    headText: {
        marginTop: sizes.screenHeight * 0.1,
        color: colors.black,
        fontSize: fontSize.h4,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center'
    },
    picContainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        marginTop: sizes.screenHeight * 0.04,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: sizes.screenWidth * 0.913,
        height: sizes.screenHeight * 0.221,
    },
    takePicBtn: {
        marginTop: sizes.screenHeight * 0.1,
        backgroundColor: colors.background,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.035,
        borderColor: colors.black,
        borderWidth: sizes.screenWidth * 0.003,
        flexDirection: 'row'
    },
    takePicBtnText: {
        marginStart: sizes.screenWidth * 0.02,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500'
    },

    uploadPicBtn:{
        marginTop:sizes.screenHeight* 0.03,
        backgroundColor: colors.darkPurple,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent:'center',
        alignItems:'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius:sizes.screenWidth * 0.035,
        flexDirection:'row',
    },
      uploadPicBtnText:{
        marginStart:sizes.screenWidth* 0.02,
        color:colors.white,
        fontSize:fontSize.medium,
        fontWeight:'500'
      },
      profileImage:{
        width: sizes.screenWidth * 0.913,
        height: sizes.screenHeight * 0.221,
        borderRadius:sizes.screenWidth * 0.04,

      },
     
    
    
    
})