import { StyleSheet,View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button} from 'react-native-paper'

export default function Nome() {
    
   const [nome, setNome] = useState()
   const [numero, setNumero] = useState ()
    



    function esconder() {
     setNome('blocked')
     setNumero(numero + 1)
     console.log(nome)
    }
    function revelar() {
    setNome('Vini')
    setNumero(numero + 1)
     console.log(nome)
    }
  return (
    <View>
        <Card>
            <Card.Content>
                <Card.Title title="Componente nome" />
                <Text>Nome: {nome}</Text>


            </Card.Content>
            <Card.Actions>
                <Button onPress={esconder}>Esconder</Button>
                <Button onPress={revelar}>Revelar</Button>
            </Card.Actions>
        </Card>
    
    </View>
  )
}

const styles = StyleSheet.create({})