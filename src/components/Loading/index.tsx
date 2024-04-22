import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './style';
import {themeStyleSheet} from '../../theme/themeStyleSheet';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={themeStyleSheet.mainColor} size={'large'} />
      <Text style={styles.loadingTxt}>Loading...</Text>
    </View>
  );
};

export default Loading;
