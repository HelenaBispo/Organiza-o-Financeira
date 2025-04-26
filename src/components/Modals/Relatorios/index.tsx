import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from "./style"; // Importa os estilos


interface RelatorioModalProps {
  visible: boolean;
  onClose: () => void;
}

const RelatorioModal: React.FC<RelatorioModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Cabeçalho com título e botão de fechar */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Relatorios</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Botões de relatório */}
          <View style={styles.optionsContainer}>
            {renderOption('Gerar relatorio semanal')}
            {renderOption('Gerar relatorio mensal')}
            {renderOption('Gerar relatorio semestral')}
            {renderOption('Gerar relatorio anual')}
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Função auxiliar para renderizar cada opção
const renderOption = (label: string) => (
  <TouchableOpacity style={styles.option} key={label}>
    <View style={styles.iconContainer}>
      <MaterialIcons name="description" size={24} color="white" />
    </View>
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

export default RelatorioModal;