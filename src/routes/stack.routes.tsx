import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../screens/Login/LoginPage";
import CreateAccount from "../screens/CreateAccount/CreateAccountPage";

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
    </Navigator>
  )
}