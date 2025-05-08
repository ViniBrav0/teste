import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Card, Title, Paragraph, List, Button } from 'react-native-paper'

export default function ReceitaScreen({ route, navigation }) {
 const { receita } = route.params
 const [passosExpandido, setPassosExpandido] = useState({})

 const toggleExpand = (index) => {
  setPassosExpandido((prev) => ({
   ...prev,
   [index]: !prev[index]
  }))
 }

 return (
  <ScrollView style={{ margin: 16 }} contentContainerStyle={{ paddingBottom: 32 }}>
   <Card style={{ borderRadius: 16, elevation: 4 }}>
    <Card.Cover source={{ uri: receita.imagem }} style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
    <Card.Content style={{ paddingBottom: 8 }}>
     <Title style={{ fontSize: 22 }}>{receita.nome}</Title>
     <Paragraph style={{ marginTop: 4 }}>⏱️ Tempo de preparo: {receita.tempoPreparo}</Paragraph>
     <Paragraph>🍽️ Porções: {receita.porcoes}</Paragraph>
    </Card.Content>
   </Card>

   <List.Section title="Ingredientes" style={{ backgroundColor: '#fff', marginTop: 16, borderRadius: 12, padding: 8, elevation: 2 }}>
    {receita.ingredientes.map((item, index) => (
     <List.Item key={index} title={item} left={() => <List.Icon icon="circle-small" />} />
    ))}
   </List.Section>

   <List.Section title="Modo de Preparo" style={{ backgroundColor: '#fff', marginTop: 16, borderRadius: 12, padding: 8, elevation: 2 }}>
    {receita.modoPreparo.map((passo, index) => (
     <List.Item
      key={index}
      title={`Passo ${index + 1}`}
      description={passosExpandido[index] ? passo : passo.substring(0, 60) + (passo.length > 60 ? '...' : '')}
      left={() => <List.Icon icon={passosExpandido[index] ? 'chevron-down' : 'chevron-right'} />}
      onPress={() => toggleExpand(index)}
    />
    ))}
   </List.Section>

   <Button
    mode="contained"
    onPress={() => navigation.goBack()}
    style={{ marginTop: 24, borderRadius: 8 }}
    contentStyle={{ paddingVertical: 8 }}
   >
    Voltar
   </Button>
  </ScrollView>
 )
}
