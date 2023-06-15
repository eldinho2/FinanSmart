import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Feather } from '@expo/vector-icons'
import Login from "../screens/Login/LoginPage";
import CreateAccount from "../screens/CreateAccount/CreateAccountPage";
import { TopTabsRoutes } from './topTabs.routes'
import { Alert } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

export function LoginRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={
          {
            headerShown: false
          }
        }
        />
      <Screen
        name="CreateAccount"
        component={CreateAccount}
        options={
          {
            headerShown: false
          }
        }
        />
      <Screen
        name="Home"
        component={TopTabsRoutes}
        options={
          {
            title: 'Despesas',
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerRight: () => (
              <Feather
                name="search"
                size={24}
                color="black"
                style={{ marginRight: 15 }}

                onPress={() => {
                  Alert.alert('Pesquisar')
                }}
              />
            )
          }
        }
        />
    </Navigator>
  )
}