import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Login from "../screens/LoginScreens/Login/LoginPage";
import CreateAccount from "../screens/LoginScreens/CreateAccount/CreateAccountPage";
import { TopTabsRoutes } from "./topTabs.routes";
import { Alert } from "react-native";
import OverlayComponent from '../components/AddBillButton/OverlayComponent'
import { View } from "react-native";
import { OverlayContext } from "../contexts/OverlayContext";
import { useContext } from "react";
const { Navigator, Screen } = createNativeStackNavigator();

export function LoginRoutes() {
  const { overlayOpen } = useContext(OverlayContext);

  return (
    <View style={{ flex: 1 }}>
      <Navigator>
        <Screen
          name="Login"
          component={Login}
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
          component={TopTabsRoutes}
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
      </Navigator>
      {overlayOpen && (
        <OverlayComponent />
      )}
    </View>
  );
}
