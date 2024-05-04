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
    paddingHorizontal: sizes.screenWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productText: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
    textAlign: 'center',
    marginStart: sizes.screenWidth * 0.28,
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
  //   containerTwo: {
  //     marginTop: sizes.screenHeight * 0.02,
  //     paddingHorizontal: sizes.screenWidth * 0.05,
  //     height: sizes.screenHeight,
  //     width: sizes.screenWidth,
  //     flexDirection:'row',
  //     flexWrap:'wrap',
  //     justifyContent:'space-between'
  // },
  containerTwo: {
    // marginTop: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.05,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  allProduts: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productRow: {
    marginTop: sizes.screenHeight * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productContainer: {
    flexDirection: 'column',
  },
  productImageContainer: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.44,
    backgroundColor: colors.mediumPurple,
    borderRadius: sizes.screenWidth * 0.02,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  productImage: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.44,
  },
  likeContainer: {
    alignSelf: 'flex-start',
    marginTop: sizes.screenHeight * 0.01,
    marginStart: sizes.screenWidth * 0.02,
  },
  productsNameText: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500'
  },
  productPriceText: {
    fontSize: fontSize.smallM,
    color: colors.gray,
    fontWeight: '500'
  },
  productsDetailRow: {
    marginTop: sizes.screenHeight * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scrollContainer: {
    marginTop: sizes.screenHeight * 0.02,
    marginEnd: sizes.screenHeight * 0.02,
  }
})