import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function TitulosScreens() {
    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1971, 1984, 2010, 2012]
        },
        {
            nome: "Copa Libertadores da América",
            anos: [2008]
        },
        {
            nome: "Copa do Brasil",
            anos: [2007, 2012]
        },
        {
            nome: "Supercopa do Brasil",
            anos: [2020]
        }
    ];

  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.titulo}>{item.nome}</Text>
              <Text style={styles.anos}>Anos: {item.anos.join(", ")}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#006633',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006633',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  anos: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto',
    marginBottom: 12,
  },
});
