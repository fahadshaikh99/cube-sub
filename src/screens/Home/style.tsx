import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeStyleSheet} from '../../theme/themeStyleSheet';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyleSheet.white,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: themeStyleSheet.gray,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
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
