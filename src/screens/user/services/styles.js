import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";


export const styles = StyleSheet.create({
    serviceBackgroud: {
        backgroundColor: colors.background,
        height:sizes.screenHeight
      },
      topContainer: {
        marginTop: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
      },
      serviceText:{
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign:'center',
        marginStart:sizes.screenWidth * 0.25 
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
      containerTwo: {
        marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.03,
      },
      servicesContainer:{
        height: sizes.screenHeight * 0.158,
        width:sizes.screenWidth * 0.9,
        resizeMode:'contain',
        marginBottom:sizes.screenHeight * 0.02
      },
      servicesNameText:{
        color: colors.white,
        fontSize: fontSize.large,
        fontWeight:'500',
        marginTop:sizes.screenHeight * 0.01,
        marginStart:sizes.screenWidth * 0.02,
      },
      allServices:{
        justifyContent: 'space-between',
        flexDirection: 'column',
      }
})