import React, {PropsWithChildren} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

import FlashMessage from 'react-native-flash-message';
import {themeStyleSheet} from './src/theme/themeStyleSheet';
import Navigator from './src/navigation/Navigtor';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const App = () => {
  type SectionStatusProps = PropsWithChildren<{
    backgroundColor: string;
  }>;
  const MyStatusBar = ({backgroundColor}: SectionStatusProps) => (
    <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle="light-content"
        />
      </SafeAreaView>
    </View>
  );
  return (
    <>
      <MyStatusBar backgroundColor={themeStyleSheet.mainColor} />
      <Navigator />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
