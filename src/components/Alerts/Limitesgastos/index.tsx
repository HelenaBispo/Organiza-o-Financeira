import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./style";

interface NovaTransacaoProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const NovaTransacao: React.FC<NovaTransacaoProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          {/* Título e botão de fechar */}
          <View style={styles.header}>
            <Text style={styles.modalTitle}>NOVA TRANSAÇÃO</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Botões de Receita e Despesa */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.receitaButton}>
              <Text style={styles.buttonText}>RECEITA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.despesaButton}>
              <Text style={styles.buttonText}>DESPESA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NovaTransacao;
