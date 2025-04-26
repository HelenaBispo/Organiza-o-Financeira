import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Para os ícones
import AdicionarGasto from "../../components/Modals/modal/AdicionarGasto"; // Importa o modal AdicionarGasto

interface FinanceItem {
  title: string;
  description: string;
  icon: string;
  valor: number;
  iconBackground: string;
}

interface GroupedFinances {
  [key: string]: FinanceItem[];
}

export default function Financas() {
  const [modalVisible, setModalVisible] = useState(false); // Controla o modal

  // Defina as finanças agrupadas por datas
  const groupedFinances: GroupedFinances = {
    "31, Quinta": [
      {
        title: "Uber",
        description: "Transporte | dinheiro",
        icon: "directions-car",
        valor: 120,
        iconBackground: "#f4c242", // Cor do círculo
      },
      {
        title: "Academia",
        description: "Lazer | dinheiro",
        icon: "fitness-center",
        valor: 85,
        iconBackground: "#3cba54",
      },
    ],
    "30, Quarta": [
      {
        title: "Hospital São Pedro",
        description: "Saúde | cartão",
        icon: "local-hospital",
        valor: 250,
        iconBackground: "#4285f4",
      },
      {
        title: "Gol linhas aéreas",
        description: "Lazer | cartão",
        icon: "flight",
        valor: 850,
        iconBackground: "#f4c242",
      },
      {
        title: "Burger Grill",
        description: "Alimentação | dinheiro",
        icon: "fastfood",
        valor: 75,
        iconBackground: "#ea4335",
      },
    ],
    "29, Terça": [
      {
        title: "Maria Costa da Silva",
        description: "Transação | Depósito",
        icon: "account-balance",
        valor: 1600,
        iconBackground: "#3cba54",
      },
      {
        title: "Controll Tecnologia",
        description: "Pagamento | Salário",
        icon: "business-center",
        valor: 2774,
        iconBackground: "#4285f4",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <MaterialIcons name="arrow-back" size={24} color="#FFFF" />
        <Text style={styles.monthText}>OUTUBRO</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#FFFF" />
      </View>

      {/* Caixas de Saldo Atual e Gasto Geral */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceBox}>
          <View style={styles.iconAndText}>
            <MaterialIcons name="attach-money" size={24} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.balanceText}>Saldo atual</Text>
              <Text style={styles.balanceValue}>R$ 5.600,00</Text>
            </View>
          </View>
        </View>
        <View style={styles.balanceBox}>
          <View style={styles.iconAndText}>
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color="white"
            />
            <View style={styles.textContainer}>
              <Text style={styles.balanceText}>Gasto geral</Text>
              <Text style={styles.expenseValue}>R$ 3.600,00</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Conteúdo Principal com Scroll */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.scrollIntoContainer}>
          {Object.keys(groupedFinances).map((date) => (
            <View key={date}>
              {/* Cabeçalho com a Data */}
              <Text style={styles.dateHeader}>{date}</Text>
              {groupedFinances[date].map((item) => (
                <View style={styles.itemContainer} key={date + item.title}>
                  <View
                    style={[
                      styles.iconCircle,
                      { backgroundColor: item.iconBackground },
                    ]}
                  >
                    <MaterialIcons name={item.icon} size={24} color="white" />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.itemRightContainer}>
                    <Text style={styles.itemValue}>R${item.valor},00</Text>
                    <View style={styles.iconsSection}>
                      <MaterialIcons
                        name="account-balance-wallet"
                        size={18}
                        color="red"
                      />
                      <MaterialIcons
                        name="arrow-downward"
                        size={18}
                        color="red"
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Botão para adicionar gasto */}
      <TouchableOpacity
        style={styles.adicionarGasto}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Modal para adicionar gasto */}
      <AdicionarGasto
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
