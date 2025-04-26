import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#1b1e29',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    avatar: {
        backgroundColor: '#ddd',
    },
    monthText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    monthContainer: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    avatarContainer: {
        marginRight: 70,
    },
    balanceContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    balanceLabel: {
        fontSize: 14,
        color: 'white',
    },
    balance: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    chartTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    categories: {
        marginTop: 20,
        width: '60%',
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
    },
    expenseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      expenseDetails: {
        flexDirection: 'column',
      },
      expenseLabel: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      expenseAmount: {
        fontSize: 14,
        color: 'gray',
      },
      expenseSectionTitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
      },
      noExpensesText: {
        fontStyle: 'italic',
        color: 'gray',
      },
});
