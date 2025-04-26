import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
      },
      modalContainer: {
        width: 300,
        backgroundColor: '#F0F4FF', // Cor de fundo principal
        borderRadius: 10,
        padding: 20,
        elevation: 5,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      optionsContainer: {
        marginTop: 10,
      },
      option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0', // Cor do fundo da opção
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      },
      iconContainer: {
        backgroundColor: '#2B2B2B', // Fundo do ícone
        padding: 8,
        borderRadius: 50,
        marginRight: 10,
      },
      optionText: {
        fontSize: 16,
        color: 'black',
      },
});

export default styles;
