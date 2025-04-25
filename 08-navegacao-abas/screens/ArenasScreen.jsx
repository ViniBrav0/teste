import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import ArenasCard from '../components/ArenaCard'; 

const arenas = [
  {
    id: '1',
    name: 'Stade de France',
    location: 'Saint-Denis, Paris',
    capacity: '81,338',
    description: 'Principal estádio para cerimônias de abertura e eventos de atletismo.',
  },
  {
    id: '2',
    name: 'Paris Expo Porte de Versailles',
    location: 'Paris',
    capacity: '15,000',
    description: 'Arena para competições de lutas, boxe e artes marciais.',
  },
  
];

const ArenasScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={arenas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArenaCard
            name={item.name}
            location={item.location}
            capacity={item.capacity}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

export default ArenasScreen;
