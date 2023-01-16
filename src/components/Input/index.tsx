import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { Button } from "../Button";

export const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={'#808080'}
                style={styles.input}
            />
            <Button />
        </View>
    );
}