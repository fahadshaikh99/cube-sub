// PokemonDetailScreen.js

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../constants';
import {showMessage} from 'react-native-flash-message';
import {styles} from './style';
import Loading from '../../components/Loading';
import {getPokemonByURL} from '../../services';

interface PokemonType {
  id: string;
  name: string;
  height: string | number;
  weight: string | number;
  base_experience: number;
  abilities: {ability: {name: string}}[];
  stats: {base_stat: number; stat: {name: string}}[];
}

const PokemonDetails = ({route}: any) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonType>();
  const {url} = route.params;

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    getPokemonByURL(url)
      .then(res => {
        console.log('Res', res.data);
        setPokemonDetails(res.data);
      })
      .catch(err => {
        showMessage({
          type: 'danger',
          message: 'Something went wrong',
        });
      });
  };

  if (!pokemonDetails) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <>
        <View style={styles.imageBack}>
          <Image
            style={styles.image}
            source={{
              uri: `${IMAGE_BASE_URL}${pokemonDetails.id}.png`,
            }}
          />
        </View>

        <Text style={styles.name}>{pokemonDetails.name}</Text>
        <Text style={styles.label}>Height: {pokemonDetails.height}</Text>
        <Text style={styles.label}>Weight: {pokemonDetails.weight}</Text>
        <Text style={styles.label}>
          Base Experience: {pokemonDetails.base_experience}
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abilities</Text>
          <View style={styles.abilitiesContainer}>
            {pokemonDetails?.abilities.map((ability, index) => (
              <Text key={index} style={styles.ability}>
                {ability.ability.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stats</Text>
          <View style={styles.statsContainer}>
            {pokemonDetails.stats.map((stat, index) => (
              <View key={index} style={styles.statContainer}>
                <Text style={styles.statName}>{stat.stat.name}:</Text>
                <Text style={styles.statValue}>{stat.base_stat}</Text>
              </View>
            ))}
          </View>
        </View>
      </>
    </View>
  );
};

export default PokemonDetails;
