import React from 'react'
import { Card, Text } from 'react-native-paper'
import { Image } from 'react-native'

export default function ModalidadeCard({ modalidade }) {
  return (
    <Card style={{ marginBottom: 10 }}>
      <Card.Title title={modalidade.nome} />
      <Card.Content>
        <Text>Tipo: {modalidade.tipo}</Text>
        <Text>Categoria: {modalidade.categoria}</Text>
        <Text>Local: {modalidade.local}</Text>
        <Text>Número de atletas: {modalidade.numeroAtletas}</Text>
      </Card.Content>
      <Image
        source={{ uri: modalidade.imagem }}
        style={{ height: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        resizeMode="cover"
      />
    </Card>
  )
}
