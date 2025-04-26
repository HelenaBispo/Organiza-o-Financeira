import React, { useState } from "react";
import { Pressable } from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native"; // Importar Platform
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { themas } from "../../global/themes";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { api } from "../../services/axios";
import * as SecureStore from "expo-secure-store"; // Import SecureStore
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage para web

// Função para salvar os dados de login, verificando se é web ou mobile
async function saveLoginData(token: string, user: object) {
  if (Platform.OS === "web") {
    // Para web, use AsyncStorage ou localStorage
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } else {
    // Para mobile, use SecureStore
    await SecureStore.setItemAsync("token", token);
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  }
}

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      // Faz a requisição de login
      const response = await api.post("/auth/login", { email, password });

      // Verifica se a resposta foi bem-sucedida
      if (response.status === 200) {
        const { accessToken, user } = response.data.response;
        await saveLoginData(accessToken, user); // Salve o token de forma segura

        Alert.alert("Sucesso", "Logado com Sucesso!");
        setLoading(false);

        // Verifica se é web ou mobile para navegar corretamente
        if (Platform.OS === "web") {
          console.log("entre aqui");
          window.location.href = "/home"; // Ajuste para a URL correta
        } else {
          // Para mobile, navegue usando o navigation do react-navigation
          navigation.navigate("BottomRoutes", { screen: "Home" });
        }
      }
    } catch (error: any) {
      setLoading(false);

      if (error.response) {
        if (error.response.status === 401 || error.response.status === 404) {
          Alert.alert("Erro", "Usuário ou senha inválidos.");
        } else {
          Alert.alert("Erro", `Erro desconhecido: ${error.response.status}`);
        }
      } else if (error.request) {
        Alert.alert(
          "Erro",
          "Não foi possível conectar ao servidor. Verifique sua conexão."
        );
      } else {
        Alert.alert("Erro", `Erro inesperado: ${error.message}`);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxtop}>
        <Text style={styles.title}>Bem vindo de Volta!</Text>
      </View>
      <View style={styles.boxMiddle}>
        <Text style={styles.titleInput}>Endereço de e-mail</Text>
        <View style={styles.boxInput}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            inputMode="email" // Substitui keyboardType="email-address"
          />
          <MaterialIcons
            name="email"
            size={28}
            color={themas.colors.gray}
            style={styles.icon}
          />
        </View>

        <Text style={styles.titleInput}>Senha</Text>
        <View style={styles.boxInput}>
          {Platform.OS === "web" ? (
            <form style={styles.form}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </form>
          ) : (
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          )}
          <MaterialIcons
            name="lock"
            size={28}
            color={themas.colors.gray}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.boxBottom}>
        <Pressable style={styles.buttom} onPress={getLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color={themas.colors.secondary} />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </Pressable>
      </View>
      <Text style={styles.textBotton}>
        Não Tem Conta?
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={{ color: themas.colors.primary }}> Crie Sua Conta</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
