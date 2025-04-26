import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./style";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons for the car icon

interface Finance {
  title: string;
  description: string;
  status: 'Urgente' | 'Opcional' | 'Concluido';
  valor: number;
}

interface ItemProps {
  finance: Finance;
}

export default function Item({ finance }: ItemProps) {
  // Define colors based on status
  const statusStyles = {
    Urgente: {
      borderColor: 'red',
      backgroundColor: '#ffcccc',
      text: 'Urgente!',
      labelColor: 'red',
    },
    Opcional: {
      borderColor: 'orange',
      backgroundColor: '#e0f7fa',
      text: 'Opcional',
      labelColor: '#4fc3f7',
    },
    Concluido: {
      borderColor: 'green',
      backgroundColor: '#e8f5e9',
      text: 'Concluído',
      labelColor: 'green',
    },
  };

  const currentStatus = statusStyles[finance.status];

  return (
    <View style={[styles.container, { borderColor: currentStatus.borderColor }]}>
      <View style={styles.iconContainer}>
        {/* Car Icon */}
        <MaterialIcons name="directions-car" size={24} color={currentStatus.labelColor} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{finance.title}</Text>
        <Text style={styles.description}>{finance.description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.priceText, { color: currentStatus.labelColor }]}>
          {finance.valor.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
