import { StyleSheet } from 'react-native';
import { colors } from '../../../services/utilities/colors';
import { sizes } from '../../../services/utilities/sizes';
import { fontSize } from '../../../services/utilities/fonts';

export const styles = StyleSheet.create({
  homeBackgroud: {
    backgroundColor: colors.background,
    height: sizes.screenHeight
  },
  topContainer: {
    marginTop: sizes.screenHeight * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.145,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenWidth * 0.7,
    borderWidth: sizes.screenWidth * 0.002
  },
  profileImg: {
    width: sizes.screenWidth * 0.145,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenWidth * 0.7,
  },
  nameText: {
    marginStart: sizes.screenWidth * 0.02,
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },
  topProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIconsContainer: {
    width: sizes.screenWidth * 0.27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    // marginTop: sizes.screenHeight * 0.02,
    paddingStart: sizes.screenWidth * 0.05,
  },
  containerThree: {
    marginTop: sizes.screenHeight * 0.01,
    paddingStart: sizes.screenWidth * 0.05,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  subContainerHeading: {
    fontSize: fontSize.extraLarge,
    fontWeight: '500',
    color: colors.black,
  },
  serviceContainer: {
    marginTop: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth * 0.5,
    marginHorizontal: sizes.screenWidth * 0.03,
  },
  salonImage: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth * 0.52,
    resizeMode: 'stretch',
  },
  serviceContainerMain: {
    marginTop: sizes.screenHeight * 0.17,
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.52,
    borderRadius: sizes.screenWidth * 0.04,
    backgroundColor: colors.mediumPurple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  insideServiceContainer: {
    marginTop: sizes.screenHeight * 0.006,
    flexDirection: 'row',
    alignItems: 'center',
  },
  salonName: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '500',
  },
  serviceDetailsText: {
    marginStart: sizes.screenWidth * 0.01,
    fontSize: fontSize.small,
    color: colors.black,
    fontWeight: '500',
  },
  serviceSlider: {
    height: sizes.screenHeight * 0.3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: sizes.screenWidth * -0.03,
    marginEnd: sizes.screenWidth * 0.03,
  },
  contianerThreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewAll: {
    fontSize: fontSize.medium,
    color: colors.darkPurple,
    fontWeight: 'bold',
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
  productImageContianer: {
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
    resizeMode: 'contain',
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
  allProduts: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginHorizontal: sizes.screenWidth * -0.03,
  },
  scrollContainer:{
    marginTop:sizes.screenHeight* 0.02,
    marginBottom: sizes.screenHeight* 0.11
  }
});
