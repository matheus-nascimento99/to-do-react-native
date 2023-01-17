import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 25
    },
    statusItem: {
        flexDirection: 'row'
    },
    statusText_1: {
        color: '#4EA8DE',
        fontWeight: 'bold',
    },
    statusText_2: {
        color: '#5E60CE',
        fontWeight: 'bold'
    },
    statusQtd: {
        color: '#FFF',
        marginLeft: 10,
        fontWeight: 'bold',
        backgroundColor: '#333333',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10
    }
})