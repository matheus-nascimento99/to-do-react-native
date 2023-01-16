import { View, Text } from "react-native";
import { styles } from "./style";

export const StatusArea = () => {
    return (
        <View style={styles.container}>

            <View style={styles.statusItem}>
                
                <Text style={styles.statusText_1}>
                    Criadas
                </Text>

                <Text style={styles.statusQtd}>
                    5
                </Text>

            </View>

            <View style={styles.statusItem}>

                <Text style={styles.statusText_2}>
                    Concluídas
                </Text>

                <Text style={styles.statusQtd}>
                    2
                </Text>

            </View>
            
        </View>
    );
}