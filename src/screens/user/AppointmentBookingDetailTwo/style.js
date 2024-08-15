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
        width: sizes.screenWidth * 0.7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backArrow: {
        paddingStart: sizes.screenWidth * 0.05,
    },
    heading: {
        marginStart: sizes.screenWidth * 0.17,
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
    },
    bodyContainer: {
        marginTop: sizes.screenHeight * 0.04,
        marginHorizontal: sizes.screenWidth * 0.05
    },
    bodyHeading: {
        color: colors.gray,
        marginTop: sizes.screenHeight * 0.02,
        fontSize:fontSize.smallM,
        fontWeight:'500'
    },
    subHeading:{
        color: colors.black,
        marginTop: sizes.screenHeight * 0.01,
        fontSize:fontSize.medium,
    },
    subHeading2: {
        color: colors.black,
        marginTop: sizes.screenHeight * 0.01,
        fontSize:fontSize.medium,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:sizes.screenHeight* 0.02,
        justifyContent:'space-between'
    },
    bodyHeading2: {
        color: colors.gray,
        fontSize:fontSize.medium,
        fontWeight:'500'
    },
    subHeading3: {
        color: colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500'
    },
    line:{
        marginTop:sizes.screenHeight* 0.02,
        borderBottomColor:colors.lightGray,
        borderBottomWidth:sizes.screenHeight* 0.002,
    },
    buttonTop:{
        marginTop:sizes.screenHeight* 0.45,
        alignSelf:'center'
    },
})