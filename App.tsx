import 'react-native-gesture-handler'; // Import no topo
import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/Routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // Estilos para o seu App
});
