import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Escudo from './screens/Escudo'
import Jogadores from './screens/Jogadores'
import TitulosScreen from './screens/Titulos'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName
              if (route.name === 'Escudo') iconName = 'shield'
              else if (route.name === 'Jogadores') iconName = 'account-group'
              else if (route.name === 'Títulos') iconName = 'trophy-variant'

              return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#770000', 
            tabBarInactiveTintColor: '#006600', 
            tabBarStyle: {
              backgroundColor: '#ffffff', 
              borderTopColor: '#770000',
              borderTopWidth: 1,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            headerStyle: { backgroundColor: '#770000' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen name="Escudo" component={Escudo} />
          <Tab.Screen name="Jogadores" component={Jogadores} />
          <Tab.Screen name="Títulos" component={TitulosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
