import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {sizes} from '../../services/utilities/sizes';
import { fontSize } from '../../services/utilities/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPurple,
    marginHorizontal: sizes.screenWidth * 0.05,
    justifyContent:'center',
    alignItems:'center',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.91,
    borderRadius:sizes.screenWidth * 0.035
  },
  btnText:{
    color:colors.white,
    fontSize:fontSize.medium,
    fontWeight:'500'
  }
});
