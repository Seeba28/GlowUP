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
    scrollContainer: {
        marginBottom: sizes.screenHeight * 0.02,
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
        fontSize: fontSize.medium,
        color: colors.gray,
        fontWeight: '600',
        marginStart: sizes.screenWidth * 0.01
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
})