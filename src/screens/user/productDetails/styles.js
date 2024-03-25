import {StyleSheet} from 'react-native';
import {colors} from '../../../services/utilities/colors';
import {sizes} from '../../../services/utilities/sizes';
import {fontSize} from '../../../services/utilities/fonts';

export const styles = StyleSheet.create({
  productBakcground: {
    backgroundColor: colors.background,
    height:sizes.screenHeight
  },
  topContainer: {
    flexDirection: 'row',
    height: sizes.screenHeight * 0.5,
  },
  backArrow: {
    marginTop: sizes.screenHeight * 0.03,
    paddingStart: sizes.screenWidth * 0.05,
  },
  productImage: {
    backgroundColor: colors.darkPurple,
    height: sizes.screenHeight * 0.5,
    width: sizes.screenWidth * 0.8,
    marginStart: sizes.screenWidth * 0.05,
    borderBottomLeftRadius: sizes.screenWidth * 0.07,
  },
  productImageContainer: {
    height: sizes.screenHeight * 0.5,
    width: sizes.screenWidth * 0.8,
    resizeMode: 'contain',
  },
  wrapper: {},
  containerTwo: {
    position: 'absolute',
    top: sizes.screenHeight * 0.47,
    left: sizes.screenWidth * 0.83,
    zIndex: 1,
  },
  containerProductDetails: {
    marginTop: sizes.screenHeight * 0.06,
    paddingHorizontal: sizes.screenWidth * 0.05,
    
  },
  productRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  productName: {
    fontSize: fontSize.extraLarge,
    color: colors.black,
    fontWeight: '600',
  },
  productPrice: {
    marginTop: sizes.screenHeight* 0.01,
    fontSize: fontSize.large,
    color: colors.darkGray,
    fontWeight: '500',
  },
  ratingsContainer: {
    flexDirection: 'row',
    width:sizes.screenWidth*0.16,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  ratingTxt: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
  },
  productDetailsTxt:{
    marginTop:sizes.screenHeight* 0.02,
    color:colors.gray,
    fontSize:fontSize.smallM,
    fontWeight:'500',
    lineHeight:sizes.screenHeight* 0.023  
  },
  colorTxt:{
    marginTop:sizes.screenHeight*0.01,
    color:colors.black,
    fontSize:fontSize.large,
    fontWeight:'400'
  },
  colorRow:{
    flexDirection:'row',
    height:sizes.screenHeight* 0.06,
    width:sizes.screenWidth* 0.3,
    justifyContent:'space-between',
    alignItems:'center',
  },
  button:{
    marginTop:sizes.screenHeight* 0.06
  },
  star:{
    height:sizes.screenHeight* 0.025,
    width:sizes.screenWidth* 0.045,
    alignSelf:'center',
    resizeMode:'contain'
  }
  
  
});
