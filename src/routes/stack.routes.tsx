import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Feather } from "@expo/vector-icons";
import LoginPage from "../screens/LoginScreens/Login/LoginPage";
import CreateAccount from "../screens/LoginScreens/CreateAccount/CreateAccountPage";
import { BottomTabsRoutes } from "./bottomTabs.routes";
import { TopTabsAddBills } from "./topTabsAddBills.routes";
import { Alert } from "react-native";
const { Navigator, Screen } = createNativeStackNavigator();


export function LoginRoutes({navigation}) {
  return (
      <Navigator>
        <Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Home"
          component={BottomTabsRoutes}
          options={{
            title: "Despesas",
            headerBackVisible: false,
            headerBackButtonMenuEnabled: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <Feather
                name="search"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
                onPress={() => {
                  Alert.alert("Pesquisar");
                }}
              />
            ),
          }}
        />
        <Screen
          name="AddBill"
          component={TopTabsAddBills}
          options={{
            headerTitleAlign: "center",
            gestureEnabled: false,
          }}
          />
      </Navigator>
  );
}
