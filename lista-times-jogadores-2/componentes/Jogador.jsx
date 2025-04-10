import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Jogador from './Jogador'

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props

  return (
    <Card style={styles.card}>
      <Card.Title title={nome} titleStyle={styles.titulo} />
      <Card.Content>
        <Text style={styles.texto}>Ano de Fundação: {anoFundacao}</Text>
        <Text style={styles.texto}>Mascote: {mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} style={styles.imagem} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} imagem={item.imagem} numero={item.numero} />
          )}
          keyExtractor={(item) => item.nome}
          contentContainerStyle={styles.listaJogadores}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  texto: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  imagem: {
    height: 150,
    resizeMode: 'cover',
  },
  listaJogadores: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
})
