import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    lightButtonStyle: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#E97451',
        paddingVertical: 20,
    },
    lightButtonTextStyle: {
        fontSize: 15,
        fontWeight: '600'
    },
    darkButtonStyle: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#850a01',
        paddingVertical: 20,
    },
    darkButtonTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff'
    },
    jokeTextStyle: {
        fontSize: 40,
        flex: 1,
        textAlign: 'center'
    }
});


// #D37900