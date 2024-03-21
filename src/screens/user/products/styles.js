import { StyleSheet } from 'react-native';
import { colors } from '../../../services/utilities/colors';
import { sizes } from '../../../services/utilities/sizes';
import { fontSize } from '../../../services/utilities/fonts';

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
    marginStart: sizes.screenWidth * 0.25,
  },
  contianerOne: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
    borderBottomRightRadius:sizes.screenWidth* 0.13,
  },
  headingOne: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginTop: sizes.screenWidth * 0.35,
  },
  headingTwo: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '400',
    marginTop: sizes.screenHeight * 0.02,
    marginStart: sizes.screenWidth * 0.05
  },
  headingThree: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '400',
    marginStart: sizes.screenWidth * 0.12
  },
  detailTxt: {
    marginTop: sizes.screenWidth * 0.01,
    color: colors.gray,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.5,
  },
  productContainerOne: {
    width: sizes.screenWidth / 2,
    backgroundColor: colors.purpleOne,
    height: sizes.screenHeight * 0.26,
  },
  productContainerTwo: {
    width: sizes.screenWidth / 2,
    backgroundColor: colors.prupleTwo,
    height: sizes.screenHeight * 0.28,
  },
  productCategory: {
    flexDirection: 'row'
  },
  productContainerThree: {
    width: sizes.screenWidth / 2,
    backgroundColor: colors.prupleThree,
    height: sizes.screenHeight * 0.58,
  },
  picOne: {
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.23,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  picTwo: {
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  body:{
    backgroundColor:colors.prupleThree,
    marginTop:sizes.screenHeight* 0.02
  }
  
});
