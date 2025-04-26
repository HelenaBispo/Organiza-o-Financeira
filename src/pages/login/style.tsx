import { Dimensions, StyleSheet, Platform } from "react-native"; // Import Platform
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    boxtop: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    boxMiddle: {
        width: '100%',
        height: Dimensions.get('window').height / 4,
        paddingHorizontal: 37,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 18,
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
    },
    input: {
        width: '90%',
        height: '100%',
        marginLeft: 5,
        color: themas.colors.gray,
        paddingLeft: 5,
    },
    icon: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginRight: 5,
    },
    buttom: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themas.colors.primary,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
            },
            android: {
                elevation: 8,
            },
            web: {
                // Para web, use boxShadow (somente CSS na web)
                boxShadow: "0px 6px 5.62px rgba(0, 0, 0, 0.2)",
            },
        }),
    },
    textButton: {
        fontSize: 18,
        color: '#FFFF',
        fontWeight: 'bold',
    },
    textBotton: {
        fontSize: 16,
        color: themas.colors.gray,
        marginBottom: 20,
    },
    balanceLabel: {
      ...Platform.select({
        web: { verticalAlign: 'middle' },
        ios: { textAlignVertical: 'center' },
        android: { textAlignVertical: 'center' },
      }),
      fontSize: 14,
      color: 'white',
    },
    form:{
      width: '90%',
      height: '100%',
      marginLeft: 5,
      color: themas.colors.gray,
      paddingLeft: 5,
    }
});
