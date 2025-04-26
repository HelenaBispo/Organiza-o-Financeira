import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../pages/user";
import Home from "../pages/Home";
import Financas from "../pages/Financas";
import Cadastro from "../pages/cadastro";
import CategoriaDeFinancas from "../pages/categoriaDeDespesas";
import { MaterialIcons } from '@expo/vector-icons';  // Adicionar ícones (opcional)

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Financas" component={Financas} />
      <Tab.Screen name="CategoriaDeFinancas" component={CategoriaDeFinancas} />
    </Tab.Navigator>
  );
}
