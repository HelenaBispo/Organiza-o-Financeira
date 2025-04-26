import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        width: 300,
        backgroundColor: '#d3d3d3', // Cor de fundo do modal
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      receitaButton: {
        backgroundColor: '#3cba54', // Cor verde para Receita
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10,
      },
      despesaButton: {
        backgroundColor: '#ea4335', // Cor vermelha para Despesa
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default styles;
