import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    firstPartLogo: {
        color: '#4EA8DE',
        fontSize: 40,
        fontWeight: 'bold'
    },
    lastPartLogo: {
        color: '#5E60CE',
        fontSize: 40,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        resizeMode:"cover", 
        width:40, 
        height:30
    }
})