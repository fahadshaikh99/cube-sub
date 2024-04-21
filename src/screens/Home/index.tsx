// App.js

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

interface Pokmon {
  name: string;
  url: string;
}

const Home = (props: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokmon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokmon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredPokemonList(pokemonList);
    } else {
      console.log('Comming in else', searchQuery);
      const filtered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      console.log('Filtered is:', filtered);
      setFilteredPokemonList(filtered);
    }
  }, [searchQuery, pokemonList]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPokemonList(data.results);
      setFilteredPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              item.url.split('/')[6]
            }.png`,
          }}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToDetail = (data: any) => {
    console.log('Data', data);
    props.navigation.navigate('PokemonDetails', {
      url: data.url,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Pokemon"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredPokemonList}
        renderItem={renderItem}
        keyExtractor={item => item?.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
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

export default Home;
