import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Platform } from "react-native";
import { Avatar } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { styles } from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import RelatorioModal from "../../components/Modals/Relatorios";
import * as SecureStore from 'expo-secure-store'; // Apenas para mobile
import { api } from "../../services/axios";

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  birthDate: string;
  profession: string;
  salary: number;
  createdAt: string;
  updatedAt: string;
}

interface Expense {
  description: string;
  amount: number;
  createdAt: string;
}


export default function Home() {
  const atualyDate = new Date();
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];
  const categories = [
    { color: "red", label: "ALUGUEL", amount: "R$ 1000,00" },
    { color: "orange", label: "ALIMENTAÇÃO", amount: "R$ 7000,00" },
    { color: "yellow", label: "TRANSPORTE", amount: "R$ 4000,00" },
    { color: "green", label: "LAZER", amount: "R$ 9000,00" },
    { color: "purple", label: "OUTROS", amount: "R$ 1200,00" },
  ];
  const currentMonth = monthNames[atualyDate.getMonth()];
  const navigation = useNavigation<NavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [despesasMensais, setDespesasMensais] = useState<{
    fixedExpenses: Expense[];
    variableExpenses: Expense[];
  }>({
    fixedExpenses: [],
    variableExpenses: [],
  });
  

  // Função para buscar dados do usuário, diferenciando por plataforma
  useEffect(() => {
    async function fetchUserData() {
      try {
        let storedUser: string | null = null;
        
        if (Platform.OS === 'web') {
          // Web: usar localStorage
          storedUser = localStorage.getItem("user");
        } else {
          // Mobile: usar SecureStore
          storedUser = await SecureStore.getItemAsync("user");
        }

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          await fetchDespesasMensais(parsedUser.id);  // Chama a função de buscar despesas após obter o usuário
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    }

    fetchUserData();
  }, []);

  // Função para buscar despesas mensais
  async function fetchDespesasMensais(userId: number) {
    try {
      const startDate = new Date(atualyDate.getFullYear(), atualyDate.getMonth(), 1).toISOString();
      const endDate = new Date(atualyDate.getFullYear(), atualyDate.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();

      const searchObject = {
        userId: userId,
        startDate: startDate,
        endDate: endDate,
      };

      const response = await api.post("finance/list-by-period", searchObject);
      const { fixedExpenses, variableExpenses } = response.data.data;
      setDespesasMensais({
        fixedExpenses: fixedExpenses,
        variableExpenses: variableExpenses,
      });

    } catch (error) {
      console.error("Erro ao buscar despesas mensais:", error);
    }
  }

    const getColorForExpense = (index: number) => {
    const colors = ["red", "orange", "yellow", "green", "purple", "blue"];
    return colors[index % colors.length];
  };

  const handlePrinterClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BottomRoutes", { screen: "User" })
          }
          style={styles.avatarContainer}
        >
          <Avatar.Text size={50} label="U" style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.monthContainer}>
          <Text style={styles.monthText}>{currentMonth}</Text>
        </View>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo atual na conta</Text>
        <Text style={styles.balance}>R$ {user?.salary ?? ""}</Text>
        <Ionicons name="eye-off" size={24} color="black" />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <MaterialCommunityIcons name="lock-outline" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePrinterClick}
          style={styles.circleButton}
        >
          <MaterialCommunityIcons name="printer" size={32} color="black" />
        </TouchableOpacity>

        <RelatorioModal visible={modalVisible} onClose={handleCloseModal} />

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() =>
            navigation.navigate("BottomRoutes", { screen: "Financas" })
          }
        >
          <MaterialCommunityIcons
            name="swap-horizontal"
            size={32}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() =>
            navigation.navigate("BottomRoutes", {
              screen: "CategoriaDeFinancas",
            })
          }
        >
          <FontAwesome name="file-text-o" size={32} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.chartTitle}>RESUMO DAS DESPESAS MENSAIS</Text>
      <View style={styles.chartContainer}>
        {/* Gráfico circular ou outro componente de gráfico */}
        <Text>Gráfico Circular</Text>
        <View style={styles.categories}>
          {despesasMensais.fixedExpenses.length > 0 ? (
              despesasMensais.fixedExpenses.map((item, index) => (
                <View key={index} style={styles.categoryItem}>
                  <View style={[styles.circle, { backgroundColor: "gray" }]} />
                  <Text>{item.description}</Text>
                  <Text>R$ {item.amount}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noExpensesText}>Nenhuma despesa fixa registrada.</Text>
            )}
        </View>
      </View>
    </ScrollView>
  );
}
