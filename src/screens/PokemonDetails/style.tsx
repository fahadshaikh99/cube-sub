import {StyleSheet} from 'react-native';
import {themeStyleSheet} from '../../theme/themeStyleSheet';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeStyleSheet.white,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  imageBack: {
    backgroundColor: themeStyleSheet.mainColor,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: themeStyleSheet.black,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: themeStyleSheet.black,
  },
  section: {
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: themeStyleSheet.black,
  },
  abilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ability: {
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: themeStyleSheet.lightblue,
    borderRadius: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  statName: {
    marginRight: 5,
  },
  statValue: {
    fontWeight: 'bold',
    color: themeStyleSheet.black,
  },
});
