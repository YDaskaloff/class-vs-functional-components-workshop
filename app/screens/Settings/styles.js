import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 20
    },
    lightButtonStyle: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#E97451',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    lightButtonTextStyle: {
        fontSize: 15,
        fontWeight: '600'
    },
    darkButtonStyle: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#850a01',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    darkButtonTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff'
    },
});
