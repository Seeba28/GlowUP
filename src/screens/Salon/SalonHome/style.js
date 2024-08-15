import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.white,
        height: sizes.screenHeight
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.145,
        height: sizes.screenHeight * 0.07,
        borderRadius: sizes.screenWidth * 0.7,
        borderWidth: sizes.screenWidth * 0.002
    },
    heading: {
        color: colors.black,
        fontSize: fontSize.extraLarge,
        fontWeight: '600',
        marginStart: sizes.screenWidth * 0.02
    },
    profileImg: {
        width: sizes.screenWidth * 0.145,
        height: sizes.screenHeight * 0.07,
        borderRadius: sizes.screenWidth * 0.7,
    },
    margin: {
        marginStart: sizes.screenWidth * 0.34
    },
    topRowContainer: {
        marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
    },

      containerBody: {
        // marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.06,
      },
      headingSummary: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
      },
      rowTwo: {
        marginTop: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      lastServicesContainer: {
        marginTop: sizes.screenHeight * 0.01,
        height: sizes.screenHeight * 0.35,
      },
      rowThree: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        width: sizes.screenWidth * 0.88,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenWidth * 0.022,
        borderRadius: sizes.screenWidth * 0.02,
        borderColor: colors.lightGray,
        borderWidth: sizes.screenWidth * 0.003,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      serviceHeading: {
        color: colors.black,
        fontSize: fontSize.smallM,
        width:sizes.screenWidth* 0.21
      },
      priceHeading: {
        color: colors.black,
        fontSize: fontSize.smallM,
        marginStart: sizes.screenWidth * 0.06,
      },
      dateHeading: {
        color: colors.black,
        fontSize: fontSize.smallM,
        marginStart: sizes.screenWidth * 0.08,
      },
      statusHeading: {
        color: colors.black,
        fontSize: fontSize.smallM,
        marginStart: sizes.screenWidth * 0.06,
      },
      serviceDetailRow: {
        marginTop: sizes.screenHeight * 0.01,
        flexDirection: 'row',
        backgroundColor: colors.lightgray,
        width: sizes.screenWidth * 0.88,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenWidth * 0.02,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      dateHeadingTwo: {
        color: colors.black,
        fontSize: fontSize.smallM,
        textAlign: 'center',
      },
      timeHeading: {
        color: colors.gray,
        fontSize: fontSize.smallM,
        textAlign: 'center',
    
      },
      statusHeadingTwo: {
        color: colors.red,
        fontSize: fontSize.smallM,
        width:sizes.screenWidth* 0.155,
        textAlign:'right'
    
      },
      priceHeadingTwo: {
        color: colors.black,
        fontSize: fontSize.smallM,
        width:sizes.screenWidth* 0.15,
        textAlign:'center',
        fontWeight:'500'
      },
      reviewHeading: {
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
      },
      rowFour: {
        marginTop: sizes.screenHeight * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:sizes.screenHeight* 0.02
      },
      viewAllBtn: {
        borderColor: colors.prupleThree,
        alignItems: 'center',
        borderWidth: sizes.screenWidth * 0.003,
        width: sizes.screenWidth * 0.23,
        paddingVertical: sizes.screenHeight * 0.01,
        borderRadius: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      viewAllText: {
        color: colors.prupleThree,
        fontSize: fontSize.smallM,
        fontWeight: '500',
      },
      arrowImage: {
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.025,
        marginStart: sizes.screenWidth * 0.01,
      },
      reviewContainer: {
        marginTop: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenWidth * 0.022,
        borderRadius: sizes.screenWidth * 0.03,
        borderColor: colors.emptyStar,
        borderWidth: sizes.screenWidth * 0.003,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      reviewInsideContainer: {
        alignItems: 'center',
      },
      ratingNumber: {
        color: colors.black,
        fontSize: fontSize.h5,
        fontWeight: '900',
      },
      startContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: sizes.screenWidth * 0.0222,
        height: sizes.screenHeight * 0.022,
      },
      totalReview: {
        color: colors.grayText,
        marginTop: sizes.screenHeight * 0.013,
      },
      reviewBarContainer: {
        width: sizes.screenWidth * 0.45,
      },
      reviewBarRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingGoldenText: {
        color: colors.goldText,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        marginEnd: sizes.screenWidth * 0.01,
      },
      percentGoldenText: {
        color: colors.goldText,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        marginStart: sizes.screenWidth * 0.02,
      },
      starImage: {
        marginEnd: sizes.screenWidth * 0.02,
      },
      ratingContainer: {
        alignItems: 'center',
        borderRadius: sizes.screenWidth * 0.03,
        borderColor: colors.emptyStar,
        borderWidth: sizes.screenWidth * 0.003,
        marginTop: sizes.screenHeight * 0.012,
        // backgroundColor: colors.red,
      },
      ratingData: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: sizes.screenWidth * 0.81,
        alignItems: 'center',
        marginTop: sizes.screenHeight * 0.012,
      },
      profilePic: {
        borderRadius: sizes.screenWidth * 0.3,
        height: sizes.screenHeight * 0.052,
        width: sizes.screenWidth * 0.11,
        resizeMode: 'contain',
      },
      alignItems: {
        marginLeft: sizes.screenWidth * 0.05,
        marginTop: sizes.screenHeight * 0.0122,
      },
      usernameAllignment: {
        fontSize: fontSize.small,
        fontWeight: '700',
        color: colors.black,
      },
      time: {
        fontSize: fontSize.small,
        color: colors.grayText,
      },
      startContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: sizes.screenWidth * 0.0222,
        height: sizes.screenHeight * 0.022,
      },
      descriptionContainer: {
        color: colors.grayText,
        fontSize: fontSize.small,
        marginTop: sizes.screenHeight * 0.012,
        marginRight: sizes.screenWidth * 0.022,
        marginLeft: sizes.screenWidth * 0.03,
        marginBottom: sizes.screenHeight * 0.02,
      },
      rowAndmargin: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ScrollViewContainer: {
        marginTop: sizes.screenHeight * 0.03,
        marginBottom: sizes.screenHeight * 0.085,
      },
      reviewRow:{
        paddingVertical:sizes.screenHeight* 0.01,
        paddingHorizontal:sizes.screenWidth* 0.02,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:sizes.screenWidth* 0.02,
        backgroundColor:colors.puprleOpacity,
        marginBottom:sizes.screenHeight* 0.02,
    },
    profileCircle:{
        height:sizes.screenHeight* 0.06,
        width:sizes.screenWidth* 0.12,
        borderRadius:sizes.screenWidth* 0.1,
    },
    reviewCOlumn:{
        marginStart:sizes.screenHeight* 0.02
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
    
})