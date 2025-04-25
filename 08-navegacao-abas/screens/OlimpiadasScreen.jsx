import React from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';
import MascotCard from '../components/MascotCard'; // Componente personalizado para exibir os mascotes

const olympicsData = {
  year: 2024,
  city: 'Paris',
  dates: '26 de julho a 11 de agosto',
  sports: 32,
  athletes: 10000,
  motto: 'Citius, Altius, Fortius – Communis',
};

const mascots = [
  {
    id: '1',
    name: 'Phryge',
    description: 'A mascote oficial das Olimpíadas de Paris 2024, representando o espírito da liberdade e da revolução francesa.',
    imageUrl: 'https://example.com/phryge.jpg', // Insira URL válida de imagem
  },
  {
    id: '2',
    name: 'Olympi',
    description: 'A mascote dos Jogos Olímpicos Paris 2024, projetada com um estilo moderno e dinâmico.',
    imageUrl: 'https://example.com/olympi.jpg', // Insira URL válida de imagem
  },
];

const OlimpiadasScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Olimpíadas Paris {olympicsData.year}</Text>
          <Text style={styles.text}>Cidade: {olympicsData.city}</Text>
          <Text style={styles.text}>Datas: {olympicsData.dates}</Text>
          <Text style={styles.text}>Modalidades: {olympicsData.sports}</Text>
          <Text style={styles.text}>Atletas: {olympicsData.athletes}</Text>
          <Text style={styles.text}>Lema: {olympicsData.motto}</Text>
        </Card.Content>
      </Card>

      <Text style={styles.mascotTitle}>Mascotes Oficiais</Text>
      <FlatList
        data={mascots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MascotCard
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
  mascotTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default OlimpiadasScreen;
