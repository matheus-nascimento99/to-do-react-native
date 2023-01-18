import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent:"center",
        alignItems: "center"
    },
    emptyListInfoImage: {
        resizeMode:"cover", 
        width:50, 
        height:50,
    },
    emptyListInfoTextBold: {
        color: '#808080',
        fontWeight: "bold",
        marginTop: 10
    }, 
    emptyListInfoText: {
        color: '#808080'
    }
})