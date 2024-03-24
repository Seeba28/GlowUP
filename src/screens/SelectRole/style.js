import { StyleSheet } from "react-native";
import { fontSize } from "../../services/utilities/fonts";
import { sizes } from "../../services/utilities/sizes";
import { colors } from "../../services/utilities/colors";

export const styles = StyleSheet.create({
    homeBackgroud: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    subHeading: {
        marginTop: sizes.screenHeight * 0.1,
        color: colors.darkGray,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        width: sizes.screenWidth * 0.75,
    },
    body: {
        marginTop: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenHeight * 0.06,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    roleContainer: {
        marginTop: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.03,
        backgroundColor: colors.white,
        width: sizes.screenWidth * 0.88,
        height: sizes.screenHeight * 0.12,
        borderRadius: sizes.screenWidth * 0.04,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectedRoleContainer: {
        marginTop: sizes.screenHeight * 0.02,
        paddingHorizontal: sizes.screenWidth * 0.03,
        backgroundColor: colors.background,
        width: sizes.screenWidth * 0.88,
        height: sizes.screenHeight * 0.12,
        borderRadius: sizes.screenWidth * 0.04,
        borderColor: colors.outlinePurple,
        borderWidth: sizes.screenWidth * 0.003,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
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
    iconImage: {
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.12,
    },
    iconSquareBefore: {
        width: sizes.screenWidth * 0.21,
        height: sizes.screenHeight * 0.09,
        backgroundColor: colors.grayThree,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.screenWidth * 0.02
    },
    iconSquareAfter: {
        width: sizes.screenWidth * 0.21,
        height: sizes.screenHeight * 0.09,
        backgroundColor: colors.mediumPurple,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.screenWidth * 0.02
    },
    button: {
        marginTop: sizes.screenHeight * 0.13
    },
    errorText: {
        color: colors.error,
        marginStart: sizes.screenWidth * 0.07,
        marginTop:sizes.screenHeight* 0.01

    }
})