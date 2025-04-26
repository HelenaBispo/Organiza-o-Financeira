import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';
const screenWidth = Dimensions.get('window').width;

const data = [
  { name: 'Aluguel', population: 200, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Alimentação', population: 150, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Transporte', population: 120, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Lazer', population: 150, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Outros', population: 50, color: 'lightgreen', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];

export default function CategoriaDeFinancas() {
  const [selectedCategory, setSelectedCategory] = useState('Tudo');

  const despesas = [
    { title: 'Uber', category: 'Transporte', method: 'dinheiro', date: '31/10/2024', amount: 120 },
    { title: 'Academia', category: 'Lazer', method: 'dinheiro', date: '31/10/2024', amount: 85 },
    { title: 'Hospital São Pedro', category: 'Saúde', method: 'cartão', date: '30/10/2024', amount: 250 },
    { title: 'Gol linhas aéreas', category: 'Lazer', method: 'cartão', date: '30/10/2024', amount: 850 },
    { title: 'Burger Grill', category: 'Alimentação', method: 'dinheiro', date: '30/10/2024', amount: 75 },
  ];

  const filteredDespesas = selectedCategory === 'Tudo'
    ? despesas
    : despesas.filter(despesa => despesa.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.monthText}>OUTUBRO</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#fff" />
      </View>

      {/* Gráfico de Categorias */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>CATEGORIA DE DESPESAS</Text>
        <PieChart
          data={data}
          width={screenWidth - 40}
          height={180}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Filtros de Categoria */}
      <ScrollView horizontal style={styles.categoriesContainer}>
        {['Tudo', 'Aluguel', 'Alimentação', 'Transporte', 'Lazer', 'Outros'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonSelected]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Despesas */}
      <ScrollView style={styles.despesasContainer}>
        {filteredDespesas.map((despesa, index) => (
          <View key={index} style={styles.despesaItem}>
            <View>
              <Text style={styles.despesaTitle}>{despesa.title}</Text>
              <Text style={styles.despesaCategory}>{despesa.category} | {despesa.method}</Text>
            </View>
            <Text style={styles.despesaDate}>{despesa.date}</Text>
            <Text style={styles.despesaAmount}>R${despesa.amount},00</Text>
            <MaterialIcons name="account-balance-wallet" size={20} color="red" />
            <MaterialIcons name="arrow-downward" size={20} color="red" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

