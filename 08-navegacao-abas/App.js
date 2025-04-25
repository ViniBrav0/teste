import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ModalidadesScreen from './screens/ModalidadesScreen'
import ArenasScreen from './screens/ArenasScreen'
import OlimpiadasScreen from './screens/OlimpiadasScreen.jsx'
import EstatisticasScreen from './screens/EstatisticasScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => {
              let iconName
              if (route.name === 'Modalidades') iconName = 'run'
              else if (route.name === 'Arenas') iconName = 'stadium'
              else if (route.name === 'Olimpíadas') iconName = 'olympics'
              else if (route.name === 'Estatísticas') iconName = 'chart-bar'
              return <Icon name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="Modalidades" component={ModalidadesScreen} />
          <Tab.Screen name="Arenas" component={ArenasScreen} />
          <Tab.Screen name="Olimpíadas" component={OlimpiadasScreen} />
          <Tab.Screen name="Estatísticas" component={EstatisticasScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
