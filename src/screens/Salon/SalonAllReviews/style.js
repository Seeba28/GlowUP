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
        width: sizes.screenWidth * 0.64,
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
    optionBottomContainerThree:{
        marginTop:sizes.screenHeight * 0.04,
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05,
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
    }
})