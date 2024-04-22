import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {themeStyleSheet} from '../../theme/themeStyleSheet';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyleSheet.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTxt: {
    fontSize: hp('2%'),
    marginTop: hp('3%'),
  },
});
