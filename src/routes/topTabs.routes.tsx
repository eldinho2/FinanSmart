import HomeScreen from "../screens/Categoria";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import InfoMes from "../screens/InfoMes";
import InfoMeses from "../screens/InfoMeses";
import { Dimensions } from "react-native";
const Tab = createMaterialTopTabNavigator();

import { BottomTabsRoutes } from "./bottomTabs.routes";

const date = new Date();

let nomesMeses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const mesAtual = nomesMeses[date.getMonth()];

export function TopTabsRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="MesAtual"
      initialLayout={{ width: Dimensions.get("window").width }}
    >
      <Tab.Screen
       name="Categoria"
       component={HomeScreen}
      />
      <Tab.Screen
       name={'MesAtual'}
       component={InfoMes}
        options={{
          title: mesAtual,
        }}
      />
      <Tab.Screen
        name="Mensal"
        component={InfoMeses}
      />
    </Tab.Navigator>
  );
}
