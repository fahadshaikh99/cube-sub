import axios from 'axios';
import {API_URL} from '../constants';

export const getListPokemons = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL)
      .then((res): any => {
        const data = res.data.results;
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getPokemonByURL = (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res): any => {
        const data = res;
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
