import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PokemonDetailScreen from '../screens/PokemonDetails';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        // options={{header: () => null}}
        name="PokemonDetails"
        component={PokemonDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
