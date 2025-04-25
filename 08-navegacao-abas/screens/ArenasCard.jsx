import React from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ArenaCard = ({ name, location, capacity, description }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>Localização: {location}</Text>
        <Text style={styles.text}>Capacidade: {capacity}</Text>
        <Text style={styles.text}>Descrição: {description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ArenaCard;
