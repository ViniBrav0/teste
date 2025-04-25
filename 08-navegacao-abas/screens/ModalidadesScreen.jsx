import React from 'react'
import { View, FlatList } from 'react-native'
import { modalidades } from './modalidades'
import ModalidadeCard from './ModalidadeCard'

export default function ModalidadesScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={modalidades}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ModalidadeCard modalidade={item} />}
      />
    </View>
  )
}
