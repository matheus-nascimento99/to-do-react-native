import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "absolute",
        top: 100,
        zIndex: 5000,
        padding: 20
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#262626',
        marginRight:5,
        padding:10,
        color: '#FFF',
        fontSize: 15
    }
})