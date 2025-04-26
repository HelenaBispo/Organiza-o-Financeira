import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c2f3f",
        justifyContent: "center",
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
      },
      input: {
        backgroundColor: "#c3cad6",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      button: {
        backgroundColor: "#4c526b",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
      },
})