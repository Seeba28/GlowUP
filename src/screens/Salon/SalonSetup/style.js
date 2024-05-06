import { StyleSheet } from 'react-native';
import { colors } from '../../../services/utilities/colors';
import { sizes } from '../../../services/utilities/sizes';
import { fontSize } from '../../../services/utilities/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },

    backArrow: {
        marginTop: sizes.screenHeight * 0.04,
        paddingStart: sizes.screenWidth * 0.05,
    },
    Forgotpass: {
        color: colors.black,
        fontSize: fontSize.h7,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center'
    },
    addimage: {
        width: sizes.screenWidth * 0.2,
        height: sizes.screenHeight * 0.1,
        borderRadius: sizes.screenWidth * 0.04,
    },

    containtext: {
        alignItems: 'center',
    },
    subText: {
        textAlign: 'center',
        marginTop: sizes.screenHeight * 0.01,
        color: colors.gray,
        fontWeight: '500',
    },

    uploadImage: {
        marginTop: sizes.screenHeight * 0.02,
        borderRadius: sizes.screenWidth * 0.04,
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.18,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.lightPurple,
    },

    uploadPress: {
        alignItems: 'center',
        marginTop: sizes.screenHeight * 0.012,
    },

    uploadCover: {
        color: colors.black,
        fontWeight: '600',
        fontSize: fontSize.medium,
    },
    content: {
        marginHorizontal: sizes.screenWidth * 0.05,
        marginTop: sizes.screenHeight * 0.012,
        gap: sizes.screenHeight * 0.02,
    },
    timeContainer: {

        flexDirection: 'row',
        alignItems: 'center',

    },

    clockIcon: {
        // right: sizes.screenWidth * 0.01,
        height: sizes.screenHeight * 0.0222,
        // backgroundColor: 'red',
        width: sizes.screenWidth * 0.042,
    },

    title: {
        color: colors.gray,
        fontSize: fontSize.smallM,
        // marginStart: sizes.screenWidth * 0.01,
        marginBottom: sizes.screenHeight * 0.01,

    },
    imagestyle: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.2,
        borderRadius: sizes.screenWidth * 0.04,
        backgroundColor: colors.lightPurple,
    },
    nextBtn: {
        marginTop: sizes.screenHeight * 0.02,
        marginBottom: sizes.screenHeight * 0.03
    },
    description: {
        color: colors.black,
        fontWeight: '600',
        textAlignVertical: 'top',
        width: sizes.screenWidth * 0.83,
    },
    descriptionTwo: {
        color: colors.black,
        fontWeight: '600',
        textAlignVertical: 'top',
        width: sizes.screenWidth * 0.83,
        marginStart: sizes.screenWidth * 0.01
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
        color: colors.black,
    },
    feildText: {
        color: colors.black,
        flex: 1,
        // marginStart: sizes.screenWidth * 0.02,
    },
    textFeildDescription: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        // height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        backgroundColor: colors.textFeildBg,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.02,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        color: colors.black,
        textAlignVertical: 'top',
    },
    scrollContainer: {
        marginTop: sizes.screenHeight * 0.01
    },
    errorText:{
        color:colors.error,
        marginStart:sizes.screenWidth*0.05
      }

});
