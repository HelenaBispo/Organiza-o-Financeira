import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(27, 30, 41, 0.8)', // Adiciona um fundo semi-transparente
        padding: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    avatar: {
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    editIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#1b1e29',
        padding: 10,
        borderRadius: 20,
    },
    profileTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    formContainer: {
        backgroundColor: '#2d3443',
        borderRadius: 20,
        padding: 20,
    },
    label: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    inputBlock: {
        flex: 1,
        marginRight: 10,
    },
    editButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#2d3443',
        borderRadius: 10,
    },
});