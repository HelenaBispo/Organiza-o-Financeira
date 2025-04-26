import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';
import { api } from "../../services/axios";

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [profissao, setProfissao] = useState('');
  const [salario, setSalario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function handleCadastro () {
    const userData = {
      email: email,
      password: senha,
      name: nome,
      birthDate: nascimento ? new Date(nascimento) : undefined,
      profession: profissao,
      salary: salario ? parseFloat(salario) : undefined,
    };

    try {
      const response = await api.post('/user/create', userData);
      console.log('Response:', response);
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
      const status: number = response.status;
      console.log('Response status:', status);
      // Verifica se o status da resposta está em `response.status` ou `response.data`
      if (response.status === 201 || response?.data?.status === 201) {
        console.log('Usuário cadastrado com sucesso!');
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      } else {
        Alert.alert('Erro', 'Ocorreu um problema no cadastro.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FINANCE</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          placeholder="Nascimento"
          value={nascimento}
          onChangeText={setNascimento}
        />
        <Picker
          selectedValue={sexo}
          style={[styles.input, { flex: 1 }]}
          onValueChange={(itemValue: any) => setSexo(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Profissão"
        value={profissao}
        onChangeText={setProfissao}
      />

      <TextInput
        style={styles.input}
        placeholder="Salário"
        value={salario}
        onChangeText={setSalario}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR-SE</Text>
      </TouchableOpacity>
    </View>
  );
}
