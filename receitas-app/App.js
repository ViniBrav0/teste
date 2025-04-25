import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {PaperProvider } from 'react-native-paper'
import ReceitaScreen from './screens/ReceitaScreen'
import InicioScreen from './screens/InicioScreen'


const Stack = createNativeStackNavigator()

export default function App() {
 return (
  <PaperProvider>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='InicioScreen' component={InicioScreen} options={{title: 'Tela Inicial'}} />
     <Stack.Screen name="ReceitaScreen" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
    </Stack.Navigator>
   </NavigationContainer>
  </PaperProvider>
 )
}
