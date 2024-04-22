import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PokemonDetailScreen from '../screens/PokemonDetails';
import {screenName} from './ScreenRoutes';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Find Your Pokemon',
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
        }}
        name={screenName.Home}
        component={Home}
      />
      <Stack.Screen
        options={{title: 'Pokemon Profile', headerBackTitleVisible: false}}
        name={screenName.PokemonDetails}
        component={PokemonDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
