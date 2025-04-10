import React from 'react'
import { View, FlatList } from 'react-native'
import { List } from 'react-native-paper'

const jogadores = [
  {
    id: '1',
    nome: 'Fred',
    gols: 199,
    curiosidade: 'Ídolo da torcida, marcou o gol que salvou o time do rebaixamento em 2009.'
  },
  {
    id: '2',
    nome: 'Thiago Silva',
    gols: 27,
    curiosidade: 'Revelado pelo Flu, é considerado um dos melhores zagueiros do mundo.'
  },
  {
    id: '3',
    nome: 'Assis',
    gols: 112,
    curiosidade: 'Irmão de Ronaldinho Gaúcho e destaque do Flu nos anos 80.'
  },
  {
    id: '4',
    nome: 'Deco',
    gols: 48,
    curiosidade: 'Jogou pelo Flu após passagem vitoriosa por Barcelona e Chelsea.'
  },
  {
    id: '5',
    nome: 'Gérson Canhotinha de Ouro',
    gols: 96,
    curiosidade: 'Campeão do mundo em 1970 e um dos maiores meias da história do Brasil.'
  }
]

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <List.Item
          title={`${item.nome} - ${item.gols} gols`}
          description={item.curiosidade}
          left={props => <List.Icon {...props} icon="account" />}
        />
      )}
    />
  )
}

export default JogadoresScreen
