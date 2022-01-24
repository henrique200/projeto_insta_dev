import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInstaDev: {
        fontFamily: 'Lobster_400Regular',
        fontSize: 50,
        color: '#222'
    },
    containerInput: {
        marginTop: 15,
        marginHorizontal: 16,
    },
    Input: {
        width: 300,
        height: 50,
        backgroundColor: '#ddd',
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        color: '#000'
        
    },
    buttom: {
        width: 300,
        height: 50,
        backgroundColor: '#4db4f0',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#222'
    },
    textSignUp: {
        fontSize: 14,
        color: '#222',
        textAlign: 'center'
    }
});

export default styles;