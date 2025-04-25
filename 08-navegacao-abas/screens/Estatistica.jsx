import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

// Dados fictícios para o cálculo das estatísticas
const olympicsData = {
  totalAthletes: 10000,
  totalCountries: 200,
  totalSports: 32,
  medalsByCountry: [
    { country: 'USA', gold: 40, silver: 30, bronze: 25 },
    { country: 'China', gold: 35, silver: 25, bronze: 20 },
    { country: 'Brazil', gold: 10, silver: 5, bronze: 10 },
    // Adicione mais países conforme necessário
  ],
  arenas: [
    { name: 'Stade de France', volunteers: 300 },
    { name: 'Paris Expo Porte de Versailles', volunteers: 200 },
    // Adicione mais arenas conforme necessário
  ],
  athletesPerSport: [
    { sport: 'Atletismo', athletes: 500 },
    { sport: 'Natação', athletes: 300 },
    { sport: 'Futebol', athletes: 600 },
    // Adicione mais modalidades conforme necessário
  ],
};

// Funções de cálculo das médias
const calculateAverageMedalsPerCountry = () => {
  const totalMedals = olympicsData.medalsByCountry.reduce((acc, country) => {
    return acc + country.gold + country.silver + country.bronze;
  }, 0);
  return totalMedals / olympicsData.totalCountries;
};

const calculateAverageVolunteersPerArena = () => {
  const totalVolunteers = olympicsData.arenas.reduce((acc, arena) => acc + arena.volunteers, 0);
  return totalVolunteers / olympicsData.arenas.length;
};

const calculateAverageAthletesPerSport = () => {
  const totalAthletes = olympicsData.athletesPerSport.reduce((acc, sport) => acc + sport.athletes, 0);
  return totalAthletes / olympicsData.totalSports;
};

const EstatisticasScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Estatísticas das Olimpíadas Paris 2024</Text>
          <Text style={styles.text}>Total de Atletas: {olympicsData.totalAthletes}</Text>
          <Text style={styles.text}>Total de Países: {olympicsData.totalCountries}</Text>
          <Text style={styles.text}>Total de Modalidades: {olympicsData.totalSports}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Média de Medalhas por País</Text>
          <Text style={styles.text}>
            {calculateAverageMedalsPerCountry().toFixed(2)} medalhas
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Média de Voluntários por Arena</Text>
          <Text style={styles.text}>
            {calculateAverageVolunteersPerArena().toFixed(0)} voluntários
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Média de Atletas por Modalidade</Text>
          <Text style={styles.text}>
            {calculateAverageAthletesPerSport().toFixed(0)} atletas
          </Text>
        </Card.Content>
      </Card>
    </View>
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
});

export default EstatisticasScreen;
