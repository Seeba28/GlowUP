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
    containerTwo: {
        paddingStart: sizes.screenWidth * 0.05,
    },
    imageSlider: {
        marginTop: sizes.screenHeight * 0.04,
        height: sizes.screenHeight * 0.2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: sizes.screenWidth * 0.03,
    },
    imageSlider2: {
        marginTop: sizes.screenHeight * 0.02,
        height: sizes.screenHeight * 0.28,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: sizes.screenWidth * 0.03,
    },
    portfolioImage: {
        height: sizes.screenHeight * 0.28,
        width: sizes.screenWidth * 0.4,
        resizeMode:'cover'
    },
    portfolioTxt: {
        marginTop: sizes.screenHeight * 0.01,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    salonImage: {
        height: sizes.screenHeight * 0.2,
        width: sizes.screenWidth * 0.45,
        resizeMode: 'stretch',
        borderRadius: sizes.screenWidth * 0.04
    },
    salonNameTxt: {
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    locationRow: {
        marginTop: sizes.screenHeight * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationTxt: {
        marginStart: sizes.screenWidth * 0.01,
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'flex-start',
    },
    starImage: {
        height: sizes.screenHeight * 0.025,
        width: sizes.screenWidth * 0.045,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    locationImage: {
        height: sizes.screenHeight * 0.022,
        width: sizes.screenWidth * 0.038,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    timingTxt: {
        marginStart: sizes.screenWidth * 0.01,
        color: colors.gray,
        fontSize: fontSize.smallM,
        fontWeight: '500',
        textAlign: 'center',
    },
    salonOptions: {
        marginTop: sizes.screenHeight * 0.02,
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05

    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    optionTxt: {
        color: colors.gray,
        fontSize: fontSize.medium,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05
    },
    selectedText: {
        borderBottomColor: colors.black,
        borderBottomWidth: sizes.screenWidth * 0.01,
    },
    optionsBottomContainer:{
        marginTop:sizes.screenHeight * 0.01
    },
    aboutTxt:{
        color: colors.gray,
        fontSize: fontSize.smallM,
        fontWeight: '400',
        alignSelf: 'center',
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05,
        lineHeight: sizes.screenHeight * 0.022
    },
    button:{
        marginTop:sizes.screenHeight* 0.03
    },
    optionBottomContainerTwo:{
        // alignSelf:'center',
        marginTop:sizes.screenHeight * 0.01,
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05,
    },
    optionBottomContainerThree:{
        marginTop:sizes.screenHeight * 0.04,
        paddingStart: sizes.screenWidth * 0.05,
        paddingEnd: sizes.screenWidth * 0.05,
    },
    serviceRowAfter:{
        paddingVertical:sizes.screenHeight* 0.01,
        paddingHorizontal:sizes.screenWidth* 0.02,
        backgroundColor:colors.lightPurple,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:sizes.screenWidth* 0.02
    },
    serviceRow:{
        paddingVertical:sizes.screenHeight* 0.01,
        paddingHorizontal:sizes.screenWidth* 0.02,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:sizes.screenWidth* 0.02,
        justifyContent:'space-between'
    },
    serviceIcon:{
        alignSelf:'flex-start'
    },
    topServiceTxt:{
        color:colors.black,
        fontSize:fontSize.smallM,
        fontWeight:'500'
    },
    serviceTypeTxt:{
        color:colors.gray,
        fontSize:fontSize.smallM,
        fontWeight:'500',
        marginTop:sizes.screenHeight* 0.005,

    },
    priceTxt:{
        color:colors.gray,
        fontSize:fontSize.smallM,
        fontWeight:'500',
    },
    rowStartService:{
        flexDirection:'row'

    },
    innerColumn:{
        flexDirection:'column',
        marginStart:sizes.screenWidth* 0.03,

    },
    scrollContainer:{
        marginTop:sizes.screenHeight* 0.01,
        marginBottom:sizes.screenHeight* 0.01,
        height:sizes.screenHeight* 0.31
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
    },
    seeAllBtn:{
        color:colors.gray,
        textAlign:'center',
        fontSize:fontSize.large,
        marginTop:sizes.screenHeight* 0.02,
        fontWeight:"600"
    }



})