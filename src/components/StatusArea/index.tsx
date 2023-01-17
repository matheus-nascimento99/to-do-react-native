import { View, Text } from "react-native";
import { styles } from "./style";

interface StatusAreaType {
    createdies: number,
    finishedies: number
}

export const StatusArea = ({createdies, finishedies}: StatusAreaType) => {
    return (
        <View style={styles.container}>

            <View style={styles.statusItem}>
                
                <Text style={styles.statusText_1}>
                    Criadas
                </Text>

                <Text style={styles.statusQtd}>
                    {createdies}
                </Text>

            </View>

            <View style={styles.statusItem}>

                <Text style={styles.statusText_2}>
                    Concluídas
                </Text>

                <Text style={styles.statusQtd}>
                    {finishedies}
                </Text>

            </View>
            
        </View>
    );
}