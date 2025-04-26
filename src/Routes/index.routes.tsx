import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Financas from "../pages/Financas";
import BottomRoutes from "./bottom.routes";  // Certifique-se de que o caminho está correto
import Home from "../pages/Home";
import Cadastro from "../pages/cadastro";
import CategoriaDeFinancas from "../pages/categoriaDeDespesas";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#FFFF",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Financas" component={Financas} />
      <Stack.Screen name="CategoriaDeFinancas" component={CategoriaDeFinancas} />
    </Stack.Navigator>
  );
}
