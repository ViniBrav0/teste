
import React from 'react'
import HomeScreen from '../screens/HomeScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen'
import ConfigScreen from '../screens/ConfigScreen'
import UserScreen from '../screens/UserScreen'
import { Ionicons} from "@expo/vector-icons";

import { createDrawerNavigator } from '@react-navigation/drawer' 

const Drawer = createDrawerNavigator()

export default function DrawerRoutes () {
return (
       <Drawer.Navigator>

<Drawer.Screen name='HomeScreen' 
 options={{ title: "Início" , drawerIcon: ({color, size}) => 
 <Ionicons name='home' color={color} size={size} />}}  
   component={HomeScreen} />

<Drawer.Screen name='ProfileScreen' 
 options={{ title: "Perfil" , drawerIcon: ({color, size}) => 
 <Ionicons name='person' color={color} size={size} />}}  
   component={ProfileScreen} />

<Drawer.Screen name='UserScreen' 
 options={{ title: "Usuario" , drawerIcon: ({color, size}) => 
 <Ionicons name='person' color={color} size={size} />}}  
   component={UserScreen} />

<Drawer.Screen name='ConfigScreen' 
 options={{ title: "Configurações" , drawerIcon: ({color, size}) => 
 <Ionicons name='settings' color={color} size={size} />}}  
   component={ConfigScreen} />




       </Drawer.Navigator>
)


}
