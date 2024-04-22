// App.js

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {getListPokemons} from '../../services';
import {styles} from './style';
import {showMessage} from 'react-native-flash-message';
import {screenName} from '../../navigation/ScreenRoutes';
import SearchListItem from '../../components/SearchListItem';

interface PokemonType {
  name: string;
  url: string;
}

const Home = (props: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<PokemonType[]>(
    [],
  );
  const [showNoPokemonFound, setShowNoPokemonFound] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const res: PokemonType[] = await getListPokemons();
      setPokemonList(res);
      setFilteredPokemonList(res);
    } catch (err) {
      setShowNoPokemonFound(true);
      showMessage({
        type: 'danger',
        message: 'Something went wrong',
      });
      console.log('Error', err);
    }
  };

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredPokemonList(pokemonList);
    } else {
      const filtered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredPokemonList(filtered);
      setShowNoPokemonFound(filtered.length === 0);
    }
  }, [searchQuery, pokemonList]);

  const renderItem = ({item}: {item: PokemonType}) => (
    <SearchListItem item={item} navigateToDetail={navigateToDetail} />
  );

  const navigateToDetail = (data: PokemonType) => {
    props.navigation.navigate(screenName.PokemonDetails, {
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
      {showNoPokemonFound ? (
        <Text>
          No Pokémon found{searchQuery && ` with name ${searchQuery}`}
        </Text>
      ) : (
        <FlatList
          data={filteredPokemonList}
          renderItem={renderItem}
          keyExtractor={item => item.url}
        />
      )}
    </View>
  );
};

export default Home;
