import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeStyleSheet} from '../../theme/themeStyleSheet';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: wp('90%'),
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
