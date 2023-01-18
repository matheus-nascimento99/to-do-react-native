import { View, Text, Image } from "react-native";
import { styles } from "./style";

export const EmptyListInfo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/images/task.png')} style={styles.emptyListInfoImage} />
            <Text style={styles.emptyListInfoTextBold} >Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyListInfoText} >Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}

