import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Dimensions } from "react-native";
const Tab = createMaterialTopTabNavigator();

import AddBill from "../screens/AddBills/AddBill";
import AddIncome from "../screens/AddBills/Addincome";

export function TopTabsAddBills() {
  return (
    <Tab.Navigator
      initialRouteName="AddBill"
      initialLayout={{ width: Dimensions.get("window").width }}
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
       name="Despesa"
       component={AddBill}
      />
      <Tab.Screen
       name='Renda'
       component={AddIncome}
      />
    </Tab.Navigator>
  );
}
