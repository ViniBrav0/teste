import React from 'react'
import { ScrollView, Image } from 'react-native'
import { Card, Title, Paragraph, List, Button } from 'react-native-paper'

export default function ReceitaScreen({ route, navigation }) {
 const { receita } = route.params

 return (
  <ScrollView style={{ margin: 10 }}>
   <Card>
    <Card.Cover source={{ uri: receita.imagem }} />
    <Card.Content>
     <Title>{receita.nome}</Title>
     <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
     <Paragraph>Porções: {receita.porcoes}</Paragraph>
    </Card.Content>
   </Card>

   <List.Section title="Ingredientes">
    {receita.ingredientes.map((item, index) => (
     <List.Item key={index} title={item} />
    ))}
   </List.Section>

   <List.Section title="Modo de Preparo">
    {receita.modoPreparo.map((passo, index) => (
     <List.Item key={index} title={passo} />
    ))}
   </List.Section>

   <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
    Voltar
   </Button>
  </ScrollView>
 )
}
