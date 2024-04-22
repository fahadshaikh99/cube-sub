import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../constants';
import {styles} from './style';

const SearchListItem = ({item, navigateToDetail}: any) => {
  return (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: `${IMAGE_BASE_URL}${item.url.split('/')[6]}.png`,
          }}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchListItem;
