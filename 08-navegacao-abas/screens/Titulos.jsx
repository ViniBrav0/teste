import React from 'react'
import { FlatList } from 'react-native'
import { List } from 'react-native-paper'

const titulos = [
  {
    id: '1',
    nome: 'Libertadores 2023 - Fluminense 2x1 Boca Juniors',
    descricao: 'Final emocionante no Maracanã, com gol de John Kennedy na prorrogação.'
  },
  {
    id: '2',
    nome: 'Brasileirão 1970 - Fluminense campeão por pontos corridos',
    descricao: 'Primeiro título brasileiro do clube, liderado por grandes nomes como Mickey e Lula.'
  },
  {
    id: '3',
    nome: 'Brasileirão 1984 - Fluminense 1x0 Vasco',
    descricao: 'Gol de Romerito garantiu o título no Maracanã, com ótima campanha na reta final.'
  },
  {
    id: '4',
    nome: 'Carioca 2012 - Fluminense 1x0 Botafogo',
    descricao: 'Gol de Rafael Sóbis definiu o título estadual, com grande campanha do Tricolor.'
  },
  {
    id: '5',
    nome: 'Copa do Brasil 2007 - Fluminense 1x0 Figueirense (2x1 no agregado)',
    descricao: 'Gol de Roger no Orlando Scarpelli garantiu o título inédito para o Flu.'
  },
  {
    id: '6',
    nome: 'Carioca 1906 - Campeão invicto',
    descricao: 'Primeiro título oficial do clube, dominando os rivais cariocas.'
  },
  {
    id: '7',
    nome: 'Carioca 1951 - Fluminense campeão após triangular final',
    descricao: 'Campanha sólida que levou o Flu à taça após série decisiva contra Bangu e Vasco.'
  },
  {
    id: '8',
    nome: 'Carioca 1980 - Fluminense 1x0 Vasco',
    descricao: 'Gol de Edinho em clássico no Maracanã selou o título estadual.'
  },
  {
    id: '9',
    nome: 'Carioca 2022 - Fluminense 3x1 Flamengo (Agregado: 3x1)',
    descricao: 'Comandado por Abel Braga, o Flu venceu o rival na final com show de Cano.'
  },
  {
    id: '10',
    nome: 'Torneio Rio-São Paulo 1957 - Fluminense campeão invicto',
    descricao: 'Grande campanha enfrentando os principais clubes do eixo Rio-SP.'
  }
]

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <List.Item
          title={item.nome}
          description={item.descricao}
          left={props => <List.Icon {...props} icon="trophy" />}
        />
      )}
    />
  )
}

export default TitulosScreen
