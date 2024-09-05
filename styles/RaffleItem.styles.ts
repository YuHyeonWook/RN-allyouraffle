import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  name: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  count: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  gaugeContainer: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginTop: 8,
  },
  gauge: {
    height: '100%',
    backgroundColor: '#85cdfd',
    borderRadius: 5,
  },
});
