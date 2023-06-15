import SettingsScreen from '../components/SettingsScreen'
import HomeScreen from '../screens/MainScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

const date = new Date();

let nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const mesAtual = nomesMeses[date.getMonth()];

export function TopTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categoria" component={HomeScreen} />
      <Tab.Screen name={`${mesAtual}`} component={SettingsScreen} />
      <Tab.Screen name="Mensal" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
