import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      monthText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },
      chartContainer: {
        backgroundColor: '#d1d8e0',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
      },
      chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
      },
      categoriesContainer: {
        marginBottom: 10,
        maxHeight: 40,
      },
      categoryButton: {
        backgroundColor: '#6c757d',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
      },
      categoryButtonSelected: {
        backgroundColor: '#ff4757',
      },
      categoryText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      despesasContainer: {
        flex: 1,
      },
      despesaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff6b81',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
      },
      despesaTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
      despesaCategory: {
        fontSize: 14,
        color: '#fff',
      },
      despesaDate: {
        fontSize: 14,
        color: '#fff',
      },
      despesaAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
});
