import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import styles from "./style"; // Importa os estilos

interface AdicionarReceitaProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CadastrarReceita: React.FC<AdicionarReceitaProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Cadastrar Receita</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />

        {/* Input para Valor */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Valor</Text>
            <TextInput
              style={styles.input}
              placeholder="Valor"
              keyboardType="numeric"
              value={valor}
              onChangeText={setValor}
            />
          </View>

          {/* Input para Pagamento */}
          <View style={styles.column}>
            <Text style={styles.label}>Pagamento</Text>
            <TextInput
              style={styles.input}
              placeholder="Pagamento"
              value={categoria}
              onChangeText={setCategoria}
            />
          </View>
        </View>

        {/* Input para Categoria */}
        <Text style={styles.label}>Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
        />

        {/* Botões Adicionar e Cancelar */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={() => {
              // Lógica para adicionar a despesa
              setModalVisible(false);
            }}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CadastrarReceita;
