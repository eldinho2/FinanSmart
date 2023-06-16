import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TopTabsRoutes } from "./topTabs.routes";
import Profile from "../screens/Profile";
import SettingsScreen from "../screens/SettingsScreen";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export function BottomTabsRoutes({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Main"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Main"
        component={TopTabsRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bitcoin" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
