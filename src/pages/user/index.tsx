import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style'; // Importa o estilo
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function User() {
    const  navigation = useNavigation<NavigationProp<any>>();
    return (
        <ImageBackground source={{ uri: 'https://i.ibb.co/WWmSS6c/background.jpg' }} style={styles.background}>
            <View style={styles.container}>
                {/* Cabeçalho com Avatar */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate('BottomRoutes', {screen:'Home'})}>
                        <FontAwesome name="arrow-left" size={24} color="white" />
                    </TouchableOpacity>
                {/*   <Avatar.Image size={100} source={require('./path/to/avatar.png')} style={styles.avatar} /> */}
                </View>

                {/* Dados do Perfil */}
                <Text style={styles.profileTitle}>Dados do Perfil</Text>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} value="exemplo@mail.com" editable={false} />

                    <Text style={styles.label}>Nome</Text>
                    <View style={styles.inputRow}>
                        <TextInput style={styles.input} value="JOSÉ COSTA SILVA" editable={false} />
                        <TouchableOpacity style={styles.editButton}>
                            <MaterialCommunityIcons name="pencil" size={20} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputRow}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Nascimento</Text>
                            <TextInput style={styles.input} value="XX/XX/XXXX" editable={false} />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Sexo</Text>
                            <TextInput style={styles.input} value="Selecione" editable={false} />
                        </View>
                    </View>

                    <Text style={styles.label}>Profissão</Text>
                    <TextInput style={styles.input} value="Desenvolvedor de Software" editable={false} />

                    <Text style={styles.label}>Salário</Text>
                    <View style={styles.inputRow}>
                        <TextInput style={styles.input} value="R$0.000,00" editable={false} />
                        <TouchableOpacity style={styles.editButton}>
                            <MaterialCommunityIcons name="pencil" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
