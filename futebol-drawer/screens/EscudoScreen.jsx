import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function EscudoScreens() {
  const times = [
    {
      nome: "Fluminense",
      escudo: "https://logodetimes.com/times/fluminense/logo-fluminense-4096.png",
      fundacao: "21 de julho de 1902",
      estadio: "Maracanã",
      mascote: "Guerreiro",
      cores: ["Verde", "Branco", "Grená"]
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={times}   
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Image source={{ uri: item.escudo }} style={styles.escudo} />
            <Card.Content>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.texto}>Fundação: {item.fundacao}</Text>
              <Text style={styles.texto}>Estádio: {item.estadio}</Text>
              <Text style={styles.texto}>Mascote: {item.mascote}</Text>
              <Text style={styles.texto}>Cores: {item.cores.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f0',
    padding: 16
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 4
  },
  escudo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 16
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#006633'
  },
  texto: {
    fontSize: 16,
    marginTop: 4,
    color: '#333'
  }
})
