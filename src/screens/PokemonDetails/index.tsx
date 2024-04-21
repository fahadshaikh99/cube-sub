// PokemonDetailScreen.js

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

interface pokemonType {
  id: string;
  name: string;
  height: string | number;
  weight: string | number;
}

const PokemonDetails = ({route}: any) => {
  const [pokemonDetails, setPokemonDetails] = useState<pokemonType>();
  const {url} = route.params;
  console.log('The URL is: ', url);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Data', data);
      setPokemonDetails(data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  if (!pokemonDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`,
        }}
      />
      <Text style={styles.name}>{pokemonDetails.name}</Text>
      <Text style={styles.label}>Height: {pokemonDetails.height}</Text>
      <Text style={styles.label}>Weight: {pokemonDetails.weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PokemonDetails;
