import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import EscudoScreens from '../screens/EscudoScreen';
import JogadoresScreens from '../screens/JogadoresScreen';
import TitulosScreens from '../screens/TituloScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // Estilo do Drawer
        drawerStyle: {
          backgroundColor: '#006633', // Cor de fundo do menu
          width: 240,
        },
        drawerLabelStyle: {
          color: '#ffffff', // Cor do texto dos itens
          fontWeight: 'bold',
          fontSize: 18, // Tamanho da fonte
        },
        drawerActiveBackgroundColor: '#990000', // Cor de fundo do item ativo
        drawerActiveTintColor: '#ffffff', // Cor do texto do item ativo
        drawerInactiveTintColor: '#ffffff', // Cor do texto do item inativo
        drawerIcon: ({ color, size }) => (
          <Ionicons color={color} size={size} />
        ),
      }}
    >
      <Drawer.Screen
        name="EscudoScreen"
        component={EscudoScreens}
        options={{
          title: 'Escudos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="JogadoresScreen"
        component={JogadoresScreens}
        options={{
          title: 'Jogadores',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="TitulosScreen"
        component={TitulosScreens}
        options={{
          title: 'Títulos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
