import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "#d1d6e2", // Cor de fundo similar à imagem
    borderRadius: 20,
    padding: 20,
    borderWidth: 3, // Borda vermelha ao redor
    borderColor: "#01BB8", // Cor da borda
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4f4f4f", // Cor similar à imagem
    textAlign: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4f4f4f",
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff4c4c", // Borda vermelha como mostrado na imagem
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    width: "48%", // Tamanho adequado para dois inputs lado a lado
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  button: {
    width: "40%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#00b894", // Verde para o botão Adicionar
  },
  cancelButton: {
    backgroundColor: "#ff4c4c", // Vermelho para o botão Cancelar
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
