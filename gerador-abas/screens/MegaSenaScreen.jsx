import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Button, Card, Title, Text } from 'react-native-paper'

const gerarJogo = () => {
  const numeros = new Set()
  while (numeros.size < 6) {
    const numero = Math.floor(Math.random() * 60) + 1
    numeros.add(numero)
  }
  return Array.from(numeros).sort((a, b) => a - b)
}

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([])
  const [jogosMegaSena, setJogosMegaSena] = useState([])

  const gerarNovoJogo = () => {
    const novoJogo = gerarJogo()
    setJogoGerado(novoJogo)
    setJogosMegaSena([novoJogo, ...jogosMegaSena])
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title style={{ textAlign: 'center', marginBottom: 16 }}>
        Gerador da Mega-Sena
      </Title>

      <Button mode="contained" onPress={gerarNovoJogo}>
        Gerar Jogo
      </Button>

      <Button
        mode="outlined"
        onPress={() => setJogosMegaSena([])}
        style={{ marginTop: 8 }}
      >
        Limpar Histórico
      </Button>

      {jogoGerado.length > 0 && (
        <Card style={{ marginTop: 24 }}>
          <Card.Content>
            <Text>Jogo Atual:</Text>
            <Title>{jogoGerado.join(' - ')}</Title>
          </Card.Content>
        </Card>
      )}

      <Title style={{ marginTop: 24, marginBottom: 8 }}>Histórico:</Title>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Content>
              <Text>{item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

export default MegaSenaScreen
