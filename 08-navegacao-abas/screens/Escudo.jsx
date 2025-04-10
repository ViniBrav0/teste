import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const time = {
  nome: "Fluminense",
  escudo: "https://i.pinimg.com/736x/6a/3f/55/6a3f55ce0ea6fa8b36c92c6228006df6.jpg",
  fundacao: "21 de julho de 1902",
  titulos: "Libertadores, Brasileirão, Copa do Brasil, Carioca, Torneio Rio-São Paulo",
  apelido: "Fluzão",
  historia: `O Fluminense Football Club é um dos clubes mais tradicionais do Brasil e da América do Sul. Fundado por Oscar Cox em 1902, no bairro das Laranjeiras, no Rio de Janeiro, o Tricolor das Laranjeiras foi o primeiro clube carioca a se dedicar exclusivamente ao futebol. 

Desde então, construiu uma trajetória gloriosa, sendo pioneiro em diversas conquistas, como o primeiro campeão carioca em 1906. O Fluminense se tornou símbolo de elegância e tradição, revelando craques e formando uma torcida apaixonada.

Ao longo de sua história, o Flu conquistou títulos emblemáticos como o Campeonato Brasileiro, a Copa do Brasil, e o auge veio em 2023, com a conquista da tão sonhada Copa Libertadores, no Maracanã lotado. O clube é conhecido pela força das arquibancadas e por manter vivo o espírito do futebol arte.

Mais que um clube, o Fluminense é uma verdadeira paixão, um sentimento que atravessa gerações. Um gigante do futebol brasileiro que orgulha sua torcida com raça, tradição e glórias.`
}

export default function Escudo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
      <Text style={styles.info}>Apelido: {time.apelido}</Text>
      <Text style={styles.info}>Fundado em: {time.fundacao}</Text>
      <Text style={styles.info}>Títulos mais importantes: {time.titulos}</Text>
      <Text style={styles.historia}>{time.historia}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  escudo: {
    width: 120,
    height: 120,
    marginVertical: 20,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  info: {
    fontSize: 16,
    fontFamily: 'Poppins',
    marginVertical: 2,
    textAlign: 'center',
  },
  historia: {
    fontSize: 15,
    fontFamily: 'Poppins',
    marginTop: 20,
    textAlign: 'justify',
  }
})
