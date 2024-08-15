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
        marginTop: sizes.screenHeight * 0.03,
        // paddingHorizontal: sizes.screenWidth * 0.05,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    serviceText: {
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
        // marginStart: sizes.screenWidth * 0.25
    },
    searchContainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        marginTop: sizes.screenHeight * 0.04,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.lightPurple,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchTextInput: {
        color: colors.black,
        flex: 1,
        marginStart: sizes.screenWidth * 0.02,
    },
    chooseOption: {
        marginTop: sizes.screenHeight * 0.03,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBG3,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectedChooseOption: {
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.45,
        backgroundColor: colors.redemPurple,
        borderRadius: sizes.screenWidth * 0.05,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chooseTxtBefore: {
        color: colors.black,
        fontSize: fontSize.medium,
        textAlign: 'center',
        fontWeight: '500',

    },
    chooseTxt: {
        color: colors.black,
        fontSize: fontSize.medium,
        textAlign: 'center',
        fontWeight: '500',
        marginStart: sizes.screenWidth * 0.15,
        marginEnd: sizes.screenWidth * 0.15,
        width: sizes.screenWidth * 0.16
    },
    containerTwo: {
        marginTop: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.05,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.02,
        marginBottom: sizes.screenHeight * 0.02,
    },
    serviceRow: {
        // marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    serviceContainer: {
        marginBottom:sizes.screenHeight* 0.02,
        flexDirection: 'column',
    },
    serviceImageContainer: {
        height: sizes.screenHeight * 0.2,
        width: sizes.screenWidth * 0.43,
        backgroundColor: colors.mediumPurple,
        borderRadius: sizes.screenWidth * 0.04,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    serviceImage: {
        height: sizes.screenHeight * 0.2,
        width: sizes.screenWidth * 0.44,
    },
    salonName: {
        marginTop:sizes.screenHeight* 0.005,
        fontSize: fontSize.medium,
        color: colors.black,
        fontWeight: '500',
    },
    insideServiceContainer: {
        // marginTop: sizes.screenHeight * 0.006,
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceDetailsText: {
        marginStart: sizes.screenWidth * 0.01,
        fontSize: fontSize.smallM,
        color: colors.black,
        fontWeight: '500',
    },
    servicePriceText: {
        marginStart: sizes.screenWidth * 0.01,
        fontSize: fontSize.smallM,
        color: colors.gray,
        fontWeight: '500'
      }
})