import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';

interface AlertaLimiteGastosProps {
  message: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertaLimiteGastos: React.FC<AlertaLimiteGastosProps> = ({ message, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="warning" size={40} color="white" />
          </View>
          <Text style={styles.alertText}>
            {message}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertaLimiteGastos;