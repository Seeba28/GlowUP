import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    thankuImage: {
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.06
    },
    thankuTxt: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.black,
        fontSize: fontSize.large,
        textAlign: 'center',
        width: sizes.screenWidth * 0.4,
        alignSelf: 'center'
    },
    textDesciptionOne: {
        paddingHorizontal: sizes.screenWidth * 0.03,
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.large,
        textAlign: 'center'
    },
    textDesciptionTwo: {
        paddingHorizontal: sizes.screenWidth * 0.03,
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.large,
        textAlign: 'center',
        fontWeight: '600'
    },
    textFeildContainer: {
        marginTop: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.01,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBg,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.04,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headingThree: {
        color: colors.darkPurple,
        fontWeight: '600',
        fontSize: fontSize.medium,
    },
    inputFieldTxt: {
        color: colors.darkPurple,
        fontWeight: '500',
        fontSize: fontSize.smallM
    },
    inputFeildDetailTxt: {
        color: colors.black,
        fontWeight: '400',
        fontSize: fontSize.medium
    },
    productImage: {
        width: sizes.screenWidth * 0.38,
        height: sizes.screenHeight * 0.2,
        // backgroundColor: colors.darkPurple,
        borderRadius: sizes.screenWidth * 0.03,
        right: sizes.screenWidth * 0.32
    },
    detailsCoulmn: {
        flexDirection: 'column'
    },
    marginTop: {
        marginTop: sizes.screenHeight * 0.01,
        marginBottom: sizes.screenHeight * 0.01
    },
    totalAmountRow: {
        paddingHorizontal: sizes.screenWidth * 0.05,
        marginTop: sizes.screenHeight * 0.04,
        flexDirection: 'row',
        width: sizes.screenWidth * 0.8,
        justifyContent: 'space-between',
    },
    buttonView:{
        marginTop:sizes.screenHeight* 0.04
    },
    viewOrderText:{
        color:colors.black,
        marginTop:sizes.screenHeight* 0.02,
        alignSelf:'center',
        fontSize:fontSize.medium,
        fontWeight:'500'
    }
})