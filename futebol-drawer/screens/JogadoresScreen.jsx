import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function JogadoresScreens() {

  const jogadores = [
    {
      nome: "Marcelo",
      numero: 12,
      posicao: "Lateral-esquerdo",
      idade: 35,
      imagem: "https://i.pinimg.com/736x/29/1a/09/291a093df6d3e27f0324d0e2f50b7149.jpg"
    },
    {
      nome: "Ganso",
      numero: 10,
      posicao: "Meia",
      idade: 34,
      imagem: "https://i.pinimg.com/736x/30/a6/52/30a652efa4f0dc6f55e0ed151528b35d.jpg"
    },
    {
      nome: "Germán Cano",
      numero: 14,
      posicao: "Atacante",
      idade: 36,
      imagem: "https://i.pinimg.com/736x/5e/f6/e8/5ef6e81a540fc3d9d4a3fbfeac574053.jpg"
    },
    {
      nome: "Jonh Kennedy",
      numero: 9,
      posicao: "Atacante",
      idade: 19,
      imagem: "https://i.pinimg.com/736x/e9/1d/c6/e91dc675e153c1f8b5c03128bfbeb2f7.jpg"
    },
    {
      nome: "Fred",
      numero: 9,
      posicao: "Atacante",
      idade: 35,
      imagem: "https://i.pinimg.com/736x/52/1d/97/521d97d2ae457da4a15413aeadb8523d.jpg"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.bordaImagem}>
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
            </View>
            <Card.Content>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.texto}>Número: {item.numero}</Text>
              <Text style={styles.texto}>Posição: {item.posicao}</Text>
              <Text style={styles.texto}>Idade: {item.idade} anos</Text>
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
    backgroundColor: '#e9f5ec',
    padding: 16
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 4
  },
  bordaImagem: {
    borderWidth: 3,
    borderColor: 'red', 
    borderRadius: 8,
    overflow: 'hidden', 
    marginBottom: 12
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', 
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#006633',
    fontFamily: 'Roboto', 
  },
  texto: {
    fontSize: 16,
    marginTop: 4,
    color: '#333',
    fontFamily: 'Roboto', 
  }
});
