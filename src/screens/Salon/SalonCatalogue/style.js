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
        // flexDirection: 'row',
        // alignItems: 'center',
      },
      productText: {
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight: '500',
        textAlign: 'center',
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
    containerBody: {
        marginTop: sizes.screenHeight * 0.05,
        paddingHorizontal: sizes.screenWidth * 0.06,
        flex: 1,
      },
      scrollContainer: {
        // marginTop:sizes.screenHeight* 0.01,
        marginBottom:sizes.screenHeight* 0.02
    
      },
      serviceContainer: {
        flexDirection: 'row',
        // marginTop: sizes.screenHeight * 0.01,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      serviceBox: {
        backgroundColor: colors.white,
        width: sizes.screenWidth * 0.42,
        height: sizes.screenHeight * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.screenWidth * 0.05,
        borderWidth: sizes.screenWidth * 0.003,
        borderColor: colors.lightGray,
        marginBottom: sizes.screenHeight * 0.02,
      },
      serviceImage: {
        width: sizes.screenWidth * 0.1,
        height: sizes.screenHeight * 0.06,
        resizeMode: 'contain',
      },
      serviceName: {
        color: colors.black,
        marginTop: sizes.screenHeight * 0.01,
        fontWeight: 'bold',
        fontSize: fontSize.medium,
      },
      serviceStyle: {
        color: colors.black,
        fontWeight: '500',
        fontSize: fontSize.smallM,
        marginTop: sizes.screenHeight * 0.005,
      },
      addService: {
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.18,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: sizes.screenHeight * 0.1,
        resizeMode: 'contain',
      },
})